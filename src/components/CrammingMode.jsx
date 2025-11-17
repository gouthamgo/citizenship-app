import React, { useState } from 'react';
import { Eye, BookOpen, Filter, Search, Star, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { EXPANDED_QUESTIONS } from '../data/expanded-questions';
import { VALUES_QUESTIONS } from '../data/values-questions';
import { GOVERNMENT_QUESTIONS } from '../data/government-questions';
import { ADDITIONAL_QUESTIONS } from '../data/additional-questions';

export default function CrammingMode({ darkMode, onBack }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showValuesOnly, setShowValuesOnly] = useState(false);

  const allQuestions = [...EXPANDED_QUESTIONS, ...VALUES_QUESTIONS, ...GOVERNMENT_QUESTIONS, ...ADDITIONAL_QUESTIONS];

  // Get unique categories
  const categories = ['all', ...new Set(allQuestions.map(q => q.category).filter(Boolean))];

  // Filter questions
  const filteredQuestions = allQuestions.filter(q => {
    if (selectedCategory !== 'all' && q.category !== selectedCategory) return false;
    if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
    if (showValuesOnly && !q.isValueQuestion) return false;
    if (searchQuery && !q.question.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-xl ${darkMode ? 'bg-gradient-to-r from-purple-900 to-indigo-900' : 'bg-gradient-to-r from-purple-100 to-indigo-100'} p-6`}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-800' : 'bg-purple-200'}`}>
              <Eye className={darkMode ? 'text-purple-300' : 'text-purple-700'} size={32} />
            </div>
            <div>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Cramming Mode
              </h2>
              <p className={`${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                Quick review with all answers visible
              </p>
            </div>
          </div>
          {onBack && (
            <button
              onClick={onBack}
              className={`px-4 py-2 rounded-lg ${
                darkMode ? 'bg-purple-800 hover:bg-purple-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-700'
              } transition-all`}
            >
              ← Back
            </button>
          )}
        </div>

        <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-800/50' : 'bg-white/50'}`}>
          <div className="flex items-start gap-2">
            <BookOpen className={darkMode ? 'text-purple-300' : 'text-purple-600'} size={20} />
            <div>
              <p className={`text-sm font-medium ${darkMode ? 'text-purple-200' : 'text-purple-800'}`}>
                Perfect for last-minute revision!
              </p>
              <p className={`text-xs ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                All {filteredQuestions.length} questions with correct answers highlighted. Great for memorization before your test.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Filters */}
      <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
        <div className="grid md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <Search size={16} className="inline mr-1" />
              Search Questions
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type to search..."
              className={`w-full px-4 py-2 rounded-lg border ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              } focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
          </div>

          {/* Category Filter */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <Filter size={16} className="inline mr-1" />
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-purple-500`}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Difficulty
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-purple-500`}
            >
              <option value="all">All Levels</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>

        {/* Values Only Toggle */}
        <div className="mt-4">
          <button
            onClick={() => setShowValuesOnly(!showValuesOnly)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              showValuesOnly
                ? 'bg-red-600 text-white'
                : darkMode
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <AlertTriangle size={16} />
            <span className="font-medium">
              {showValuesOnly ? 'Showing Values Questions Only' : 'Show Values Questions Only'}
            </span>
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        <div className={`flex items-center justify-between px-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <p className="text-sm font-medium">
            Showing {filteredQuestions.length} of {allQuestions.length} questions
          </p>
        </div>

        {filteredQuestions.map((question, index) => {
          const correctOption = question.options.find(opt => opt.correct);

          return (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }}
              className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(question.difficulty)}`}>
                      {question.difficulty?.toUpperCase()}
                    </span>
                    {question.isValueQuestion && (
                      <span className="text-xs px-2 py-1 rounded bg-red-900/30 text-red-400 border border-red-500">
                        ⚠️ VALUES - MUST GET CORRECT
                      </span>
                    )}
                    {question.category && (
                      <span className={`text-xs px-2 py-1 rounded ${
                        darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {question.category.replace('-', ' ')}
                      </span>
                    )}
                    {question.failRate && (
                      <span className={`text-xs px-2 py-1 rounded ${
                        darkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {question.failRate}% fail rate
                      </span>
                    )}
                  </div>

                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {index + 1}. {question.question}
                  </h3>
                </div>
              </div>

              {/* Options with Correct Answer Highlighted */}
              <div className="space-y-3 mb-4">
                {question.options.map((option) => {
                  const isCorrect = option.correct;

                  return (
                    <div
                      key={option.id}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        isCorrect
                          ? darkMode
                            ? 'bg-green-900/30 border-green-500'
                            : 'bg-green-50 border-green-400'
                          : darkMode
                          ? 'bg-gray-700 border-gray-600'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`${
                          isCorrect
                            ? darkMode ? 'text-green-300 font-bold' : 'text-green-800 font-bold'
                            : darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {option.text}
                        </span>
                        {isCorrect && (
                          <span className={`ml-3 px-3 py-1 rounded-full text-xs font-bold ${
                            darkMode ? 'bg-green-800 text-green-200' : 'bg-green-200 text-green-800'
                          }`}>
                            ✓ CORRECT ANSWER
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
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

              {question.commonMistake && (
                <div className={`mt-3 p-3 rounded-lg ${
                  darkMode ? 'bg-orange-900/20' : 'bg-orange-50'
                }`}>
                  <p className={`text-xs font-medium ${darkMode ? 'text-orange-400' : 'text-orange-700'}`}>
                    ⚠️ Common Mistake: Many test takers get this wrong - make sure to memorize the correct answer!
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {filteredQuestions.length === 0 && (
        <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-12 text-center`}>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            No questions found matching your filters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedDifficulty('all');
              setSearchQuery('');
              setShowValuesOnly(false);
            }}
            className={`mt-4 px-6 py-2 rounded-lg ${
              darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-600 hover:bg-purple-700'
            } text-white transition-all`}
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
