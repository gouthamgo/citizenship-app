import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Flame, Star, TrendingUp, Info, X, BarChart3 } from 'lucide-react';
import { useGame } from '../contexts/GameContext';

export default function UserStatsBar({ darkMode, onViewProgress }) {
  const { userProfile, getCurrentLevel, getNextLevel, getXPProgress } = useGame();
  const currentLevel = getCurrentLevel();
  const nextLevel = getNextLevel();
  const xpProgress = getXPProgress();
  const [showTooltip, setShowTooltip] = useState(null);

  const accuracy = userProfile.totalQuestions > 0
    ? Math.round((userProfile.totalCorrectAnswers / userProfile.totalQuestions) * 100)
    : 0;

  return (
    <div className="relative">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-850' : 'bg-gradient-to-r from-white to-blue-50'} backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 ${darkMode ? 'border-gray-700' : 'border-blue-100'}`}
      >
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* Left Section - Level & XP */}
          <div className="flex items-center gap-4 flex-1 min-w-[300px]">
            {/* Level Badge - Enhanced */}
            <div
              className="relative"
              onMouseEnter={() => setShowTooltip('level')}
              onMouseLeave={() => setShowTooltip(null)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gradient-to-r from-blue-900 to-blue-800' : 'bg-gradient-to-r from-blue-100 to-blue-200'} shadow-md cursor-pointer`}
              >
                <Star size={20} className={darkMode ? 'text-yellow-400' : 'text-yellow-600'} />
                <div>
                  <div className={`text-lg font-bold leading-tight ${darkMode ? 'text-white' : 'text-blue-900'}`}>
                    Lv {currentLevel.level}
                  </div>
                  <div className={`text-xs leading-tight ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                    {currentLevel.name}
                  </div>
                </div>
              </motion.div>

              {/* Tooltip */}
              <AnimatePresence>
                {showTooltip === 'level' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`absolute z-50 top-full mt-2 left-0 p-3 rounded-lg shadow-xl ${darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'} min-w-[200px]`}
                  >
                    <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="font-bold mb-1">Your Level Progress</div>
                      <div>Current: Level {currentLevel.level}</div>
                      {nextLevel && (
                        <div>Next: Level {nextLevel.level} ({nextLevel.minXP} XP)</div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* XP Progress Bar - Enhanced */}
            {nextLevel && (
              <div
                className="flex-1 min-w-[150px]"
                onMouseEnter={() => setShowTooltip('xp')}
                onMouseLeave={() => setShowTooltip(null)}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {userProfile.xp} / {nextLevel.minXP} XP
                  </span>
                  <span className={`text-sm font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {Math.round(xpProgress)}%
                  </span>
                </div>
                <div className={`h-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden shadow-inner`}>
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: `${xpProgress}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                      animate={{
                        x: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                    />
                  </motion.div>
                </div>

                {/* XP Tooltip */}
                <AnimatePresence>
                  {showTooltip === 'xp' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`absolute z-50 top-full mt-2 p-3 rounded-lg shadow-xl ${darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'}`}
                    >
                      <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <div className="font-bold mb-1">XP Breakdown</div>
                        <div>• Easy questions: +5 XP</div>
                        <div>• Medium questions: +10 XP</div>
                        <div>• Hard questions: +15 XP</div>
                        <div>• Perfect quiz: +30 XP bonus</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Right Section - Stats */}
          <div className="flex items-center gap-3">
            {/* Streak - Enhanced */}
            <div
              className="relative"
              onMouseEnter={() => setShowTooltip('streak')}
              onMouseLeave={() => setShowTooltip(null)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 px-3 py-2 rounded-full ${darkMode ? 'bg-gradient-to-r from-orange-900/50 to-red-900/50' : 'bg-gradient-to-r from-orange-100 to-red-100'} shadow-md cursor-pointer`}
              >
                <motion.div
                  animate={userProfile.streak > 0 ? {
                    scale: [1, 1.2, 1],
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <Flame size={18} className="text-orange-500" />
                </motion.div>
                <div>
                  <div className={`text-lg font-bold leading-tight ${darkMode ? 'text-white' : 'text-orange-900'}`}>
                    {userProfile.streak}
                  </div>
                  <div className={`text-xs leading-tight ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>
                    days
                  </div>
                </div>
              </motion.div>

              <AnimatePresence>
                {showTooltip === 'streak' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`absolute z-50 top-full mt-2 right-0 p-3 rounded-lg shadow-xl ${darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'} min-w-[180px]`}
                  >
                    <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="font-bold mb-1">Study Streak</div>
                      <div>Keep studying daily!</div>
                      <div className="mt-2 text-xs text-orange-500">
                        🔥 7 days = Week Warrior badge
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Achievements - Enhanced */}
            <div
              className="relative"
              onMouseEnter={() => setShowTooltip('badges')}
              onMouseLeave={() => setShowTooltip(null)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 px-3 py-2 rounded-full ${darkMode ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50' : 'bg-gradient-to-r from-purple-100 to-pink-100'} shadow-md cursor-pointer`}
              >
                <Trophy size={18} className="text-purple-500" />
                <div>
                  <div className={`text-lg font-bold leading-tight ${darkMode ? 'text-white' : 'text-purple-900'}`}>
                    {userProfile.achievements.length}
                  </div>
                  <div className={`text-xs leading-tight ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                    badges
                  </div>
                </div>
              </motion.div>

              <AnimatePresence>
                {showTooltip === 'badges' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`absolute z-50 top-full mt-2 right-0 p-3 rounded-lg shadow-xl ${darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'} min-w-[180px]`}
                  >
                    <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="font-bold mb-1">Achievement Badges</div>
                      <div>{userProfile.achievements.length} / 10 unlocked</div>
                      <div className="mt-2 text-xs text-purple-500">
                        Click Achievements menu to view all
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accuracy Badge */}
            {userProfile.totalQuestions > 0 && (
              <div
                className="relative"
                onMouseEnter={() => setShowTooltip('accuracy')}
                onMouseLeave={() => setShowTooltip(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full ${
                    accuracy >= 75
                      ? darkMode ? 'bg-gradient-to-r from-green-900/50 to-emerald-900/50' : 'bg-gradient-to-r from-green-100 to-emerald-100'
                      : darkMode ? 'bg-gradient-to-r from-yellow-900/50 to-amber-900/50' : 'bg-gradient-to-r from-yellow-100 to-amber-100'
                  } shadow-md cursor-pointer`}
                >
                  <TrendingUp size={18} className={accuracy >= 75 ? 'text-green-500' : 'text-yellow-500'} />
                  <div>
                    <div className={`text-lg font-bold leading-tight ${
                      accuracy >= 75
                        ? darkMode ? 'text-green-400' : 'text-green-700'
                        : darkMode ? 'text-yellow-400' : 'text-yellow-700'
                    }`}>
                      {accuracy}%
                    </div>
                    <div className={`text-xs leading-tight ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      accuracy
                    </div>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {showTooltip === 'accuracy' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`absolute z-50 top-full mt-2 right-0 p-3 rounded-lg shadow-xl ${darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'} min-w-[180px]`}
                    >
                      <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <div className="font-bold mb-1">Your Accuracy</div>
                        <div>{userProfile.totalCorrectAnswers} / {userProfile.totalQuestions} correct</div>
                        <div className="mt-2 text-xs">
                          {accuracy >= 75 ? '✅ Pass mark reached!' : '📚 Keep practicing!'}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* View Progress Button */}
            {onViewProgress && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onViewProgress}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium shadow-md transition-colors`}
              >
                <BarChart3 size={18} />
                <span className="hidden sm:inline">View Progress</span>
              </motion.button>
            )}
          </div>
        </div>

        {/* Mobile View Helper */}
        <div className="mt-2 text-center md:hidden">
          <button
            className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-600'} flex items-center gap-1 mx-auto`}
          >
            <Info size={12} />
            Hover for details
          </button>
        </div>
      </motion.div>
    </div>
  );
}
