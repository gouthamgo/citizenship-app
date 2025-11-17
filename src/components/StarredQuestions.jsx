import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, AlertCircle, BookOpen, Trash2, RotateCcw, ArrowLeft } from 'lucide-react';
import Quiz from './Quiz';
import { EXPANDED_QUESTIONS } from '../data/expanded-questions';
import { VALUES_QUESTIONS } from '../data/values-questions';
import { GOVERNMENT_QUESTIONS } from '../data/government-questions';
import { ADDITIONAL_QUESTIONS } from '../data/additional-questions';

export default function StarredQuestions({ darkMode, onBack }) {
  const [starredQuestionIds, setStarredQuestionIds] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);

  // Load starred questions from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('citizenship-starred-questions');
    if (saved) {
      setStarredQuestionIds(JSON.parse(saved));
    }
  }, []);

  // All questions combined
  const allQuestions = [
    ...EXPANDED_QUESTIONS,
    ...VALUES_QUESTIONS,
    ...GOVERNMENT_QUESTIONS,
    ...ADDITIONAL_QUESTIONS
  ];

  // Get starred questions
  const starredQuestions = allQuestions.filter(q =>
    starredQuestionIds.includes(q.id)
  );

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to remove all starred questions?')) {
      setStarredQuestionIds([]);
      localStorage.setItem('citizenship-starred-questions', JSON.stringify([]));
    }
  };

  const handleRemoveStar = (questionId) => {
    const updated = starredQuestionIds.filter(id => id !== questionId);
    setStarredQuestionIds(updated);
    localStorage.setItem('citizenship-starred-questions', JSON.stringify(updated));
  };

  if (showQuiz && starredQuestions.length > 0) {
    return (
      <div>
        <button
          onClick={() => setShowQuiz(false)}
          className={`mb-4 flex items-center gap-2 px-4 py-2 rounded-lg ${
            darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
          } transition-colors`}
        >
          <ArrowLeft size={20} />
          Back to Starred Questions
        </button>
        <Quiz questions={starredQuestions} darkMode={darkMode} />
      </div>
    );
  }

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
        className={`rounded-xl p-8 border-2 ${
          darkMode
            ? 'bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border-yellow-700/50'
            : 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300'
        }`}
      >
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500 mb-6">
            <Star size={40} className="text-white fill-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Starred Questions</h1>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Questions you've marked for extra practice
          </p>
        </div>
      </motion.div>

      {starredQuestions.length === 0 ? (
        <div className={`rounded-xl p-12 text-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <Star size={64} className={`mx-auto mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
          <h3 className="text-2xl font-bold mb-4">No Starred Questions Yet</h3>
          <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Star questions during practice to save them for later review
          </p>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border border-blue-700/50' : 'bg-blue-50 border border-blue-200'}`}>
            <h4 className="font-bold mb-2">How to Star Questions:</h4>
            <ul className={`text-sm text-left max-w-md mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Take any practice quiz or mock test</li>
              <li>• Click the ⭐ star icon on difficult questions</li>
              <li>• Come back here to practice just those questions</li>
              <li>• Perfect for focusing on your weak areas!</li>
            </ul>
          </div>
        </div>
      ) : (
        <>
          {/* Stats */}
          <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  {starredQuestions.length} Starred Question{starredQuestions.length !== 1 ? 's' : ''}
                </h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Focus on the questions you find challenging
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowQuiz(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-bold transition-colors"
                >
                  <BookOpen size={20} />
                  Practice Starred
                </button>
                <button
                  onClick={handleClearAll}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                    darkMode ? 'bg-red-900/40 hover:bg-red-800/40 border border-red-700/50' : 'bg-red-100 hover:bg-red-200'
                  }`}
                  title="Clear all starred questions"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Question List */}
          <div className="space-y-3">
            {starredQuestions.map((question, index) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 rounded-xl border-2 ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        question.difficulty === 'hard'
                          ? 'bg-red-500/20 text-red-500'
                          : question.difficulty === 'medium'
                            ? 'bg-yellow-500/20 text-yellow-500'
                            : 'bg-green-500/20 text-green-500'
                      }`}>
                        {question.difficulty || 'medium'}
                      </span>
                      {question.isValueQuestion && (
                        <span className="px-2 py-1 rounded text-xs font-bold bg-red-500 text-white">
                          VALUES - CRITICAL
                        </span>
                      )}
                      {question.commonMistake && (
                        <span className="px-2 py-1 rounded text-xs font-bold bg-orange-500/20 text-orange-500">
                          Common Mistake
                        </span>
                      )}
                      {question.failRate && (
                        <span className="px-2 py-1 rounded text-xs font-bold bg-purple-500/20 text-purple-500">
                          {question.failRate}% pass rate
                        </span>
                      )}
                    </div>
                    <p className="font-medium mb-2">{question.question}</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Category: {question.category?.replace(/-/g, ' ')}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveStar(question.id)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-yellow-500 hover:bg-yellow-500/10"
                    title="Remove star"
                  >
                    <Star size={20} className="fill-yellow-500" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tips */}
          <div className={`rounded-xl p-6 ${darkMode ? 'bg-blue-900/20 border border-blue-700/50' : 'bg-blue-50 border border-blue-200'}`}>
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <AlertCircle size={20} className="text-blue-500" />
              Study Tips for Starred Questions:
            </h3>
            <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Review these questions multiple times until you're confident</li>
              <li>• Read the explanations carefully to understand the concepts</li>
              <li>• For values questions, you MUST get 100% correct on the real test</li>
              <li>• Focus on understanding WHY the answer is correct, not just memorizing</li>
              <li>• Remove questions from starred once you've mastered them</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
