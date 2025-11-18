import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Crown, TrendingUp, Users, Zap, Target, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../contexts/GameContext';

// Generate realistic competitor names
const COMPETITOR_NAMES = [
  { name: 'Sarah M.', country: '🇬🇧', avatar: 'SM' },
  { name: 'James Chen', country: '🇨🇳', avatar: 'JC' },
  { name: 'Priya Kumar', country: '🇮🇳', avatar: 'PK' },
  { name: 'Ahmed Hassan', country: '🇪🇬', avatar: 'AH' },
  { name: 'Maria Santos', country: '🇵🇭', avatar: 'MS' },
  { name: 'David Kim', country: '🇰🇷', avatar: 'DK' },
  { name: 'Emma Wilson', country: '🇺🇸', avatar: 'EW' },
  { name: 'Carlos Rodriguez', country: '🇲🇽', avatar: 'CR' },
  { name: 'Aisha Mohammed', country: '🇸🇦', avatar: 'AM' },
  { name: 'Li Wei', country: '🇨🇳', avatar: 'LW' },
  { name: 'Fatima Ali', country: '🇵🇰', avatar: 'FA' },
  { name: 'John Smith', country: '🇺🇸', avatar: 'JS' },
  { name: 'Yuki Tanaka', country: '🇯🇵', avatar: 'YT' },
  { name: 'Sofia Novak', country: '🇨🇿', avatar: 'SN' },
  { name: 'Michael Brown', country: '🇬🇧', avatar: 'MB' },
  { name: 'Raj Patel', country: '🇮🇳', avatar: 'RP' },
  { name: 'Anna Kowalski', country: '🇵🇱', avatar: 'AK' },
  { name: 'Omar Ibrahim', country: '🇪🇬', avatar: 'OI' },
  { name: 'Lucia Garcia', country: '🇪🇸', avatar: 'LG' },
  { name: 'Tom Anderson', country: '🇺🇸', avatar: 'TA' },
];

