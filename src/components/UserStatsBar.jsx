import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame, Star } from 'lucide-react';
import { useGame } from '../contexts/GameContext';

export default function UserStatsBar({ darkMode }) {
  const { userProfile, getCurrentLevel, getNextLevel, getXPProgress } = useGame();
  const currentLevel = getCurrentLevel();
  const nextLevel = getNextLevel();
  const xpProgress = getXPProgress();

  return (
    <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-lg p-3 shadow-sm`}>
      <div className="flex items-center gap-4">
        {/* Level Badge */}
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'}`}>
          <Star size={16} className={darkMode ? 'text-yellow-400' : 'text-blue-600'} />
          <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-blue-900'}`}>
            Lv {currentLevel.level}
          </span>
          <span className={`text-xs ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
            {currentLevel.name}
          </span>
        </div>

        {/* XP Progress Bar */}
        {nextLevel && (
          <div className="flex-1 min-w-[120px]">
            <div className="flex justify-between items-center mb-1">
              <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {userProfile.xp} / {nextLevel.minXP} XP
              </span>
              <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {Math.round(xpProgress)}%
              </span>
            </div>
            <div className={`h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${xpProgress}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        )}

        {/* Streak */}
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${darkMode ? 'bg-orange-900/50' : 'bg-orange-100'}`}>
          <Flame size={16} className="text-orange-500" />
          <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-orange-900'}`}>
            {userProfile.streak}
          </span>
          <span className={`text-xs ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>
            day streak
          </span>
        </div>

        {/* Total Achievements */}
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${darkMode ? 'bg-purple-900/50' : 'bg-purple-100'}`}>
          <Trophy size={16} className="text-purple-500" />
          <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-purple-900'}`}>
            {userProfile.achievements.length}
          </span>
          <span className={`text-xs ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
            badges
          </span>
        </div>
      </div>
    </div>
  );
}
