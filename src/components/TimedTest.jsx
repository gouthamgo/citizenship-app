import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle, CheckCircle, XCircle, Award, TrendingUp, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame, XP_REWARDS } from '../contexts/GameContext';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { EXPANDED_QUESTIONS } from '../data/expanded-questions';
import { VALUES_QUESTIONS } from '../data/values-questions';
import { GOVERNMENT_QUESTIONS } from '../data/government-questions';
import { ADDITIONAL_QUESTIONS } from '../data/additional-questions';
import { EXTENDED_QUESTIONS } from '../data/extended-questions';

export default function TimedTest({ darkMode, onBack }) {
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(45 * 60); // 45 minutes in seconds
  const [showConfetti, setShowConfetti] = useState(false);
  const [testQuestions, setTestQuestions] = useState([]);

  const { completeQuiz, addXP, unlockAchievement } = useGame();
  const { width, height } = useWindowSize();

  // Generate 20 random questions for the test
  useEffect(() => {
    if (testStarted && testQuestions.length === 0) {
      const allQuestions = [
        ...EXPANDED_QUESTIONS,
        ...VALUES_QUESTIONS,
        ...GOVERNMENT_QUESTIONS,
        ...ADDITIONAL_QUESTIONS,
        ...EXTENDED_QUESTIONS
      ];

      // Ensure we have at least 5 values questions
      const valuesQuestions = allQuestions.filter(q => q.isValueQuestion);
      const otherQuestions = allQuestions.filter(q => !q.isValueQuestion);

      // Shuffle and select
      const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      };

      const selectedValues = shuffleArray(valuesQuestions).slice(0, 5);
      const selectedOthers = shuffleArray(otherQuestions).slice(0, 15);
      const finalQuestions = shuffleArray([...selectedValues, ...selectedOthers]);

      setTestQuestions(finalQuestions);
    }
  }, [testStarted]);

  // Countdown timer
  useEffect(() => {
    if (testStarted && !showResults && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            // Time's up! Auto-submit
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [testStarted, showResults, timeRemaining]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeColor = () => {
    if (timeRemaining > 600) return 'text-green-500'; // > 10 min
    if (timeRemaining > 300) return 'text-yellow-500'; // > 5 min
    return 'text-red-500'; // < 5 min
  };

  const handleSelectAnswer = (questionId, optionId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionId
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < testQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    const score = calculateScore();

    // Complete quiz
    const timeSpent = (45 * 60) - timeRemaining;
    completeQuiz('timed-test', score.correct, score.total, timeSpent);

    // Award XP
    let totalXP = score.correct * 15; // 15 XP per correct answer
    if (score.percentage >= 75 && score.valuesCorrect === score.valuesTotal) {
      totalXP += XP_REWARDS.PERFECT_QUIZ * 2; // Double bonus for passing timed test
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
      unlockAchievement('test_ready');
    }

    addXP(totalXP);
    setShowResults(true);
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    let valuesCorrect = 0;
    let valuesTotal = 0;

    testQuestions.forEach(question => {
      const selectedOption = question.options.find(option => option.id === selectedAnswers[question.id]);
      if (selectedOption && selectedOption.correct) {
        correctAnswers++;
        if (question.isValueQuestion) {
          valuesCorrect++;
        }
      }
      if (question.isValueQuestion) {
        valuesTotal++;
      }
    });

    const percentage = (correctAnswers / testQuestions.length) * 100;
    const passed = percentage >= 75 && valuesCorrect === valuesTotal;

    return {
      correct: correctAnswers,
      total: testQuestions.length,
      percentage,
      valuesCorrect,
      valuesTotal,
      passed
    };
  };

  const restartTest = () => {
    setTestStarted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setTimeRemaining(45 * 60);
    setTestQuestions([]);
  };

  // Start screen
  if (!testStarted) {
    return (
      <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-8`}>
        <div className="max-w-2xl mx-auto">
          <div className={`text-center mb-8`}>
            <div className={`inline-flex p-4 rounded-full ${darkMode ? 'bg-red-900/30' : 'bg-red-100'} mb-4`}>
              <Clock className={darkMode ? 'text-red-400' : 'text-red-600'} size={48} />
            </div>
            <h2 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Timed Mock Test
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Simulate the real citizenship test experience
            </p>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? 'bg-red-900/20 border-2 border-red-500' : 'bg-red-50 border-2 border-red-200'} mb-6`}>
            <h3 className={`font-bold text-lg mb-3 flex items-center gap-2 ${darkMode ? 'text-red-400' : 'text-red-700'}`}>
              <AlertTriangle size={24} />
              Test Conditions
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>20 questions</strong> - randomly selected from all categories</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>45 minutes</strong> - test auto-submits when time expires</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>5 Australian Values questions</strong> - you MUST get ALL 5 correct</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>75% pass rate</strong> - need 15/20 correct overall</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Cannot pause</strong> - once started, timer cannot be stopped</span>
              </li>
            </ul>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} mb-6`}>
            <h3 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
              💡 Test Tips:
            </h3>
            <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Read each question carefully - don't rush!</li>
              <li>• You can go back and change answers</li>
              <li>• Watch the timer - pace yourself</li>
              <li>• Answer all questions - no penalty for guessing</li>
            </ul>
          </div>

          <button
            onClick={() => setTestStarted(true)}
            className={`w-full py-4 rounded-lg text-lg font-bold transition-all ${
              darkMode
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
          >
            Start Timed Test
          </button>

          {onBack && (
            <button
              onClick={onBack}
              className={`w-full mt-3 py-3 rounded-lg font-medium transition-all ${
                darkMode
                  ? 'bg-gray-700 hover:bg-gray-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              ← Back
            </button>
          )}
        </div>
      </div>
    );
  }

  // Results screen
  if (showResults) {
    const score = calculateScore();

    return (
      <div className="space-y-6">
        {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`p-8 rounded-xl text-center ${
            score.passed
              ? darkMode ? 'bg-gradient-to-br from-green-900 to-emerald-900' : 'bg-gradient-to-br from-green-100 to-emerald-100'
              : darkMode ? 'bg-gradient-to-br from-red-900 to-orange-900' : 'bg-gradient-to-br from-red-100 to-orange-100'
          } shadow-lg`}
        >
          <div className="mb-4">
            {score.passed ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="inline-block"
              >
                <Award size={64} className={darkMode ? 'text-yellow-400' : 'text-yellow-500'} />
              </motion.div>
            ) : (
              <AlertTriangle size={64} className={darkMode ? 'text-orange-400' : 'text-orange-600'} />
            )}
          </div>

          <h3 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {score.passed ? '🎉 You Passed!' : 'Not Quite - Keep Practicing'}
          </h3>

          <div className={`text-6xl font-bold mb-3 ${
            score.passed
              ? darkMode ? 'text-green-400' : 'text-green-600'
              : darkMode ? 'text-orange-400' : 'text-orange-600'
          }`}>
            {Math.round(score.percentage)}%
          </div>

          <p className={`text-2xl mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            {score.correct} out of {score.total} correct
          </p>

          {/* Values Score */}
          <div className={`p-4 rounded-lg mb-6 ${
            score.valuesCorrect === score.valuesTotal
              ? darkMode ? 'bg-green-800/30' : 'bg-green-200'
              : darkMode ? 'bg-red-800/30' : 'bg-red-200'
          }`}>
            <p className={`font-bold text-lg ${
              score.valuesCorrect === score.valuesTotal
                ? darkMode ? 'text-green-300' : 'text-green-800'
                : darkMode ? 'text-red-300' : 'text-red-800'
            }`}>
              Australian Values: {score.valuesCorrect}/{score.valuesTotal}
              {score.valuesCorrect === score.valuesTotal ? ' ✓' : ' ✗'}
            </p>
            {score.valuesCorrect !== score.valuesTotal && (
              <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                You must get ALL values questions correct to pass
              </p>
            )}
          </div>

          {/* Time taken */}
          <div className={`p-4 rounded-lg mb-6 ${darkMode ? 'bg-black/30' : 'bg-white/50'}`}>
            <Clock size={24} className={`mx-auto mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Time Taken</div>
            <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {formatTime((45 * 60) - timeRemaining)}
            </div>
          </div>

          <div className={`p-4 rounded-lg mb-6 ${darkMode ? 'bg-black/30' : 'bg-white/50'}`}>
            {score.passed ? (
              <>
                <p className={`font-medium text-lg mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                  🎉 Congratulations! You're ready for the real test!
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  You met all requirements: 75% overall score and all values questions correct.
                </p>
              </>
            ) : (
              <>
                <p className={`font-medium text-lg mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>
                  Keep practicing! You need:
                </p>
                <ul className={`text-sm text-left max-w-md mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {score.percentage < 75 && (
                    <li>• At least 75% overall (you got {Math.round(score.percentage)}%)</li>
                  )}
                  {score.valuesCorrect !== score.valuesTotal && (
                    <li>• ALL 5 values questions correct (you got {score.valuesCorrect}/{score.valuesTotal})</li>
                  )}
                </ul>
              </>
            )}
          </div>

          <div className="flex gap-3">
            <button
              className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                darkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
              onClick={restartTest}
            >
              Take Another Test
            </button>
            {onBack && (
              <button
                className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                  darkMode
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
                onClick={onBack}
              >
                Back to Home
              </button>
            )}
          </div>
        </motion.div>

        {/* Review Answers */}
        <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Review Your Answers
          </h3>

          <div className="space-y-4">
            {testQuestions.map((question, index) => {
              const selectedOption = question.options.find(option => option.id === selectedAnswers[question.id]);
              const correctOption = question.options.find(option => option.correct);
              const isCorrect = selectedOption && selectedOption.correct;

              return (
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className={`p-4 rounded-lg ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    {isCorrect ? (
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                    ) : (
                      <XCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Question {index + 1}
                        </span>
                        {question.isValueQuestion && (
                          <span className="px-2 py-0.5 rounded text-xs font-bold bg-red-500 text-white">
                            VALUES
                          </span>
                        )}
                      </div>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {question.question}
                      </p>
                    </div>
                  </div>

                  <div className="pl-9">
                    {!isCorrect && (
                      <div className={`p-3 rounded mb-2 ${darkMode ? 'bg-red-900/30' : 'bg-red-100'}`}>
                        <p className={`text-sm ${darkMode ? 'text-red-300' : 'text-red-700'}`}>
                          Your answer: {selectedOption ? selectedOption.text : 'Not answered'}
                        </p>
                      </div>
                    )}
                    <div className={`p-3 rounded ${darkMode ? 'bg-green-900/30' : 'bg-green-100'}`}>
                      <p className={`text-sm ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                        Correct answer: {correctOption.text}
                      </p>
                    </div>
                    {question.explanation && (
                      <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {question.explanation}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Test in progress
  const currentQuestion = testQuestions[currentQuestionIndex];
  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div className="space-y-6">
      {/* Timer and Progress Bar */}
      <div className={`sticky top-0 z-10 p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <Clock size={24} className={getTimeColor()} />
            <div>
              <div className={`text-2xl font-bold ${getTimeColor()}`}>
                {formatTime(timeRemaining)}
              </div>
              <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Time Remaining
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {currentQuestionIndex + 1} / {testQuestions.length}
            </div>
            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {answeredCount} answered
            </div>
          </div>
        </div>

        <div className={`h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / testQuestions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {timeRemaining < 300 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-2 p-2 rounded ${darkMode ? 'bg-red-900/30' : 'bg-red-100'} text-center`}
          >
            <p className={`text-sm font-medium ${darkMode ? 'text-red-400' : 'text-red-700'}`}>
              ⏰ Less than 5 minutes remaining!
            </p>
          </motion.div>
        )}
      </div>

      {/* Question */}
      {currentQuestion && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
          >
            {/* Question header */}
            <div className="mb-6">
              {currentQuestion.isValueQuestion && (
                <div className={`p-3 rounded-lg mb-4 ${darkMode ? 'bg-red-900/30 border border-red-500' : 'bg-red-100 border border-red-300'}`}>
                  <p className={`text-sm font-bold ${darkMode ? 'text-red-400' : 'text-red-700'}`}>
                    ⚠️ AUSTRALIAN VALUES QUESTION - Must answer correctly!
                  </p>
                </div>
              )}

              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {currentQuestion.question}
              </h3>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, index) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center p-4 rounded-lg cursor-pointer transition-all ${
                    selectedAnswers[currentQuestion.id] === option.id
                      ? darkMode
                        ? 'bg-blue-900 border-2 border-blue-500'
                        : 'bg-blue-50 border-2 border-blue-400'
                      : darkMode
                        ? 'bg-gray-700 border-2 border-gray-600 hover:border-gray-500'
                        : 'bg-gray-50 border-2 border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleSelectAnswer(currentQuestion.id, option.id)}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0 ${
                    selectedAnswers[currentQuestion.id] === option.id
                      ? 'border-blue-500 bg-blue-500'
                      : darkMode ? 'border-gray-500' : 'border-gray-300'
                  }`}>
                    {selectedAnswers[currentQuestion.id] === option.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 rounded-full bg-white"
                      />
                    )}
                  </div>
                  <span className={`text-lg ${
                    selectedAnswers[currentQuestion.id] === option.id
                      ? darkMode ? 'text-white font-medium' : 'text-blue-900 font-medium'
                      : darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    {option.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between gap-3">
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  currentQuestionIndex === 0
                    ? darkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'
                    : darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                ← Previous
              </button>

              {currentQuestionIndex < testQuestions.length - 1 ? (
                <button
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                  onClick={handleNext}
                >
                  Next →
                </button>
              ) : (
                <button
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    answeredCount < testQuestions.length
                      ? darkMode ? 'bg-yellow-700 hover:bg-yellow-600 text-white' : 'bg-yellow-600 hover:bg-yellow-700 text-white'
                      : darkMode ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                  onClick={handleSubmit}
                >
                  {answeredCount < testQuestions.length ? '⚠️ Submit (Not All Answered)' : '✓ Submit Test'}
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Question Navigator */}
      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <h4 className={`text-sm font-bold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Quick Navigation
        </h4>
        <div className="grid grid-cols-10 gap-2">
          {testQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentQuestionIndex(idx)}
              className={`aspect-square rounded-lg font-bold text-sm transition-all ${
                idx === currentQuestionIndex
                  ? 'bg-blue-600 text-white scale-110'
                  : selectedAnswers[q.id]
                  ? darkMode ? 'bg-green-700 text-white' : 'bg-green-200 text-green-800'
                  : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
        <p className={`text-xs mt-3 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
          Green = answered • Blue = current question
        </p>
      </div>
    </div>
  );
}