// Seeded random number generator for consistency
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function Leaderboard({ darkMode }) {
  const [activeTab, setActiveTab] = useState('daily');
  const [dailyLeaderboard, setDailyLeaderboard] = useState([]);
  const [weeklyLeaderboard, setWeeklyLeaderboard] = useState([]);
  const [allTimeLeaderboard, setAllTimeLeaderboard] = useState([]);
  const { stats } = useGame();

  useEffect(() => {
    generateLeaderboards();
  }, [stats]);

  const generateLeaderboards = () => {
    const userScore = stats.totalQuizzesCompleted > 0
      ? Math.round((stats.correctAnswers / (stats.correctAnswers + stats.wrongAnswers)) * 100)
      : 0;

    const userTests = stats.totalQuizzesCompleted || 0;
    const userXP = stats.xp || 0;

    // Generate daily leaderboard (changes each day)
    const today = new Date().toDateString();
    const dailySeed = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const daily = generateCompetitors(20, dailySeed, 70, 100, 1, 5);

    // Insert user into daily leaderboard
    const userDaily = {
      name: 'You',
      country: '⭐',
      avatar: 'YOU',
      score: Math.min(userScore, 100),
      tests: Math.min(userTests, 5),
      isUser: true,
      xp: userXP
    };
    daily.push(userDaily);
    daily.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.tests - a.tests;
    });
    setDailyLeaderboard(daily.slice(0, 20));

    // Generate weekly leaderboard (changes each week)
    const weekNum = Math.floor(new Date().getTime() / (1000 * 60 * 60 * 24 * 7));
    const weekly = generateCompetitors(50, weekNum, 65, 100, 5, 20);
    const userWeekly = {
      name: 'You',
      country: '⭐',
      avatar: 'YOU',
      score: Math.min(userScore, 100),
      tests: Math.min(userTests, 20),
      isUser: true,
      xp: userXP
    };
    weekly.push(userWeekly);
    weekly.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (b.tests !== a.tests) return b.tests - a.tests;
      return b.xp - a.xp;
    });
    setWeeklyLeaderboard(weekly.slice(0, 50));

    // Generate all-time leaderboard (mostly stable with slight daily variation)
    const allTimeSeed = 12345 + Math.floor(new Date().getTime() / (1000 * 60 * 60 * 24));
    const allTime = generateCompetitors(100, allTimeSeed, 75, 100, 20, 100);
    const userAllTime = {
      name: 'You',
      country: '⭐',
      avatar: 'YOU',
      score: Math.min(userScore, 100),
      tests: userTests,
      isUser: true,
      xp: userXP
    };
    allTime.push(userAllTime);
    allTime.sort((a, b) => {
      if (b.xp !== a.xp) return b.xp - a.xp;
      if (b.score !== a.score) return b.score - a.score;
      return b.tests - a.tests;
    });
    setAllTimeLeaderboard(allTime.slice(0, 100));
  };

  const generateCompetitors = (count, seed, minScore, maxScore, minTests, maxTests) => {
    const competitors = [];
    for (let i = 0; i < count; i++) {
      const personSeed = seed + i * 1000;
      const person = COMPETITOR_NAMES[Math.floor(seededRandom(personSeed) * COMPETITOR_NAMES.length)];

      // Generate realistic scores (weighted towards higher scores)
      const scoreRand = seededRandom(personSeed + 1);
      const score = Math.round(minScore + (scoreRand * scoreRand) * (maxScore - minScore));

      // Generate test count
      const testsRand = seededRandom(personSeed + 2);
      const tests = Math.round(minTests + testsRand * (maxTests - minTests));

      // Generate XP based on score and tests
      const xp = Math.round((score / 100) * tests * 50 + seededRandom(personSeed + 3) * 500);

      competitors.push({
        ...person,
        score,
        tests,
        xp,
        isUser: false
      });
    }
    return competitors;
  };

  const getRankIcon = (index) => {
    if (index === 0) return <Crown className="text-yellow-500" size={24} />;
    if (index === 1) return <Medal className="text-gray-400" size={24} />;
    if (index === 2) return <Medal className="text-orange-600" size={24} />;
    return null;
  };

  const getRankBadgeColor = (index) => {
    if (index === 0) return darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-700';
    if (index === 1) return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700';
    if (index === 2) return darkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-100 text-orange-700';
    return darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600';
  };

  const currentLeaderboard =
    activeTab === 'daily' ? dailyLeaderboard :
    activeTab === 'weekly' ? weeklyLeaderboard :
    allTimeLeaderboard;

  const userRank = currentLeaderboard.findIndex(p => p.isUser) + 1;
  const userEntry = currentLeaderboard.find(p => p.isUser);

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-xl bg-gradient-to-r ${
          darkMode
            ? 'from-purple-900 via-pink-900 to-red-900'
            : 'from-purple-200 via-pink-200 to-red-200'
        } p-6`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-800' : 'bg-white/50'}`}>
            <Trophy className={darkMode ? 'text-yellow-400' : 'text-yellow-600'} size={32} />
          </div>
          <div>
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Global Leaderboard
            </h2>
            <p className={`text-sm ${darkMode ? 'text-purple-200' : 'text-purple-800'}`}>
              Compete with students worldwide preparing for the citizenship test
            </p>
          </div>
        </div>

        {/* User's Rank Card */}
        {userEntry && userRank > 0 && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`p-4 rounded-lg ${
              darkMode ? 'bg-black/30' : 'bg-white/50'
            } backdrop-blur-sm`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                  getRankBadgeColor(userRank - 1)
                }`}>
                  #{userRank}
                </div>
                <div>
                  <p className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Your Rank
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {userEntry.score}% • {userEntry.tests} tests • {userEntry.xp} XP
                  </p>
                </div>
              </div>
              {userRank <= 3 && (
                <div className="text-2xl">🏆</div>
              )}
              {userRank > 3 && userRank <= 10 && (
                <div className="text-2xl">⭐</div>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Tabs */}
      <div className={`flex gap-2 p-1 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <button
          onClick={() => setActiveTab('daily')}
          className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
            activeTab === 'daily'
              ? darkMode
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 shadow'
              : darkMode
              ? 'text-gray-400 hover:text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Calendar size={18} className="inline mr-2" />
          Daily
        </button>
        <button
          onClick={() => setActiveTab('weekly')}
          className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
            activeTab === 'weekly'
              ? darkMode
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 shadow'
              : darkMode
              ? 'text-gray-400 hover:text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <TrendingUp size={18} className="inline mr-2" />
          Weekly
        </button>
        <button
          onClick={() => setActiveTab('all-time')}
          className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
            activeTab === 'all-time'
              ? darkMode
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 shadow'
              : darkMode
              ? 'text-gray-400 hover:text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Trophy size={18} className="inline mr-2" />
          All-Time
        </button>
      </div>

      {/* Leaderboard List */}
      <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md overflow-hidden`}>
        <div className={`p-4 border-b ${darkMode ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'}`}>
          <div className="flex items-center justify-between">
            <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {currentLeaderboard.length} Competitors
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Users size={16} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                {activeTab === 'daily' ? "Today's Rankings" : activeTab === 'weekly' ? "This Week" : "All Time"}
              </span>
            </div>
          </div>
        </div>

        <div className="max-h-[600px] overflow-y-auto">
          <AnimatePresence mode="wait">
            {currentLeaderboard.map((person, index) => (
              <motion.div
                key={`${person.name}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: Math.min(index * 0.02, 0.4) }}
                className={`p-4 border-b ${
                  darkMode ? 'border-gray-700' : 'border-gray-100'
                } ${
                  person.isUser
                    ? darkMode
                      ? 'bg-blue-900/20'
                      : 'bg-blue-50'
                    : index < 3
                    ? darkMode
                      ? 'bg-gradient-to-r from-yellow-900/10 to-transparent'
                      : 'bg-gradient-to-r from-yellow-50 to-transparent'
                    : ''
                } hover:${darkMode ? 'bg-gray-750' : 'bg-gray-50'} transition-colors`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    {/* Rank */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                      getRankBadgeColor(index)
                    }`}>
                      {getRankIcon(index) || `#${index + 1}`}
                    </div>

                    {/* Avatar */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      person.isUser
                        ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white'
                        : darkMode
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {person.avatar}
                    </div>

                    {/* Name and Country */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className={`font-bold ${
                          person.isUser
                            ? 'text-blue-500'
                            : darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {person.name}
                        </p>
                        <span className="text-lg">{person.country}</span>
                        {person.isUser && (
                          <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-500 text-white">
                            YOU
                          </span>
                        )}
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {person.tests} test{person.tests !== 1 ? 's' : ''} completed
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${
                        person.score >= 90
                          ? 'text-green-500'
                          : person.score >= 75
                          ? 'text-yellow-500'
                          : 'text-gray-500'
                      }`}>
                        {person.score}%
                      </p>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {person.xp} XP
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Motivational Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`p-4 rounded-lg ${
          darkMode ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30' : 'bg-gradient-to-r from-blue-50 to-purple-50'
        }`}
      >
        <div className="flex items-start gap-3">
          <Zap className={darkMode ? 'text-yellow-400' : 'text-yellow-600'} size={24} />
          <div>
            <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              💡 Tip: Climb the rankings!
            </p>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Complete more tests and maintain high accuracy to improve your rank. The leaderboard updates {activeTab === 'daily' ? 'daily' : activeTab === 'weekly' ? 'weekly' : 'continuously'}!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
