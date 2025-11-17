import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Flame, Trophy, Star, Clock, CheckCircle, XCircle, Sparkles } from 'lucide-react';
import { useGame, XP_REWARDS } from '../contexts/GameContext';
import { EXPANDED_QUESTIONS } from '../data/expanded-questions';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export default function DailyChallenge({ darkMode }) {
  const [dailyQuestions, setDailyQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [dailyResults, setDailyResults] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [lastChallengeDate, setLastChallengeDate] = useState(null);

  const { addXP, unlockAchievement, userProfile } = useGame();
  const { width, height } = useWindowSize();

  const DAILY_CHALLENGE_COUNT = 5;

  // Get today's date as a string
  const getTodayString = () => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  };

  // Generate daily questions based on the date (deterministic)
  const generateDailyQuestions = (dateString) => {
    const seed = dateString.split('-').reduce((acc, val) => acc + parseInt(val), 0);
    const shuffled = [...EXPANDED_QUESTIONS].sort((a, b) => {
      const hashA = (seed + parseInt(a.id.replace(/\D/g, ''), 10)) % 100;
      const hashB = (seed + parseInt(b.id.replace(/\D/g, ''), 10)) % 100;
      return hashA - hashB;
    });
    return shuffled.slice(0, DAILY_CHALLENGE_COUNT);
  };

  useEffect(() => {
    const today = getTodayString();
    const savedChallenge = localStorage.getItem('daily-challenge');

    if (savedChallenge) {
      const parsed = JSON.parse(savedChallenge);
      if (parsed.date === today) {
        // Load today's progress
        setDailyQuestions(parsed.questions);
        setDailyResults(parsed.results || []);
        setIsComplete(parsed.complete || false);
        setLastChallengeDate(parsed.date);
        return;
      }
    }

    // Generate new challenge for today
    const questions = generateDailyQuestions(today);
    setDailyQuestions(questions);
    setDailyResults([]);
    setIsComplete(false);
    setLastChallengeDate(today);

    localStorage.setItem('daily-challenge', JSON.stringify({
      date: today,
      questions,
      results: [],
      complete: false
    }));
  }, []);

  const handleAnswer = (optionId) => {
    if (showResult) return;

    setSelectedAnswer(optionId);
    setShowResult(true);

    const currentQuestion = dailyQuestions[currentQuestionIndex];
    const selectedOption = currentQuestion.options.find(opt => opt.id === optionId);
    const isCorrect = selectedOption && selectedOption.correct;

    const result = {
      questionId: currentQuestion.id,
      selectedOption: optionId,
      correct: isCorrect
    };

    const updatedResults = [...dailyResults, result];
    setDailyResults(updatedResults);

    // Award XP for correct answer
    if (isCorrect) {
      const xp = currentQuestion.difficulty === 'hard' ? XP_REWARDS.CORRECT_HARD :
                 currentQuestion.difficulty === 'medium' ? XP_REWARDS.CORRECT_MEDIUM :
                 XP_REWARDS.CORRECT_EASY;
      addXP(xp);
    }

    // Save progress
    const today = getTodayString();
    localStorage.setItem('daily-challenge', JSON.stringify({
      date: today,
      questions: dailyQuestions,
      results: updatedResults,
      complete: isComplete
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < dailyQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Challenge complete!
      const correctCount = dailyResults.filter(r => r.correct).length;
      const bonusXP = correctCount === DAILY_CHALLENGE_COUNT ? 50 : 20;
      addXP(bonusXP);

      if (correctCount === DAILY_CHALLENGE_COUNT) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }

      setIsComplete(true);

      // Save completion
      const today = getTodayString();
      localStorage.setItem('daily-challenge', JSON.stringify({
        date: today,
        questions: dailyQuestions,
        results: dailyResults,
        complete: true
      }));
    }
  };

  const currentQuestion = dailyQuestions[currentQuestionIndex];

  if (dailyQuestions.length === 0) {
    return (
      <div className={`flex items-center justify-center p-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (isComplete) {
    const correctCount = dailyResults.filter(r => r.correct).length;
    const percentage = (correctCount / DAILY_CHALLENGE_COUNT) * 100;

    return (
      <div className="space-y-6">
        {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={300} />}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`p-8 rounded-xl text-center ${
            percentage === 100
              ? darkMode ? 'bg-gradient-to-br from-yellow-900 to-orange-900' : 'bg-gradient-to-br from-yellow-100 to-orange-100'
              : darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}
        >
          <div className="mb-4">
            {percentage === 100 ? (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="inline-block"
              >
                <Trophy size={64} className="text-yellow-500" />
              </motion.div>
            ) : (
              <Star size={64} className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
            )}
          </div>

          <h2 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {percentage === 100 ? 'Perfect Daily Challenge!' : 'Daily Challenge Complete!'}
          </h2>

          <div className={`text-6xl font-bold mb-4 ${
            percentage === 100
              ? 'text-yellow-500'
              : darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {correctCount}/{DAILY_CHALLENGE_COUNT}
          </div>

          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {percentage === 100
              ? '🎉 Amazing! You aced today\'s challenge!'
              : `You got ${Math.round(percentage)}% correct`}
          </p>

          <div className={`p-6 rounded-lg mb-6 ${darkMode ? 'bg-black/30' : 'bg-white/50'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Flame size={32} className={`mx-auto mb-2 ${darkMode ? 'text-orange-400' : 'text-orange-500'}`} />
                <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Streak</div>
                <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {userProfile.streak}
                </div>
              </div>
              <div>
                <Star size={32} className={`mx-auto mb-2 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
                <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>XP Earned</div>
                <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  +{dailyResults.reduce((total, r) => {
                    if (!r.correct) return total;
                    const q = dailyQuestions.find(q => q.id === r.questionId);
                    return total + (q.difficulty === 'hard' ? 15 : q.difficulty === 'medium' ? 10 : 5);
                  }, 0) + (percentage === 100 ? 50 : 20)}
                </div>
              </div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
            <p className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              <Calendar size={16} className="inline mr-1" />
              Come back tomorrow for a new daily challenge!
            </p>
          </div>
        </motion.div>

        {/* Review */}
        <div className="space-y-4">
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Review Your Answers
          </h3>

          {dailyQuestions.map((question, index) => {
            const result = dailyResults[index];
            const selectedOption = question.options.find(opt => opt.id === result?.selectedOption);
            const correctOption = question.options.find(opt => opt.correct);

            return (
              <div
                key={question.id}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <p className={`font-medium text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {index + 1}. {question.question}
                    </p>
                  </div>
                  {result?.correct ? (
                    <CheckCircle className="text-green-500 flex-shrink-0 ml-4" size={24} />
                  ) : (
                    <XCircle className="text-red-500 flex-shrink-0 ml-4" size={24} />
                  )}
                </div>

                {!result?.correct && (
                  <div className={`p-3 rounded-lg mb-2 ${darkMode ? 'bg-green-900/30' : 'bg-green-50'}`}>
                    <p className={`text-sm font-medium ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                      Correct: {correctOption?.text}
                    </p>
                  </div>
                )}

                {question.explanation && (
                  <div className={`p-3 rounded-lg border-l-4 ${
                    darkMode ? 'bg-blue-900/20 border-blue-500' : 'bg-blue-50 border-blue-400'
                  }`}>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gradient-to-r from-purple-900 to-indigo-900' : 'bg-gradient-to-r from-purple-100 to-indigo-100'}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Calendar size={32} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
            <div>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Daily Challenge
              </h2>
              <p className={`text-sm ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                {new Date().toLocaleDateString('en-AU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className={`text-sm ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>Streak</div>
              <div className="flex items-center gap-1">
                <Flame size={20} className="text-orange-500" />
                <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {userProfile.streak}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className={`text-sm ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
            Question {currentQuestionIndex + 1} of {DAILY_CHALLENGE_COUNT}
          </span>
          <div className="flex gap-1">
            {dailyQuestions.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-1 rounded-full ${
                  index < currentQuestionIndex
                    ? 'bg-green-500'
                    : index === currentQuestionIndex
                      ? darkMode ? 'bg-purple-400' : 'bg-purple-600'
                      : darkMode ? 'bg-purple-800' : 'bg-purple-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Question */}
      <motion.div
        key={currentQuestionIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className={`text-xs font-medium px-2 py-1 rounded ${
            currentQuestion.difficulty === 'easy'
              ? darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'
              : currentQuestion.difficulty === 'medium'
                ? darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-600'
                : darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-600'
          }`}>
            {currentQuestion.difficulty?.toUpperCase()}
          </span>
        </div>

        <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {currentQuestion.question}
        </h3>

        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const isCorrect = option.correct;
            const showCorrectAnswer = showResult && isCorrect;
            const showWrongAnswer = showResult && isSelected && !isCorrect;

            return (
              <button
                key={option.id}
                onClick={() => handleAnswer(option.id)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  showCorrectAnswer
                    ? 'border-green-500 bg-green-500/10'
                    : showWrongAnswer
                      ? 'border-red-500 bg-red-500/10'
                      : isSelected
                        ? darkMode ? 'border-blue-500 bg-blue-900' : 'border-blue-500 bg-blue-50'
                        : darkMode ? 'border-gray-700 bg-gray-700 hover:border-gray-600' : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                } ${showResult ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    showCorrectAnswer
                      ? 'border-green-500 bg-green-500'
                      : showWrongAnswer
                        ? 'border-red-500 bg-red-500'
                        : isSelected
                          ? 'border-blue-500 bg-blue-500'
                          : darkMode ? 'border-gray-500' : 'border-gray-300'
                  }`}>
                    {(showCorrectAnswer || (isSelected && isCorrect)) && (
                      <CheckCircle size={16} className="text-white" />
                    )}
                    {showWrongAnswer && (
                      <XCircle size={16} className="text-white" />
                    )}
                  </div>
                  <span className={`flex-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    {option.text}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {showResult && currentQuestion.explanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg border-l-4 mb-4 ${
              darkMode ? 'bg-blue-900/20 border-blue-500' : 'bg-blue-50 border-blue-400'
            }`}
          >
            <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              <Sparkles size={16} className="inline mr-1" />
              Explanation:
            </p>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {currentQuestion.explanation}
            </p>
          </motion.div>
        )}

        {showResult && (
          <button
            onClick={handleNext}
            className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
            } text-white`}
          >
            {currentQuestionIndex < dailyQuestions.length - 1 ? 'Next Question' : 'Complete Challenge'}
          </button>
        )}
      </motion.div>
    </div>
  );
}
