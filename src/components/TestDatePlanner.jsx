import React, { useState, useEffect } from 'react';
import { Calendar, Target, Clock, TrendingUp, Book, AlertCircle, CheckCircle2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestDatePlanner({ darkMode }) {
  const [testDate, setTestDate] = useState('');
  const [hasTestDate, setHasTestDate] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [studyPlan, setStudyPlan] = useState(null);
  const [completedToday, setCompletedToday] = useState(false);

  useEffect(() => {
    loadTestDate();
    checkDailyProgress();
  }, []);

  useEffect(() => {
    if (testDate) {
      calculateDaysRemaining();
      generateStudyPlan();
    }
  }, [testDate]);

  const loadTestDate = () => {
    const saved = localStorage.getItem('citizenship-test-date');
    if (saved) {
      const parsed = JSON.parse(saved);
      setTestDate(parsed.date);
      setHasTestDate(true);
    }
  };

  const checkDailyProgress = () => {
    const today = new Date().toDateString();
    const lastCompleted = localStorage.getItem('citizenship-daily-study-date');
    setCompletedToday(lastCompleted === today);
  };

  const calculateDaysRemaining = () => {
    const test = new Date(testDate);
    const today = new Date();
    const diff = Math.ceil((test - today) / (1000 * 60 * 60 * 24));
    setDaysRemaining(diff);
  };

  const generateStudyPlan = () => {
    const days = daysRemaining;

    if (days < 0) {
      setStudyPlan({ message: 'Your test date has passed!' });
      return;
    }

    let plan = {};

    if (days <= 3) {
      plan = {
        intensity: 'INTENSE',
        color: 'red',
        dailyQuestions: 100,
        mockTests: 3,
        focusAreas: ['Australian Values (CRITICAL)', 'Government Structure', 'History'],
        tips: [
          'Focus only on hardest questions',
          'Take 3 mock tests per day',
          'Review ALL mistakes immediately',
          'Memorize the 5 values questions'
        ]
      };
    } else if (days <= 7) {
      plan = {
        intensity: 'HIGH',
        color: 'orange',
        dailyQuestions: 50,
        mockTests: 2,
        focusAreas: ['Australian Values', 'Government', 'Rights & Responsibilities'],
        tips: [
          'Take 2 mock tests daily',
          'Review starred questions',
          'Focus on weak categories',
          'Practice under timed conditions'
        ]
      };
    } else if (days <= 14) {
      plan = {
        intensity: 'MODERATE',
        color: 'yellow',
        dailyQuestions: 30,
        mockTests: 1,
        focusAreas: ['All Categories', 'Australian Values', 'Symbols & Culture'],
        tips: [
          'Take 1 mock test daily',
          '30 practice questions per day',
          'Use flashcards for memorization',
          'Track your progress'
        ]
      };
    } else if (days <= 30) {
      plan = {
        intensity: 'STEADY',
        color: 'blue',
        dailyQuestions: 20,
        mockTests: 1,
        focusAreas: ['Balanced Coverage', 'Australian Values', 'History'],
        tips: [
          '20 questions daily',
          '1 mock test every 2 days',
          'Build consistent study habits',
          'Review explanations thoroughly'
        ]
      };
    } else {
      plan = {
        intensity: 'RELAXED',
        color: 'green',
        dailyQuestions: 15,
        mockTests: 0,
        focusAreas: ['Foundation Building', 'Reading Material', 'Basic Concepts'],
        tips: [
          '15 questions daily',
          'Read handbook thoroughly',
          'Build strong foundation',
          'Take notes on important topics'
        ]
      };
    }

    setStudyPlan(plan);
  };

  const handleSetTestDate = () => {
    if (!testDate) return;

    localStorage.setItem('citizenship-test-date', JSON.stringify({
      date: testDate,
      setOn: new Date().toISOString()
    }));
    setHasTestDate(true);
    calculateDaysRemaining();
    generateStudyPlan();
  };

  const handleClearTestDate = () => {
    localStorage.removeItem('citizenship-test-date');
    setTestDate('');
    setHasTestDate(false);
    setDaysRemaining(0);
    setStudyPlan(null);
  };

  const markDailyStudyComplete = () => {
    const today = new Date().toDateString();
    localStorage.setItem('citizenship-daily-study-date', today);
    setCompletedToday(true);
  };

  const getIntensityColor = (color) => {
    const colors = {
      red: darkMode ? 'from-red-900 to-red-800' : 'from-red-100 to-red-50',
      orange: darkMode ? 'from-orange-900 to-orange-800' : 'from-orange-100 to-orange-50',
      yellow: darkMode ? 'from-yellow-900 to-yellow-800' : 'from-yellow-100 to-yellow-50',
      blue: darkMode ? 'from-blue-900 to-blue-800' : 'from-blue-100 to-blue-50',
      green: darkMode ? 'from-green-900 to-green-800' : 'from-green-100 to-green-50'
    };
    return colors[color] || colors.blue;
  };

  const getIntensityTextColor = (color) => {
    const colors = {
      red: darkMode ? 'text-red-400' : 'text-red-700',
      orange: darkMode ? 'text-orange-400' : 'text-orange-700',
      yellow: darkMode ? 'text-yellow-400' : 'text-yellow-700',
      blue: darkMode ? 'text-blue-400' : 'text-blue-700',
      green: darkMode ? 'text-green-400' : 'text-green-700'
    };
    return colors[color] || colors.blue;
  };

  if (!hasTestDate) {
    return (
      <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-8`}>
        <div className="text-center max-w-md mx-auto">
          <div className={`inline-flex p-4 rounded-full ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mb-4`}>
            <Calendar className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={48} />
          </div>

          <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Set Your Test Date
          </h2>

          <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            When is your citizenship test scheduled? We'll create a personalized study plan to help you prepare.
          </p>

          <div className="mb-6">
            <input
              type="date"
              value={testDate}
              onChange={(e) => setTestDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className={`w-full px-4 py-3 rounded-lg border-2 text-lg ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              } focus:outline-none`}
            />
          </div>

          <button
            onClick={handleSetTestDate}
            disabled={!testDate}
            className={`w-full py-3 rounded-lg font-medium transition-all ${
              testDate
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : darkMode
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Create My Study Plan
          </button>

          <p className={`mt-4 text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Don't have a test date yet? You can still practice without setting one.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Countdown Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-xl bg-gradient-to-r ${
          daysRemaining <= 3
            ? 'from-red-600 to-pink-600'
            : daysRemaining <= 7
            ? 'from-orange-600 to-red-600'
            : daysRemaining <= 14
            ? 'from-yellow-600 to-orange-600'
            : 'from-blue-600 to-purple-600'
        } shadow-lg p-8 text-white`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Target size={32} />
            <div>
              <h3 className="text-sm opacity-90">Test Date</h3>
              <p className="text-xl font-bold">
                {new Date(testDate).toLocaleDateString('en-AU', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>

          <button
            onClick={handleClearTestDate}
            className="px-3 py-1 rounded bg-white/20 hover:bg-white/30 text-sm transition-all"
          >
            Change Date
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 rounded-lg bg-white/10">
            <div className="text-4xl font-bold">{daysRemaining}</div>
            <div className="text-sm opacity-90">Days Left</div>
          </div>

          <div className="text-center p-4 rounded-lg bg-white/10">
            <div className="text-4xl font-bold">{Math.ceil(daysRemaining / 7)}</div>
            <div className="text-sm opacity-90">Weeks</div>
          </div>

          <div className="text-center p-4 rounded-lg bg-white/10">
            <div className="text-4xl font-bold">{daysRemaining * 24}</div>
            <div className="text-sm opacity-90">Hours</div>
          </div>
        </div>

        {daysRemaining <= 3 && (
          <div className="mt-4 p-3 rounded-lg bg-white/10 flex items-start gap-2">
            <AlertCircle size={20} />
            <p className="text-sm">
              <strong>Final push!</strong> Focus on Australian Values and your weak areas. You've got this! 💪
            </p>
          </div>
        )}
      </motion.div>

      {/* Study Plan */}
      {studyPlan && studyPlan.intensity && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${getIntensityColor(studyPlan.color)}`}>
                <Zap className={getIntensityTextColor(studyPlan.color)} size={24} />
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Your Study Plan
                </h3>
                <p className={`text-sm ${getIntensityTextColor(studyPlan.color)} font-bold`}>
                  {studyPlan.intensity} INTENSITY
                </p>
              </div>
            </div>

            {!completedToday ? (
              <button
                onClick={markDailyStudyComplete}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  darkMode
                    ? 'bg-green-900/30 text-green-400 hover:bg-green-900/50'
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                Mark Today Complete
              </button>
            ) : (
              <div className="flex items-center gap-2 text-green-500">
                <CheckCircle2 size={20} />
                <span className="font-medium">Completed Today!</span>
              </div>
            )}
          </div>

          {/* Daily Goals */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="flex items-center gap-2 mb-2">
                <Book className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
                <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Daily Questions</h4>
              </div>
              <p className={`text-3xl font-bold ${getIntensityTextColor(studyPlan.color)}`}>
                {studyPlan.dailyQuestions}
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>questions per day</p>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="flex items-center gap-2 mb-2">
                <Clock className={darkMode ? 'text-purple-400' : 'text-purple-600'} size={20} />
                <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Mock Tests</h4>
              </div>
              <p className={`text-3xl font-bold ${getIntensityTextColor(studyPlan.color)}`}>
                {studyPlan.mockTests}
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {studyPlan.mockTests === 0 ? 'every few days' : 'per day'}
              </p>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="mb-6">
            <h4 className={`font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              🎯 Focus Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {studyPlan.focusAreas.map((area, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div>
            <h4 className={`font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              💡 Study Tips
            </h4>
            <ul className="space-y-2">
              {studyPlan.tips.map((tip, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  <span className="text-green-500 mt-1">✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}
