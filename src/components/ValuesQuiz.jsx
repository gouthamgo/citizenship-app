import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart, AlertTriangle, CheckCircle, XCircle, ChevronRight,
  RotateCcw, Trophy, Flame, BookOpen, ArrowLeft
} from 'lucide-react';
import { VALUES_QUESTIONS } from '../data/values-questions';
import { useGame } from '../contexts/GameContext';

export default function ValuesQuiz({ darkMode, onBack }) {
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const { addXP, unlockAchievement } = useGame();

  const currentQuestion = VALUES_QUESTIONS[currentQuestionIndex];
  const isQuizComplete = answeredQuestions.length === VALUES_QUESTIONS.length;
  const correctAnswers = answeredQuestions.filter(q => q.isCorrect).length;
  const totalQuestions = VALUES_QUESTIONS.length;
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  const isPerfectScore = correctAnswers === totalQuestions;

  const handleAnswerSelect = (optionId) => {
    const question = currentQuestion;
    const selectedOption = question.options.find(opt => opt.id === optionId);
    const isCorrect = selectedOption.correct;

    setSelectedAnswer(optionId);
    setShowExplanation(true);

    // Record the answer
    setAnsweredQuestions([
      ...answeredQuestions,
      {
        questionId: question.id,
        selectedOptionId: optionId,
        isCorrect
      }
    ]);

    // Award XP
    if (isCorrect) {
      addXP(20); // Higher XP for critical values questions
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < VALUES_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setAnsweredQuestions([]);
    setShowExplanation(false);
    setStarted(false);
  };

  const handleRetryWrongAnswers = () => {
    // This would filter to only wrong answers - implement if needed
    handleRestart();
  };

  // Check for achievements on completion
  if (isQuizComplete && isPerfectScore && answeredQuestions.length === VALUES_QUESTIONS.length) {
    unlockAchievement('perfect_score');
    unlockAchievement('values_master');
  }

  if (!started) {
    return (
      <div className="space-y-6">
        {onBack && (
          <button
            onClick={onBack}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
            } transition-colors`}
          >
            <ArrowLeft size={20} />
            Back
          </button>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl p-8 border-4 ${
            darkMode
              ? 'bg-gradient-to-br from-red-900/40 to-pink-900/40 border-red-500/50'
              : 'bg-gradient-to-br from-red-50 to-pink-50 border-red-300'
          }`}
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500 mb-6">
              <Heart size={40} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Australian Values Quiz</h1>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border-2 border-red-500 mb-6`}>
              <AlertTriangle size={20} className="text-red-500" />
              <span className="font-bold text-red-500">CRITICAL FOR TEST SUCCESS</span>
            </div>

            <div className={`max-w-2xl mx-auto space-y-4 text-left ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900/20' : 'bg-red-100'}`}>
                <h3 className="font-bold mb-2 text-red-500">⚠️ Why This is CRITICAL:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>In the real citizenship test, 5 out of 20 questions will be about Australian values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span><strong>You MUST answer ALL 5 values questions correctly to pass</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Even if you get 19/20 overall, missing ONE values question = automatic FAIL</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>This is the #1 reason people fail the citizenship test</span>
                  </li>
                </ul>
              </div>

              <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-100'}`}>
                <h3 className="font-bold mb-2">What You'll Practice:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Freedom and democracy principles</li>
                  <li>• Equality and respect for all people</li>
                  <li>• Rule of law in Australia</li>
                  <li>• Rights and responsibilities</li>
                  <li>• Australian way of life and values</li>
                </ul>
              </div>

              <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/20' : 'bg-green-100'}`}>
                <h3 className="font-bold mb-2">Quiz Details:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• {VALUES_QUESTIONS.length} questions focused on Australian values</li>
                  <li>• Instant feedback with detailed explanations</li>
                  <li>• Higher XP rewards (20 XP per correct answer)</li>
                  <li>• Practice as many times as you need</li>
                  <li>• Aim for 100% - your pass depends on it!</li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => setStarted(true)}
              className="mt-8 px-12 py-4 bg-red-600 hover:bg-red-700 text-white text-xl font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 mx-auto"
            >
              <Heart size={24} />
              Start Values Quiz
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (isQuizComplete) {
    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`rounded-2xl p-8 text-center ${
            isPerfectScore
              ? darkMode
                ? 'bg-gradient-to-br from-green-900/40 to-emerald-900/40 border-4 border-green-500/50'
                : 'bg-gradient-to-br from-green-50 to-emerald-50 border-4 border-green-300'
              : darkMode
                ? 'bg-gradient-to-br from-orange-900/40 to-red-900/40 border-4 border-orange-500/50'
                : 'bg-gradient-to-br from-orange-50 to-red-50 border-4 border-orange-300'
          }`}
        >
          {isPerfectScore ? (
            <>
              <Trophy size={64} className="text-yellow-500 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4 text-green-500">Perfect Score! 🎉</h2>
              <p className={`text-2xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {correctAnswers} / {totalQuestions} Correct ({score}%)
              </p>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-green-900/20' : 'bg-green-100'} mb-6`}>
                <p className="text-lg font-bold mb-2">🌟 Excellent Work!</p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  You've mastered the Australian values questions! This level of knowledge will help ensure you pass the citizenship test.
                </p>
              </div>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleRestart}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                >
                  <RotateCcw size={20} />
                  Practice Again
                </button>
                {onBack && (
                  <button
                    onClick={onBack}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                      darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    Done
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <XCircle size={64} className="text-red-500 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4 text-red-500">Keep Practicing</h2>
              <p className={`text-2xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {correctAnswers} / {totalQuestions} Correct ({score}%)
              </p>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-red-900/20 border border-red-500/50' : 'bg-red-100 border border-red-300'} mb-6`}>
                <p className="text-lg font-bold mb-2 text-red-500">⚠️ Remember:</p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  In the real test, you must get ALL values questions correct.
                  Missing even one values question means automatic failure, regardless of your overall score.
                </p>
                <p className={`mt-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  You need to aim for 100% on values questions!
                </p>
              </div>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleRestart}
                  className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                >
                  <RotateCcw size={20} />
                  Try Again
                </button>
                <button
                  onClick={() => {/* Review wrong answers */}}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                    darkMode ? 'bg-orange-900/40 hover:bg-orange-800/40 border border-orange-700/50' : 'bg-orange-100 hover:bg-orange-200'
                  }`}
                >
                  <BookOpen size={20} />
                  Review Flashcards
                </button>
              </div>
            </>
          )}

          {/* Show incorrect answers */}
          {!isPerfectScore && (
            <div className="mt-8 text-left">
              <h3 className="text-xl font-bold mb-4">Review Your Mistakes:</h3>
              <div className="space-y-4">
                {answeredQuestions.filter(q => !q.isCorrect).map((answer, index) => {
                  const question = VALUES_QUESTIONS.find(q => q.id === answer.questionId);
                  const correctOption = question.options.find(opt => opt.correct);
                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border-2 border-red-500/50`}
                    >
                      <p className="font-bold mb-2">{question.question}</p>
                      <p className="text-green-500 mb-1">✓ Correct: {correctOption.text}</p>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {question.explanation}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    );
  }

  const progress = ((currentQuestionIndex + 1) / VALUES_QUESTIONS.length) * 100;

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex justify-between items-center mb-2">
          <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Question {currentQuestionIndex + 1} of {VALUES_QUESTIONS.length}
          </span>
          <span className="text-sm font-bold text-red-500">
            VALUES QUESTION
          </span>
        </div>
        <div className={`h-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
          <div
            className="h-full bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <motion.div
        key={currentQuestionIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className={`rounded-xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-2 ${darkMode ? 'border-red-700/50' : 'border-red-200'}`}
      >
        <div className="flex items-start gap-3 mb-6">
          <div className="p-3 rounded-lg bg-red-500/20">
            <Heart size={24} className="text-red-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">{currentQuestion.question}</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Category: {currentQuestion.category.replace('-', ' ')} • Difficulty: {currentQuestion.difficulty}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const isCorrect = option.correct;
            const showResult = selectedAnswer !== null;

            return (
              <button
                key={option.id}
                onClick={() => !selectedAnswer && handleAnswerSelect(option.id)}
                disabled={selectedAnswer !== null}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  !showResult
                    ? darkMode
                      ? 'border-gray-700 hover:border-red-500 bg-gray-750 hover:bg-gray-700'
                      : 'border-gray-200 hover:border-red-400 bg-gray-50 hover:bg-gray-100'
                    : isSelected
                      ? isCorrect
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-red-500 bg-red-500/10'
                      : isCorrect
                        ? 'border-green-500 bg-green-500/10'
                        : darkMode
                          ? 'border-gray-700 bg-gray-750 opacity-50'
                          : 'border-gray-200 bg-gray-50 opacity-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      showResult
                        ? isSelected
                          ? isCorrect
                            ? 'border-green-500 bg-green-500'
                            : 'border-red-500 bg-red-500'
                          : isCorrect
                            ? 'border-green-500 bg-green-500'
                            : 'border-gray-400'
                        : 'border-gray-400'
                    }`}
                  >
                    {showResult && (isSelected || isCorrect) && (
                      isCorrect ? (
                        <CheckCircle size={20} className="text-white" />
                      ) : isSelected ? (
                        <XCircle size={20} className="text-white" />
                      ) : null
                    )}
                  </div>
                  <span className="flex-1">{option.text}</span>
                </div>
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 p-4 rounded-lg ${
              darkMode ? 'bg-blue-900/20 border border-blue-700/50' : 'bg-blue-50 border border-blue-200'
            }`}
          >
            <h4 className="font-bold mb-2">Explanation:</h4>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              {currentQuestion.explanation}
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Navigation */}
      {showExplanation && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-colors"
          >
            {currentQuestionIndex < VALUES_QUESTIONS.length - 1 ? 'Next Question' : 'Finish Quiz'}
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
