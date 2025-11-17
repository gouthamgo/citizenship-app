import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Trophy, Flame, Star, TrendingUp, Target, Calendar,
  Award, CheckCircle, Lock, BarChart3, BookOpen, X,
  Zap, Crown, Shield
} from 'lucide-react';
import { useGame } from '../contexts/GameContext';

export default function ProgressDashboard({ darkMode, onClose }) {
  const {
    userProfile,
    getCurrentLevel,
    getNextLevel,
    getXPProgress,
    LEVELS,
    ACHIEVEMENTS
  } = useGame();

  const currentLevel = getCurrentLevel();
  const nextLevel = getNextLevel();
  const xpProgress = getXPProgress();
  const [selectedTab, setSelectedTab] = useState('overview');

  const accuracy = userProfile.totalQuestions > 0
    ? Math.round((userProfile.totalCorrectAnswers / userProfile.totalQuestions) * 100)
    : 0;

  // Calculate category stats
  const categoryStats = {};
  Object.entries(userProfile.categoryProgress || {}).forEach(([category, data]) => {
    categoryStats[category] = {
      total: data.total || 0,
      correct: data.correct || 0,
      accuracy: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0
    };
  });

  const getCategoryName = (key) => {
    const names = {
      'australia-people': 'Australia and Its People',
      'democratic-beliefs': 'Democratic Beliefs',
      'government-law': 'Government and Law',
      'general': 'General Knowledge'
    };
    return names[key] || key;
  };

  const allAchievements = Object.values(ACHIEVEMENTS);
  const unlockedAchievements = userProfile.achievements || [];
  const lockedAchievements = allAchievements.filter(
    ach => !unlockedAchievements.includes(ach.id)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className={`w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        } shadow-2xl`}
      >
        {/* Header */}
        <div className={`p-6 border-b ${darkMode ? 'border-gray-800 bg-gradient-to-r from-blue-900/30 to-purple-900/30' : 'border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50'}`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Your Progress Dashboard
              </h2>
              <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Track your journey to Australian citizenship
              </p>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              <X size={24} />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 mt-4">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'achievements', label: 'Achievements', icon: Trophy },
              { id: 'categories', label: 'Categories', icon: BookOpen },
              { id: 'levels', label: 'Level Progress', icon: Star }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedTab === tab.id
                    ? darkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-600 text-white'
                    : darkMode
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-750'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <tab.icon size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className={`p-6 overflow-y-auto max-h-[calc(90vh-180px)] ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          {selectedTab === 'overview' && (
            <div className="space-y-6">
              {/* Quick Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Level Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-xl ${darkMode ? 'bg-gradient-to-br from-blue-900/40 to-blue-800/40 border border-blue-700/50' : 'bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200'}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-800' : 'bg-blue-200'}`}>
                      <Star size={24} className={darkMode ? 'text-yellow-400' : 'text-yellow-600'} />
                    </div>
                    <div>
                      <div className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Current Level
                      </div>
                      <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Level {currentLevel.level}
                      </div>
                    </div>
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-700'} font-medium`}>
                    {currentLevel.name}
                  </div>
                  {nextLevel && (
                    <div className="mt-3">
                      <div className={`text-xs mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {userProfile.xp} / {nextLevel.minXP} XP
                      </div>
                      <div className={`h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                          style={{ width: `${xpProgress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Streak Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-xl ${darkMode ? 'bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-700/50' : 'bg-gradient-to-br from-orange-50 to-red-100 border border-orange-200'}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-orange-800' : 'bg-orange-200'}`}>
                      <Flame size={24} className="text-orange-500" />
                    </div>
                    <div>
                      <div className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Study Streak
                      </div>
                      <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {userProfile.streak} Days
                      </div>
                    </div>
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>
                    {userProfile.streak >= 7
                      ? '🔥 Week Warrior!'
                      : `${7 - userProfile.streak} days to Week Warrior`}
                  </div>
                </motion.div>

                {/* Achievements Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-xl ${darkMode ? 'bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-700/50' : 'bg-gradient-to-br from-purple-50 to-pink-100 border border-purple-200'}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-800' : 'bg-purple-200'}`}>
                      <Trophy size={24} className="text-purple-500" />
                    </div>
                    <div>
                      <div className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Achievements
                      </div>
                      <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {unlockedAchievements.length} / {allAchievements.length}
                      </div>
                    </div>
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                    {Math.round((unlockedAchievements.length / allAchievements.length) * 100)}% Complete
                  </div>
                </motion.div>

                {/* Accuracy Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-xl ${
                    accuracy >= 75
                      ? darkMode ? 'bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-700/50' : 'bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200'
                      : darkMode ? 'bg-gradient-to-br from-yellow-900/40 to-amber-900/40 border border-yellow-700/50' : 'bg-gradient-to-br from-yellow-50 to-amber-100 border border-yellow-200'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 rounded-lg ${
                      accuracy >= 75
                        ? darkMode ? 'bg-green-800' : 'bg-green-200'
                        : darkMode ? 'bg-yellow-800' : 'bg-yellow-200'
                    }`}>
                      <TrendingUp size={24} className={accuracy >= 75 ? 'text-green-500' : 'text-yellow-500'} />
                    </div>
                    <div>
                      <div className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Accuracy
                      </div>
                      <div className={`text-2xl font-bold ${
                        accuracy >= 75
                          ? darkMode ? 'text-green-400' : 'text-green-700'
                          : darkMode ? 'text-yellow-400' : 'text-yellow-700'
                      }`}>
                        {accuracy}%
                      </div>
                    </div>
                  </div>
                  <div className={`text-sm ${
                    accuracy >= 75
                      ? darkMode ? 'text-green-300' : 'text-green-700'
                      : darkMode ? 'text-yellow-300' : 'text-yellow-700'
                  }`}>
                    {userProfile.totalCorrectAnswers} / {userProfile.totalQuestions} correct
                  </div>
                </motion.div>
              </div>

              {/* Detailed Stats */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Quiz History */}
                <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                  <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    <Target size={24} className="text-blue-500" />
                    Quiz Performance
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Total Quizzes:</span>
                      <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {userProfile.totalQuizzes || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Perfect Scores:</span>
                      <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {userProfile.perfectScores || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Best Streak:</span>
                      <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {userProfile.bestStreak || 0} correct
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Total XP Earned:</span>
                      <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {userProfile.xp}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Daily Challenge */}
                <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                  <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    <Calendar size={24} className="text-purple-500" />
                    Daily Challenge
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Completed Today:</span>
                      <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {userProfile.dailyChallengeCompleted ? '✅ Yes' : '❌ Not yet'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Total Challenges:</span>
                      <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {userProfile.totalDailyChallenges || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Challenge Streak:</span>
                      <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {userProfile.dailyChallengeStreak || 0} days
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'achievements' && (
            <div className="space-y-6">
              {/* Unlocked Achievements */}
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Unlocked ({unlockedAchievements.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allAchievements
                    .filter(ach => unlockedAchievements.includes(ach.id))
                    .map(achievement => (
                      <motion.div
                        key={achievement.id}
                        whileHover={{ scale: 1.05 }}
                        className={`p-6 rounded-xl ${darkMode ? 'bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-2 border-purple-500/50' : 'bg-gradient-to-br from-purple-50 to-pink-100 border-2 border-purple-300'}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-800' : 'bg-purple-200'}`}>
                            <Trophy size={24} className="text-yellow-500" />
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {achievement.name}
                            </h4>
                            <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {achievement.description}
                            </p>
                            <div className={`mt-2 text-xs font-medium ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                              +{achievement.xpReward} XP
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>

              {/* Locked Achievements */}
              {lockedAchievements.length > 0 && (
                <div>
                  <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Locked ({lockedAchievements.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {lockedAchievements.map(achievement => (
                      <motion.div
                        key={achievement.id}
                        whileHover={{ scale: 1.02 }}
                        className={`p-6 rounded-xl opacity-60 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-300'}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
                            <Lock size={24} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-bold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {achievement.name}
                            </h4>
                            <p className={`text-sm mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                              {achievement.description}
                            </p>
                            <div className={`mt-2 text-xs font-medium ${darkMode ? 'text-gray-600' : 'text-gray-500'}`}>
                              +{achievement.xpReward} XP
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {selectedTab === 'categories' && (
            <div className="space-y-6">
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Performance by Category
              </h3>
              <div className="space-y-4">
                {Object.entries(categoryStats).map(([key, stats]) => (
                  <div
                    key={key}
                    className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {getCategoryName(key)}
                      </h4>
                      <span className={`text-2xl font-bold ${
                        stats.accuracy >= 75
                          ? darkMode ? 'text-green-400' : 'text-green-600'
                          : darkMode ? 'text-yellow-400' : 'text-yellow-600'
                      }`}>
                        {stats.accuracy}%
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className={`flex-1 h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                        <div
                          className={`h-full ${
                            stats.accuracy >= 75 ? 'bg-green-500' : 'bg-yellow-500'
                          }`}
                          style={{ width: `${stats.accuracy}%` }}
                        />
                      </div>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {stats.correct} / {stats.total}
                      </span>
                    </div>
                  </div>
                ))}
                {Object.keys(categoryStats).length === 0 && (
                  <div className={`p-12 text-center rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <BookOpen size={48} className={`mx-auto mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      No category data yet. Start taking quizzes to see your performance!
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {selectedTab === 'levels' && (
            <div className="space-y-6">
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Level Progression
              </h3>
              <div className="space-y-3">
                {LEVELS.map((level, index) => {
                  const isUnlocked = userProfile.xp >= level.minXP;
                  const isCurrent = currentLevel.level === level.level;
                  const nextLevelXP = LEVELS[index + 1]?.minXP || level.minXP;
                  const progress = isUnlocked
                    ? isCurrent && nextLevel
                      ? ((userProfile.xp - level.minXP) / (nextLevelXP - level.minXP)) * 100
                      : 100
                    : 0;

                  return (
                    <motion.div
                      key={level.level}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`p-6 rounded-xl border-2 ${
                        isCurrent
                          ? darkMode ? 'bg-blue-900/40 border-blue-500' : 'bg-blue-50 border-blue-400'
                          : isUnlocked
                            ? darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                            : darkMode ? 'bg-gray-850 border-gray-800 opacity-50' : 'bg-gray-50 border-gray-300 opacity-50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-full ${
                          isCurrent
                            ? 'bg-blue-500'
                            : isUnlocked
                              ? darkMode ? 'bg-purple-600' : 'bg-purple-500'
                              : darkMode ? 'bg-gray-700' : 'bg-gray-300'
                        }`}>
                          {isUnlocked ? (
                            isCurrent ? <Zap size={28} className="text-white" /> : <CheckCircle size={28} className="text-white" />
                          ) : (
                            <Lock size={28} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className={`text-xl font-bold ${
                              isUnlocked
                                ? darkMode ? 'text-white' : 'text-gray-900'
                                : darkMode ? 'text-gray-500' : 'text-gray-400'
                            }`}>
                              Level {level.level}: {level.name}
                            </h4>
                            {isCurrent && (
                              <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                                CURRENT
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-4">
                            <div className={`flex-1 h-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                              <div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                            <span className={`text-sm font-medium ${
                              isUnlocked
                                ? darkMode ? 'text-gray-400' : 'text-gray-600'
                                : darkMode ? 'text-gray-600' : 'text-gray-400'
                            }`}>
                              {level.minXP} XP
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
