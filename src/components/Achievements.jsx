import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Lock, Star, Sparkles } from 'lucide-react';
import { useGame, ACHIEVEMENTS } from '../contexts/GameContext';

export default function Achievements({ darkMode }) {
  const { userProfile } = useGame();

  const achievementList = Object.values(ACHIEVEMENTS);

  const isUnlocked = (achievementId) => {
    return userProfile.achievements.includes(achievementId);
  };

  const getProgress = () => {
    const totalAchievements = achievementList.length;
    const unlockedAchievements = userProfile.achievements.length;
    return { total: totalAchievements, unlocked: unlockedAchievements };
  };

  const progress = getProgress();
  const progressPercentage = (progress.unlocked / progress.total) * 100;

  return (
    <div>
      {/* Header */}
      <div className={`rounded-xl ${darkMode ? 'bg-gradient-to-br from-purple-900 to-indigo-900' : 'bg-gradient-to-br from-purple-100 to-indigo-100'} p-8 mb-8 shadow-lg`}>
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-4 rounded-full ${darkMode ? 'bg-white/10' : 'bg-white'}`}>
            <Trophy size={32} className={darkMode ? 'text-yellow-400' : 'text-purple-600'} />
          </div>
          <div>
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Achievements
            </h1>
            <p className={`text-lg ${darkMode ? 'text-purple-200' : 'text-gray-700'}`}>
              Track your progress and unlock badges
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className={`text-sm font-medium ${darkMode ? 'text-purple-200' : 'text-gray-700'}`}>
              {progress.unlocked} / {progress.total} Unlocked
            </span>
            <span className={`text-sm font-medium ${darkMode ? 'text-purple-200' : 'text-gray-700'}`}>
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div className={`h-3 ${darkMode ? 'bg-purple-950' : 'bg-white'} rounded-full overflow-hidden`}>
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>

      {/* Achievement Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementList.map((achievement, index) => {
          const unlocked = isUnlocked(achievement.id);

          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-xl p-6 shadow-md transition-all duration-200 ${
                unlocked
                  ? `${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-750 border-2 border-yellow-500/50' : 'bg-gradient-to-br from-white to-yellow-50 border-2 border-yellow-400/50'} hover:shadow-xl`
                  : `${darkMode ? 'bg-gray-800' : 'bg-gray-100'} opacity-60`
              }`}
            >
              {/* Badge Icon */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-4xl ${
                    unlocked
                      ? `${darkMode ? 'bg-gradient-to-br from-yellow-500 to-orange-500' : 'bg-gradient-to-br from-yellow-400 to-orange-400'} shadow-lg`
                      : `${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`
                  }`}
                >
                  {unlocked ? (
                    <span>{achievement.icon}</span>
                  ) : (
                    <Lock size={24} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                  )}
                </div>

                {unlocked && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <div className={`p-1.5 rounded-full ${darkMode ? 'bg-green-900' : 'bg-green-100'}`}>
                      <Sparkles size={16} className={darkMode ? 'text-green-400' : 'text-green-600'} />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Achievement Info */}
              <div>
                <h3 className={`text-xl font-bold mb-2 ${unlocked ? (darkMode ? 'text-white' : 'text-gray-900') : (darkMode ? 'text-gray-400' : 'text-gray-600')}`}>
                  {achievement.name}
                </h3>
                <p className={`text-sm mb-3 ${unlocked ? (darkMode ? 'text-gray-300' : 'text-gray-700') : (darkMode ? 'text-gray-500' : 'text-gray-500')}`}>
                  {achievement.description}
                </p>

                {/* XP Reward */}
                <div className="flex items-center gap-2">
                  <Star
                    size={16}
                    className={unlocked ? 'text-yellow-500' : (darkMode ? 'text-gray-600' : 'text-gray-400')}
                  />
                  <span className={`text-sm font-medium ${unlocked ? 'text-yellow-500' : (darkMode ? 'text-gray-600' : 'text-gray-500')}`}>
                    +{achievement.xpReward} XP
                  </span>
                </div>
              </div>

              {/* Unlocked indicator */}
              {unlocked && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`mt-4 pt-4 border-t ${darkMode ? 'border-yellow-500/30' : 'border-yellow-400/30'}`}
                >
                  <div className="flex items-center gap-2">
                    <Trophy size={14} className="text-yellow-500" />
                    <span className={`text-xs font-medium ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                      Unlocked!
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Motivation Section */}
      {progress.unlocked < progress.total && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`mt-8 rounded-xl ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'} p-6 border-2 ${darkMode ? 'border-blue-800' : 'border-blue-200'}`}
        >
          <div className="text-center">
            <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Keep Going!
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              You have {progress.total - progress.unlocked} more {progress.total - progress.unlocked === 1 ? 'achievement' : 'achievements'} to unlock.
              Keep practicing and studying to earn all badges!
            </p>
          </div>
        </motion.div>
      )}

      {/* All Unlocked Celebration */}
      {progress.unlocked === progress.total && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className={`mt-8 rounded-xl bg-gradient-to-r ${darkMode ? 'from-yellow-600 to-orange-600' : 'from-yellow-400 to-orange-500'} p-8 text-white text-center shadow-2xl`}
        >
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-2">Congratulations!</h2>
          <p className="text-lg mb-4">
            You've unlocked all achievements! You're a true citizenship expert!
          </p>
          <div className="text-2xl font-bold">
            +{achievementList.reduce((sum, a) => sum + a.xpReward, 0)} Total XP Earned
          </div>
        </motion.div>
      )}
    </div>
  );
}
