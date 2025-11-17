import React, { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

// Level configuration
export const LEVELS = [
  { level: 1, name: 'Newcomer', minXP: 0, color: 'gray' },
  { level: 2, name: 'Explorer', minXP: 100, color: 'blue' },
  { level: 3, name: 'Student', minXP: 300, color: 'green' },
  { level: 4, name: 'Scholar', minXP: 600, color: 'yellow' },
  { level: 5, name: 'Expert', minXP: 1000, color: 'orange' },
  { level: 6, name: 'Master', minXP: 1500, color: 'red' },
  { level: 7, name: 'Sage', minXP: 2200, color: 'purple' },
  { level: 8, name: 'Guru', minXP: 3000, color: 'pink' },
  { level: 9, name: 'Legend', minXP: 4000, color: 'indigo' },
  { level: 10, name: 'Citizenship Expert', minXP: 5500, color: 'gold' }
];

// Achievement definitions
export const ACHIEVEMENTS = {
  FIRST_STEPS: {
    id: 'first_steps',
    name: 'First Steps',
    description: 'Complete your first quiz',
    icon: '🎯',
    xpReward: 50
  },
  PERFECT_SCORE: {
    id: 'perfect_score',
    name: 'Perfect Score',
    description: 'Get 100% on any test',
    icon: '💯',
    xpReward: 100
  },
  MARATHON_RUNNER: {
    id: 'marathon_runner',
    name: 'Marathon Runner',
    description: 'Complete all 6 mock tests',
    icon: '🏃',
    xpReward: 200
  },
  SCHOLAR: {
    id: 'scholar',
    name: 'Scholar',
    description: 'Read all study subsections',
    icon: '📚',
    xpReward: 150
  },
  SPEED_DEMON: {
    id: 'speed_demon',
    name: 'Speed Demon',
    description: 'Complete a quiz in under 2 minutes',
    icon: '⚡',
    xpReward: 75
  },
  STREAK_WEEK: {
    id: 'streak_week',
    name: 'Week Warrior',
    description: 'Maintain a 7-day study streak',
    icon: '🔥',
    xpReward: 100
  },
  STREAK_MONTH: {
    id: 'streak_month',
    name: 'Month Master',
    description: 'Maintain a 30-day study streak',
    icon: '🌟',
    xpReward: 300
  },
  EARLY_BIRD: {
    id: 'early_bird',
    name: 'Early Bird',
    description: 'Complete a quiz before 9 AM',
    icon: '🌅',
    xpReward: 25
  },
  NIGHT_OWL: {
    id: 'night_owl',
    name: 'Night Owl',
    description: 'Complete a quiz after 10 PM',
    icon: '🦉',
    xpReward: 25
  },
  QUICK_LEARNER: {
    id: 'quick_learner',
    name: 'Quick Learner',
    description: 'Get 5 correct answers in a row',
    icon: '🧠',
    xpReward: 50
  }
};

// XP rewards
export const XP_REWARDS = {
  CORRECT_EASY: 5,
  CORRECT_MEDIUM: 10,
  CORRECT_HARD: 15,
  QUIZ_COMPLETE: 20,
  MOCK_TEST_COMPLETE: 50,
  DAILY_LOGIN: 10,
  SUBSECTION_READ: 5,
  PERFECT_QUIZ: 30
};

export function GameProvider({ children }) {
  const [userProfile, setUserProfile] = useState({
    username: 'Student',
    xp: 0,
    level: 1,
    streak: 0,
    lastActive: new Date().toDateString(),
    achievements: [],
    completedQuizzes: [],
    completedMockTests: [],
    readSubsections: [],
    startDate: new Date().toISOString(),
    totalCorrectAnswers: 0,
    totalQuestions: 0,
    streakFreezes: 3,
    stats: {
      quizzesTaken: 0,
      mockTestsTaken: 0,
      perfectScores: 0,
      totalStudyTime: 0
    }
  });

  const [recentAchievements, setRecentAchievements] = useState([]);

  // Load user profile from localStorage
  useEffect(() => {
    const savedProfile = localStorage.getItem('citizenship-user-profile');
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      setUserProfile(profile);
      updateStreak(profile);
    }
  }, []);

  // Save user profile to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('citizenship-user-profile', JSON.stringify(userProfile));
  }, [userProfile]);

  // Update streak based on last active date
  const updateStreak = (profile) => {
    const today = new Date().toDateString();
    const lastActive = new Date(profile.lastActive).toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    if (lastActive === today) {
      // Already updated today
      return;
    } else if (lastActive === yesterday) {
      // Consecutive day - increment streak
      setUserProfile(prev => ({
        ...prev,
        streak: prev.streak + 1,
        lastActive: today
      }));
      addXP(XP_REWARDS.DAILY_LOGIN);
      checkStreakAchievements(profile.streak + 1);
    } else {
      // Streak broken
      setUserProfile(prev => ({
        ...prev,
        streak: 1,
        lastActive: today
      }));
    }
  };

  // Get current level info
  const getCurrentLevel = () => {
    for (let i = LEVELS.length - 1; i >= 0; i--) {
      if (userProfile.xp >= LEVELS[i].minXP) {
        return LEVELS[i];
      }
    }
    return LEVELS[0];
  };

  // Get next level info
  const getNextLevel = () => {
    const currentLevel = getCurrentLevel();
    const nextLevelIndex = LEVELS.findIndex(l => l.level === currentLevel.level) + 1;
    return nextLevelIndex < LEVELS.length ? LEVELS[nextLevelIndex] : null;
  };

  // Calculate XP progress to next level
  const getXPProgress = () => {
    const currentLevel = getCurrentLevel();
    const nextLevel = getNextLevel();

    if (!nextLevel) {
      return 100; // Max level
    }

    const currentLevelXP = currentLevel.minXP;
    const nextLevelXP = nextLevel.minXP;
    const progress = ((userProfile.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;

    return Math.min(Math.max(progress, 0), 100);
  };

  // Add XP and handle level ups
  const addXP = (amount) => {
    setUserProfile(prev => {
      const newXP = prev.xp + amount;
      const oldLevel = getCurrentLevel();

      // Check if leveled up
      const newLevel = LEVELS.reduce((acc, level) => {
        return newXP >= level.minXP ? level : acc;
      }, LEVELS[0]);

      if (newLevel.level > oldLevel.level) {
        // Level up!
        showNotification('Level Up!', `You've reached level ${newLevel.level}: ${newLevel.name}!`);
      }

      return {
        ...prev,
        xp: newXP,
        level: newLevel.level
      };
    });
  };

  // Unlock achievement
  const unlockAchievement = (achievementId) => {
    if (userProfile.achievements.includes(achievementId)) {
      return; // Already unlocked
    }

    const achievement = Object.values(ACHIEVEMENTS).find(a => a.id === achievementId);
    if (!achievement) return;

    setUserProfile(prev => ({
      ...prev,
      achievements: [...prev.achievements, achievementId]
    }));

    // Add to recent achievements for display
    setRecentAchievements(prev => [...prev, achievement]);
    setTimeout(() => {
      setRecentAchievements(prev => prev.filter(a => a.id !== achievementId));
    }, 5000);

    // Award XP
    addXP(achievement.xpReward);
    showNotification('Achievement Unlocked!', achievement.name);
  };

  // Check for streak-based achievements
  const checkStreakAchievements = (streak) => {
    if (streak >= 7 && !userProfile.achievements.includes('streak_week')) {
      unlockAchievement('streak_week');
    }
    if (streak >= 30 && !userProfile.achievements.includes('streak_month')) {
      unlockAchievement('streak_month');
    }
  };

  // Handle quiz completion
  const completeQuiz = (quizId, score, totalQuestions, timeSpent) => {
    const percentage = (score / totalQuestions) * 100;

    setUserProfile(prev => ({
      ...prev,
      completedQuizzes: [...new Set([...prev.completedQuizzes, quizId])],
      totalCorrectAnswers: prev.totalCorrectAnswers + score,
      totalQuestions: prev.totalQuestions + totalQuestions,
      stats: {
        ...prev.stats,
        quizzesTaken: prev.stats.quizzesTaken + 1,
        perfectScores: percentage === 100 ? prev.stats.perfectScores + 1 : prev.stats.perfectScores,
        totalStudyTime: prev.stats.totalStudyTime + timeSpent
      }
    }));

    // Award XP
    addXP(XP_REWARDS.QUIZ_COMPLETE);

    // Check achievements
    if (userProfile.completedQuizzes.length === 0) {
      unlockAchievement('first_steps');
    }
    if (percentage === 100) {
      unlockAchievement('perfect_score');
    }
    if (timeSpent < 120) {
      unlockAchievement('speed_demon');
    }

    // Check time-based achievements
    const hour = new Date().getHours();
    if (hour < 9) {
      unlockAchievement('early_bird');
    } else if (hour >= 22) {
      unlockAchievement('night_owl');
    }
  };

  // Handle mock test completion
  const completeMockTest = (testId, score, totalQuestions) => {
    setUserProfile(prev => ({
      ...prev,
      completedMockTests: [...new Set([...prev.completedMockTests, testId])],
      stats: {
        ...prev.stats,
        mockTestsTaken: prev.stats.mockTestsTaken + 1
      }
    }));

    addXP(XP_REWARDS.MOCK_TEST_COMPLETE);

    // Check if all 6 mock tests completed
    if (userProfile.completedMockTests.length >= 5) {
      unlockAchievement('marathon_runner');
    }
  };

  // Mark subsection as read
  const markSubsectionRead = (subsectionId) => {
    if (userProfile.readSubsections.includes(subsectionId)) {
      return; // Already read
    }

    setUserProfile(prev => ({
      ...prev,
      readSubsections: [...prev.readSubsections, subsectionId]
    }));

    addXP(XP_REWARDS.SUBSECTION_READ);

    // Check if all subsections read (23 total)
    if (userProfile.readSubsections.length >= 22) {
      unlockAchievement('scholar');
    }
  };

  // Show notification
  const showNotification = (title, message) => {
    // This can be enhanced with a toast notification library
    console.log(`${title}: ${message}`);
  };

  // Reset user profile
  const resetProfile = () => {
    const defaultProfile = {
      username: 'Student',
      xp: 0,
      level: 1,
      streak: 0,
      lastActive: new Date().toDateString(),
      achievements: [],
      completedQuizzes: [],
      completedMockTests: [],
      readSubsections: [],
      startDate: new Date().toISOString(),
      totalCorrectAnswers: 0,
      totalQuestions: 0,
      streakFreezes: 3,
      stats: {
        quizzesTaken: 0,
        mockTestsTaken: 0,
        perfectScores: 0,
        totalStudyTime: 0
      }
    };
    setUserProfile(defaultProfile);
    localStorage.setItem('citizenship-user-profile', JSON.stringify(defaultProfile));
  };

  const value = {
    userProfile,
    setUserProfile,
    addXP,
    unlockAchievement,
    completeQuiz,
    completeMockTest,
    markSubsectionRead,
    getCurrentLevel,
    getNextLevel,
    getXPProgress,
    recentAchievements,
    resetProfile
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
