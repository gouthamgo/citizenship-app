import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Clock, Award, Star, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame, XP_REWARDS } from '../contexts/GameContext';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const Quiz = ({ questions, darkMode }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [timeSpent, setTimeSpent] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [starredQuestionIds, setStarredQuestionIds] = useState([]);

  const { completeQuiz, addXP, unlockAchievement } = useGame();
  const { width, height } = useWindowSize();

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    setStartTime(Date.now());
    // Load starred questions from localStorage
    const saved = localStorage.getItem('citizenship-starred-questions');
    if (saved) {
      setStarredQuestionIds(JSON.parse(saved));
    }
  }, []);

  const handleSelectAnswer = (questionId, optionId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionId
    });
  };

  const toggleStar = (questionId) => {
    const updated = starredQuestionIds.includes(questionId)
      ? starredQuestionIds.filter(id => id !== questionId)
      : [...starredQuestionIds, questionId];
    setStarredQuestionIds(updated);
    localStorage.setItem('citizenship-starred-questions', JSON.stringify(updated));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const endTime = Date.now();
      const totalTime = Math.floor((endTime - startTime) / 1000); // in seconds
      setTimeSpent(totalTime);
      setShowResults(true);

      // Calculate score and complete quiz
      const score = calculateScore();
      completeQuiz('practice-quiz', score.correct, score.total, totalTime);

      // Award XP based on difficulty
      let totalXP = 0;
      questions.forEach(question => {
        const selectedOption = question.options.find(option => option.id === selectedAnswers[question.id]);
        if (selectedOption && selectedOption.correct) {
          const xp = question.difficulty === 'hard' ? XP_REWARDS.CORRECT_HARD :
                     question.difficulty === 'medium' ? XP_REWARDS.CORRECT_MEDIUM :
                     XP_REWARDS.CORRECT_EASY;
          totalXP += xp;
        }
      });

      // Bonus XP for perfect score
      if (score.percentage === 100) {
        totalXP += XP_REWARDS.PERFECT_QUIZ;
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }

      addXP(totalXP);

      // Check for streak achievement (5 correct in a row)
      let correctStreak = 0;
      let maxStreak = 0;
      questions.forEach(question => {
        const selectedOption = question.options.find(option => option.id === selectedAnswers[question.id]);
        if (selectedOption && selectedOption.correct) {
          correctStreak++;
          maxStreak = Math.max(maxStreak, correctStreak);
        } else {
          correctStreak = 0;
        }
      });

      if (maxStreak >= 5) {
        unlockAchievement('quick_learner');
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setStartTime(Date.now());
    setTimeSpent(0);
  };

  const calculateScore = () => {
    let correctAnswers = 0;

    questions.forEach(question => {
      const selectedOption = question.options.find(option => option.id === selectedAnswers[question.id]);
      if (selectedOption && selectedOption.correct) {
        correctAnswers++;
      }
    });

    return {
      correct: correctAnswers,
      total: questions.length,
      percentage: (correctAnswers / questions.length) * 100
    };
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return darkMode ? 'text-green-400' : 'text-green-600';
      case 'medium':
        return darkMode ? 'text-yellow-400' : 'text-yellow-600';
      case 'hard':
        return darkMode ? 'text-red-400' : 'text-red-600';
      default:
        return darkMode ? 'text-gray-400' : 'text-gray-600';
    }
  };

  const getDifficultyBg = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return darkMode ? 'bg-green-900/30' : 'bg-green-100';
      case 'medium':
        return darkMode ? 'bg-yellow-900/30' : 'bg-yellow-100';
      case 'hard':
        return darkMode ? 'bg-red-900/30' : 'bg-red-100';
      default:
        return darkMode ? 'bg-gray-900/30' : 'bg-gray-100';
    }
  };

  if (showResults) {
    const score = calculateScore();

    return (
      <div className="space-y-6">
        {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`p-8 rounded-xl text-center ${
            score.percentage >= 75
              ? darkMode ? 'bg-gradient-to-br from-green-900 to-emerald-900' : 'bg-gradient-to-br from-green-100 to-emerald-100'
              : darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}
        >
          <div className="mb-4">
            {score.percentage >= 75 ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="inline-block"
              >
                <Award size={64} className={darkMode ? 'text-yellow-400' : 'text-yellow-500'} />
              </motion.div>
            ) : (
              <Sparkles size={64} className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
            )}
          </div>

          <h3 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {score.percentage >= 75 ? 'Congratulations!' : 'Good Effort!'}
          </h3>

          <div className={`text-6xl font-bold mb-3 ${
            score.percentage >= 75
              ? darkMode ? 'text-green-400' : 'text-green-600'
              : darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {Math.round(score.percentage)}%
          </div>

          <p className={`text-2xl mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            {score.correct} out of {score.total} correct
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6 max-w-md mx-auto">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-black/30' : 'bg-white/50'}`}>
              <Clock size={24} className={`mx-auto mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Time</div>
              <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {formatTime(timeSpent)}
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-black/30' : 'bg-white/50'}`}>
              <Star size={24} className={`mx-auto mb-2 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>XP Earned</div>
              <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                +{questions.reduce((total, q) => {
                  const selectedOption = q.options.find(option => option.id === selectedAnswers[q.id]);
                  if (selectedOption && selectedOption.correct) {
                    return total + (q.difficulty === 'hard' ? 15 : q.difficulty === 'medium' ? 10 : 5);
                  }
                  return total;
                }, 0) + (score.percentage === 100 ? 30 : 0)}
              </div>
            </div>
          </div>

          <div className={`p-4 rounded-lg mb-6 ${darkMode ? 'bg-black/30' : 'bg-white/50'}`}>
            {score.percentage >= 75 ? (
              <p className={`font-medium text-lg ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                🎉 You passed! You're ready for the citizenship test!
              </p>
            ) : (
              <p className={`font-medium text-lg ${darkMode ? 'text-amber-300' : 'text-amber-700'}`}>
                Keep studying! You need 75% to pass the citizenship test.
              </p>
            )}
          </div>

          <button
            className={`px-8 py-3 rounded-lg font-medium shadow-lg transition-all duration-200 ${
              darkMode
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
            onClick={resetQuiz}
          >
            Try Again
          </button>
        </motion.div>

        {/* Review Answers */}
        <div className="space-y-4">
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Review Your Answers
          </h3>

          {questions.map((question, index) => {
            const selectedOption = question.options.find(option => option.id === selectedAnswers[question.id]);
            const correctOption = question.options.find(option => option.correct);
            const isCorrect = selectedOption && selectedOption.correct;

            return (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-sm font-medium px-2 py-1 rounded ${getDifficultyBg(question.difficulty)} ${getDifficultyColor(question.difficulty)}`}>
                        {question.difficulty}
                      </span>
                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Question {index + 1}
                      </span>
                    </div>
                    <p className={`font-medium text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {question.question}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <button
                      onClick={() => toggleStar(question.id)}
                      className={`p-2 rounded-lg transition-all ${
                        starredQuestionIds.includes(question.id)
                          ? 'text-yellow-500 hover:bg-yellow-500/10'
                          : darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-400 hover:bg-gray-100'
                      }`}
                      title={starredQuestionIds.includes(question.id) ? 'Remove from starred' : 'Star this question'}
                    >
                      <Star
                        size={20}
                        className={starredQuestionIds.includes(question.id) ? 'fill-yellow-500' : ''}
                      />
                    </button>
                    {isCorrect ? (
                      <CheckCircle className="text-green-500 flex-shrink-0" size={28} />
                    ) : (
                      <XCircle className="text-red-500 flex-shrink-0" size={28} />
                    )}
                  </div>
                </div>

                <div className={`p-4 rounded-lg mb-3 ${
                  selectedOption
                    ? isCorrect
                      ? darkMode ? 'bg-green-900/30' : 'bg-green-50'
                      : darkMode ? 'bg-red-900/30' : 'bg-red-50'
                    : darkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <p className={`text-sm mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Your answer:
                  </p>
                  <p className={`font-medium ${
                    selectedOption
                      ? isCorrect
                        ? darkMode ? 'text-green-400' : 'text-green-700'
                        : darkMode ? 'text-red-400' : 'text-red-700'
                      : darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {selectedOption ? selectedOption.text : 'Not answered'}
                  </p>
                </div>

                {!isCorrect && (
                  <div className={`p-4 rounded-lg mb-3 ${darkMode ? 'bg-green-900/30' : 'bg-green-50'}`}>
                    <p className={`text-sm mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Correct answer:
                    </p>
                    <p className={`font-medium ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                      {correctOption.text}
                    </p>
                  </div>
                )}

                {question.explanation && (
                  <div className={`p-4 rounded-lg border-l-4 ${
                    darkMode
                      ? 'bg-blue-900/20 border-blue-500'
                      : 'bg-blue-50 border-blue-400'
                  }`}>
                    <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                      Explanation:
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {question.explanation}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
            {Object.keys(selectedAnswers).length} of {questions.length} answered
          </span>
        </div>
        <div className={`h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
        >
          {/* Difficulty Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium px-3 py-1 rounded-full ${getDifficultyBg(currentQuestion.difficulty)} ${getDifficultyColor(currentQuestion.difficulty)}`}>
                {currentQuestion.difficulty?.toUpperCase()}
              </span>
              {currentQuestion.category && (
                <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                  {currentQuestion.category.replace('-', ' ')}
                </span>
              )}
            </div>

            <button
              onClick={() => toggleStar(currentQuestion.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                starredQuestionIds.includes(currentQuestion.id)
                  ? 'text-yellow-500 hover:bg-yellow-500/10'
                  : darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-400 hover:bg-gray-100'
              }`}
              title={starredQuestionIds.includes(currentQuestion.id) ? 'Remove from starred' : 'Star this question'}
            >
              <Star
                size={20}
                className={starredQuestionIds.includes(currentQuestion.id) ? 'fill-yellow-500' : ''}
              />
              <span className="text-sm font-medium">
                {starredQuestionIds.includes(currentQuestion.id) ? 'Starred' : 'Star'}
              </span>
            </button>
          </div>

          <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {currentQuestion.question}
          </h3>

          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center p-4 rounded-lg cursor-pointer transition-all duration-200 ${
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

          <div className="flex justify-between">
            <button
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentQuestionIndex === 0
                  ? darkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'
                  : darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>

            <button
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                !selectedAnswers[currentQuestion.id]
                  ? darkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-300 text-gray-500'
                  : darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
              onClick={handleNext}
              disabled={!selectedAnswers[currentQuestion.id]}
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
