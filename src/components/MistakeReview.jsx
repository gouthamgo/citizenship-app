import React, { useState, useEffect } from 'react';
import { XCircle, RotateCcw, TrendingUp, AlertTriangle, CheckCircle, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import Quiz from './Quiz';
import { EXPANDED_QUESTIONS } from '../data/expanded-questions';
import { VALUES_QUESTIONS } from '../data/values-questions';
import { GOVERNMENT_QUESTIONS } from '../data/government-questions';
import { ADDITIONAL_QUESTIONS } from '../data/additional-questions';

export default function MistakeReview({ darkMode, onBack }) {
  const [mistakes, setMistakes] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [filterCategory, setFilterCategory] = useState('all');

  const allQuestions = [
    ...EXPANDED_QUESTIONS,
    ...VALUES_QUESTIONS,
    ...GOVERNMENT_QUESTIONS,
    ...ADDITIONAL_QUESTIONS
  ];

  useEffect(() => {
    loadMistakes();
  }, []);

  const loadMistakes = () => {
    const saved = localStorage.getItem('citizenship-mistakes');
    if (saved) {
      const mistakeIds = JSON.parse(saved);
      const mistakeQuestions = allQuestions.filter(q => mistakeIds.includes(q.id));
      setMistakes(mistakeQuestions);
    }
  };

  const clearAllMistakes = () => {
    if (window.confirm('Are you sure you want to clear your mistake history? This cannot be undone.')) {
      localStorage.setItem('citizenship-mistakes', JSON.stringify([]));
      setMistakes([]);
    }
  };

  const removeMistake = (questionId) => {
    const saved = localStorage.getItem('citizenship-mistakes');
    if (saved) {
      const mistakeIds = JSON.parse(saved);
      const updated = mistakeIds.filter(id => id !== questionId);
      localStorage.setItem('citizenship-mistakes', JSON.stringify(updated));
      loadMistakes();
    }
  };

  // Get unique categories from mistakes
  const categories = ['all', ...new Set(mistakes.map(q => q.category).filter(Boolean))];

  // Filter mistakes by category
  const filteredMistakes = filterCategory === 'all'
    ? mistakes
    : mistakes.filter(q => q.category === filterCategory);

  // Count mistakes by category
  const getCategoryCount = (category) => {
    return mistakes.filter(q => q.category === category).length;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return darkMode ? 'text-green-400 bg-green-900/30' : 'text-green-700 bg-green-100';
      case 'medium':
        return darkMode ? 'text-yellow-400 bg-yellow-900/30' : 'text-yellow-700 bg-yellow-100';
      case 'hard':
        return darkMode ? 'text-red-400 bg-red-900/30' : 'text-red-700 bg-red-100';
      default:
        return darkMode ? 'text-gray-400 bg-gray-900/30' : 'text-gray-700 bg-gray-100';
    }
  };

  if (showQuiz && filteredMistakes.length > 0) {
    return (
      <div>
        <button
          onClick={() => setShowQuiz(false)}
          className={`mb-4 flex items-center gap-2 px-4 py-2 rounded-lg ${
            darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
        >
          ← Back to Mistakes
        </button>
        <Quiz questions={filteredMistakes} darkMode={darkMode} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-xl ${
          darkMode
            ? 'bg-gradient-to-r from-red-900 to-orange-900'
            : 'bg-gradient-to-r from-red-100 to-orange-100'
        } p-6`}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-red-800' : 'bg-red-200'}`}>
              <XCircle className={darkMode ? 'text-red-300' : 'text-red-700'} size={32} />
            </div>
            <div>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Mistake Review
              </h2>
              <p className={`${darkMode ? 'text-red-200' : 'text-red-700'}`}>
                Learn from your incorrect answers
              </p>
            </div>
          </div>
          {onBack && (
            <button
              onClick={onBack}
              className={`px-4 py-2 rounded-lg ${
                darkMode ? 'bg-red-800 hover:bg-red-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-700'
              } transition-all`}
            >
              ← Back
            </button>
          )}
        </div>

        <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-800/50' : 'bg-white/50'}`}>
          <div className="flex items-start gap-2">
            <TrendingUp className={darkMode ? 'text-red-300' : 'text-red-600'} size={20} />
            <div>
              <p className={`text-sm font-medium ${darkMode ? 'text-red-200' : 'text-red-800'}`}>
                {mistakes.length === 0
                  ? '🎉 No mistakes yet - keep up the great work!'
                  : `You have ${mistakes.length} question${mistakes.length !== 1 ? 's' : ''} to review`
                }
              </p>
              {mistakes.length > 0 && (
                <p className={`text-xs ${darkMode ? 'text-red-300' : 'text-red-600'}`}>
                  Focus on these to improve your weak areas and boost your score!
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {mistakes.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-12 text-center`}
        >
          <CheckCircle className={`mx-auto mb-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`} size={64} />
          <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Perfect Performance!
          </h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
            You haven't made any mistakes yet. Keep practicing to track questions you get wrong.
          </p>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
            <p className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              💡 When you answer a question incorrectly during practice, it will automatically be added here for review.
            </p>
          </div>
        </motion.div>
      ) : (
        <>
          {/* Stats and Actions */}
          <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {filteredMistakes.length} Mistake{filteredMistakes.length !== 1 ? 's' : ''}
                  {filterCategory !== 'all' && ` in ${filterCategory.replace('-', ' ')}`}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Review and practice these questions to improve
                </p>
              </div>

              <div className="flex gap-2">
                {filteredMistakes.length > 0 && (
                  <button
                    onClick={() => setShowQuiz(true)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      darkMode
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    <BookOpen size={18} />
                    Practice These Questions
                  </button>
                )}
                <button
                  onClick={clearAllMistakes}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    darkMode
                      ? 'bg-red-900/30 hover:bg-red-900/50 text-red-400'
                      : 'bg-red-100 hover:bg-red-200 text-red-700'
                  }`}
                >
                  <RotateCcw size={18} />
                  Clear All
                </button>
              </div>
            </div>

            {/* Category Filter */}
            {categories.length > 2 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      filterCategory === cat
                        ? 'bg-blue-600 text-white'
                        : darkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    {cat !== 'all' && (
                      <span className={`ml-1 ${filterCategory === cat ? 'text-blue-200' : darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        ({getCategoryCount(cat)})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Category breakdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-red-900/30' : 'bg-red-50'}`}>
                <p className={`text-xs ${darkMode ? 'text-red-400' : 'text-red-700'}`}>Total Mistakes</p>
                <p className={`text-2xl font-bold ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                  {mistakes.length}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-orange-900/30' : 'bg-orange-50'}`}>
                <p className={`text-xs ${darkMode ? 'text-orange-400' : 'text-orange-700'}`}>Hard Questions</p>
                <p className={`text-2xl font-bold ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                  {mistakes.filter(q => q.difficulty === 'hard').length}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'}`}>
                <p className={`text-xs ${darkMode ? 'text-yellow-400' : 'text-yellow-700'}`}>Values Questions</p>
                <p className={`text-2xl font-bold ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                  {mistakes.filter(q => q.isValueQuestion).length}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
                <p className={`text-xs ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>Categories</p>
                <p className={`text-2xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                  {categories.length - 1}
                </p>
              </div>
            </div>
          </div>

          {/* Mistakes List */}
          <div className="space-y-4">
            {filteredMistakes.map((question, index) => {
              const correctOption = question.options.find(opt => opt.correct);

              return (
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.03, 0.5) }}
                  className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(question.difficulty)}`}>
                          {question.difficulty?.toUpperCase()}
                        </span>
                        {question.isValueQuestion && (
                          <span className="text-xs px-2 py-1 rounded bg-red-900/30 text-red-400 border border-red-500">
                            ⚠️ VALUES
                          </span>
                        )}
                        {question.category && (
                          <span className={`text-xs px-2 py-1 rounded ${
                            darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {question.category.replace('-', ' ')}
                          </span>
                        )}
                        {question.commonMistake && (
                          <span className={`text-xs px-2 py-1 rounded ${
                            darkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-100 text-orange-700'
                          }`}>
                            Common Mistake
                          </span>
                        )}
                      </div>

                      <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {question.question}
                      </h3>

                      {/* Correct Answer */}
                      <div className={`p-4 rounded-lg mb-3 ${darkMode ? 'bg-green-900/30' : 'bg-green-50'}`}>
                        <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                          ✓ Correct Answer:
                        </p>
                        <p className={`font-medium ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                          {correctOption?.text}
                        </p>
                      </div>

                      {/* Explanation */}
                      {question.explanation && (
                        <div className={`p-4 rounded-lg border-l-4 ${
                          darkMode
                            ? 'bg-blue-900/20 border-blue-500'
                            : 'bg-blue-50 border-blue-400'
                        }`}>
                          <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                            💡 Explanation:
                          </p>
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => removeMistake(question.id)}
                      className={`ml-4 p-2 rounded-lg transition-all ${
                        darkMode
                          ? 'text-gray-400 hover:text-red-400 hover:bg-red-900/30'
                          : 'text-gray-400 hover:text-red-600 hover:bg-red-100'
                      }`}
                      title="Mark as learned"
                    >
                      <XCircle size={20} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Tips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`p-4 rounded-lg ${
              darkMode ? 'bg-gradient-to-r from-purple-900/30 to-blue-900/30' : 'bg-gradient-to-r from-purple-50 to-blue-50'
            }`}
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className={darkMode ? 'text-purple-400' : 'text-purple-600'} size={24} />
              <div>
                <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  💡 Study Tips for Mistake Review
                </p>
                <ul className={`text-sm mt-2 space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Focus on understanding WHY the correct answer is right</li>
                  <li>• Pay special attention to VALUES questions - you must get these all correct!</li>
                  <li>• Practice these questions multiple times until mastered</li>
                  <li>• Remove questions from this list once you're confident</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
