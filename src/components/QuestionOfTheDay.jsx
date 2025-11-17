import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle, XCircle, Lightbulb, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { EXPANDED_QUESTIONS } from '../data/expanded-questions';
import { VALUES_QUESTIONS } from '../data/values-questions';
import { GOVERNMENT_QUESTIONS } from '../data/government-questions';
import { ADDITIONAL_QUESTIONS } from '../data/additional-questions';
import { EXTENDED_QUESTIONS } from '../data/extended-questions';

export default function QuestionOfTheDay({ darkMode }) {
  const [todaysQuestion, setTodaysQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [hasAnsweredToday, setHasAnsweredToday] = useState(false);
  const [streak, setStreak] = useState(0);

  const allQuestions = [...EXPANDED_QUESTIONS, ...VALUES_QUESTIONS, ...GOVERNMENT_QUESTIONS, ...ADDITIONAL_QUESTIONS, ...EXTENDED_QUESTIONS];

  useEffect(() => {
    loadTodaysQuestion();
    loadStreak();
  }, []);

  const loadTodaysQuestion = () => {
    const today = new Date().toDateString();
    const savedData = localStorage.getItem('citizenship-qotd');

    if (savedData) {
      const parsed = JSON.parse(savedData);
      if (parsed.date === today) {
        setTodaysQuestion(allQuestions.find(q => q.id === parsed.questionId));
        setHasAnsweredToday(parsed.answered);
        if (parsed.selectedAnswer) {
          setSelectedAnswer(parsed.selectedAnswer);
          setShowExplanation(true);
        }
        return;
      }
    }

    // New day - pick a new question
    const seed = new Date().getTime();
    const index = seed % allQuestions.length;
    const question = allQuestions[index];

    setTodaysQuestion(question);
    setHasAnsweredToday(false);
    setSelectedAnswer(null);
    setShowExplanation(false);

    localStorage.setItem('citizenship-qotd', JSON.stringify({
      date: today,
      questionId: question.id,
      answered: false
    }));
  };

  const loadStreak = () => {
    const savedStreak = localStorage.getItem('citizenship-qotd-streak');
    if (savedStreak) {
      const parsed = JSON.parse(savedStreak);
      const lastDate = new Date(parsed.lastDate);
      const today = new Date();

      // Check if last answered was yesterday
      const daysDiff = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));

      if (daysDiff === 0) {
        setStreak(parsed.streak);
      } else if (daysDiff === 1) {
        setStreak(parsed.streak);
      } else {
        // Streak broken
        setStreak(0);
      }
    }
  };

  const handleAnswer = (optionId) => {
    if (hasAnsweredToday) return;

    setSelectedAnswer(optionId);
    setShowExplanation(true);
    setHasAnsweredToday(true);

    const correctOption = todaysQuestion.options.find(opt => opt.correct);
    const isCorrect = optionId === correctOption.id;

    // Update streak
    const savedStreak = localStorage.getItem('citizenship-qotd-streak');
    let newStreak = 1;

    if (savedStreak) {
      const parsed = JSON.parse(savedStreak);
      const lastDate = new Date(parsed.lastDate);
      const today = new Date();
      const daysDiff = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));

      if (daysDiff === 1 && isCorrect) {
        newStreak = parsed.streak + 1;
      } else if (daysDiff === 0) {
        newStreak = parsed.streak;
      }
    }

    if (isCorrect) {
      setStreak(newStreak);
      localStorage.setItem('citizenship-qotd-streak', JSON.stringify({
        streak: newStreak,
        lastDate: new Date().toISOString()
      }));
    }

    // Save answer
    const today = new Date().toDateString();
    localStorage.setItem('citizenship-qotd', JSON.stringify({
      date: today,
      questionId: todaysQuestion.id,
      answered: true,
      selectedAnswer: optionId
    }));
  };

  if (!todaysQuestion) {
    return (
      <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
        <div className="text-center py-8">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Loading today's question...</p>
        </div>
      </div>
    );
  }

  const correctOption = todaysQuestion.options.find(opt => opt.correct);
  const isCorrect = selectedAnswer === correctOption?.id;

  return (
    <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
            <Calendar className={darkMode ? 'text-purple-400' : 'text-purple-600'} size={24} />
          </div>
          <div>
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Question of the Day
            </h2>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {new Date().toLocaleDateString('en-AU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        {streak > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              darkMode ? 'bg-orange-900/30' : 'bg-orange-100'
            }`}
          >
            <span className="text-2xl">🔥</span>
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Streak</p>
              <p className={`text-xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                {streak} {streak === 1 ? 'day' : 'days'}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Question Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-6 rounded-lg mb-6 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
      >
        {/* Badges */}
        <div className="flex items-center gap-2 mb-4">
          <span className={`text-xs px-2 py-1 rounded ${
            todaysQuestion.difficulty === 'easy'
              ? darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'
              : todaysQuestion.difficulty === 'medium'
              ? darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-700'
              : darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-700'
          }`}>
            {todaysQuestion.difficulty?.toUpperCase()}
          </span>
          {todaysQuestion.isValueQuestion && (
            <span className={`text-xs px-2 py-1 rounded ${
              darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-700'
            }`}>
              ⚠️ VALUES
            </span>
          )}
          {todaysQuestion.category && (
            <span className={`text-xs px-2 py-1 rounded ${
              darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'
            }`}>
              {todaysQuestion.category.replace('-', ' ')}
            </span>
          )}
        </div>

        <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {todaysQuestion.question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {todaysQuestion.options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const isCorrectOption = option.correct;
            const showCorrect = showExplanation && isCorrectOption;
            const showWrong = showExplanation && isSelected && !isCorrectOption;

            return (
              <motion.button
                key={option.id}
                onClick={() => handleAnswer(option.id)}
                disabled={hasAnsweredToday}
                whileHover={!hasAnsweredToday ? { scale: 1.02 } : {}}
                whileTap={!hasAnsweredToday ? { scale: 0.98 } : {}}
                className={`w-full p-4 rounded-lg text-left transition-all ${
                  showCorrect
                    ? darkMode ? 'bg-green-900/30 border-2 border-green-500' : 'bg-green-100 border-2 border-green-500'
                    : showWrong
                    ? darkMode ? 'bg-red-900/30 border-2 border-red-500' : 'bg-red-100 border-2 border-red-500'
                    : isSelected
                    ? darkMode ? 'bg-blue-900/30 border-2 border-blue-500' : 'bg-blue-100 border-2 border-blue-500'
                    : darkMode
                    ? 'bg-gray-600 border-2 border-gray-500 hover:border-gray-400'
                    : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                } ${hasAnsweredToday ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`flex-1 ${
                    showCorrect
                      ? darkMode ? 'text-green-300' : 'text-green-800'
                      : showWrong
                      ? darkMode ? 'text-red-300' : 'text-red-800'
                      : darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {option.text}
                  </span>
                  {showCorrect && <CheckCircle className="text-green-500 ml-2" size={24} />}
                  {showWrong && <XCircle className="text-red-500 ml-2" size={24} />}
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Explanation */}
      {showExplanation && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className={`p-6 rounded-lg ${
            isCorrect
              ? darkMode ? 'bg-green-900/20 border-2 border-green-500' : 'bg-green-50 border-2 border-green-200'
              : darkMode ? 'bg-red-900/20 border-2 border-red-500' : 'bg-red-50 border-2 border-red-200'
          }`}
        >
          <div className="flex items-start gap-3 mb-3">
            {isCorrect ? (
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
            ) : (
              <XCircle className="text-red-500 flex-shrink-0" size={24} />
            )}
            <div>
              <h4 className={`font-bold text-lg mb-2 ${
                isCorrect
                  ? darkMode ? 'text-green-400' : 'text-green-700'
                  : darkMode ? 'text-red-400' : 'text-red-700'
              }`}>
                {isCorrect ? '🎉 Correct!' : '❌ Incorrect'}
              </h4>
              {!isCorrect && (
                <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  The correct answer is: <strong>{correctOption?.text}</strong>
                </p>
              )}
            </div>
          </div>

          {todaysQuestion.explanation && (
            <div className={`flex items-start gap-2 p-3 rounded ${
              darkMode ? 'bg-black/20' : 'bg-white/50'
            }`}>
              <Lightbulb className={darkMode ? 'text-yellow-400' : 'text-yellow-600'} size={20} />
              <div>
                <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-yellow-400' : 'text-yellow-700'}`}>
                  Explanation:
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {todaysQuestion.explanation}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Come back tomorrow message */}
      {hasAnsweredToday && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mt-4 p-4 rounded-lg text-center ${
            darkMode ? 'bg-purple-900/20' : 'bg-purple-50'
          }`}
        >
          <p className={`text-sm ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
            ✅ You've answered today's question! Come back tomorrow for a new one.
          </p>
          {isCorrect && (
            <p className={`text-xs mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Keep your streak going! 🔥
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
}
