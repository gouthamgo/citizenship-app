import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, Star, Trophy, Flame, Calendar, Award, Target } from 'lucide-react';

export default function OnboardingModal({ darkMode, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: <Star size={64} className="text-yellow-500" />,
      title: 'Welcome to CitizenTest.au!',
      description: 'Your complete gamified learning platform for the Australian Citizenship Test',
      content: [
        'Study all 23 topics from the official syllabus',
        'Take practice quizzes and mock tests',
        'Earn XP and level up as you learn',
        'Unlock achievements and track your progress'
      ]
    },
    {
      icon: <Target size={64} className="text-blue-500" />,
      title: 'How XP & Levels Work',
      description: 'Earn experience points for every correct answer',
      content: [
        '🟢 Easy questions: 5 XP',
        '🟡 Medium questions: 10 XP',
        '🔴 Hard questions: 15 XP',
        '⭐ Perfect quiz: +30 bonus XP',
        '📈 Level up from Newcomer to Citizenship Expert (10 levels)'
      ],
      visual: (
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} mt-4`}>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Your Level</span>
              <span className="text-2xl font-bold text-blue-500">Level 1 → Level 10</span>
            </div>
            <div className={`h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-1/4"></div>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              The XP bar fills up as you answer questions correctly
            </p>
          </div>
        </div>
      )
    },
    {
      icon: <Trophy size={64} className="text-yellow-500" />,
      title: 'Unlock Achievements',
      description: 'Earn badges by completing challenges',
      content: [
        '🎯 First Steps - Complete your first quiz',
        '💯 Perfect Score - Get 100% on any test',
        '🏃 Marathon Runner - Complete all mock tests',
        '📚 Scholar - Read all study materials',
        '⚡ Speed Demon - Finish a quiz under 2 minutes',
        '🔥 Week Warrior - 7-day study streak',
        '...and more!'
      ]
    },
    {
      icon: <Flame size={64} className="text-orange-500" />,
      title: 'Build Your Streak',
      description: 'Study daily to build and maintain your streak',
      content: [
        '🔥 Daily Login Bonus: +10 XP',
        '📅 Take the Daily Challenge every day',
        '7-day streak unlocks Week Warrior badge',
        '30-day streak unlocks Month Master badge',
        'Track your streak in the top bar'
      ],
      visual: (
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-orange-50'} mt-4`}>
          <div className="flex items-center justify-center gap-3">
            <Flame size={48} className="text-orange-500" />
            <div>
              <div className="text-4xl font-bold">7</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>day streak</div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <Calendar size={64} className="text-purple-500" />,
      title: 'Daily Challenge',
      description: '5 new questions every day',
      content: [
        '✨ Fresh questions daily (resets at midnight)',
        '🎁 Completion bonus: +20 XP',
        '🏆 Perfect score: +50 XP (and confetti!)',
        'Questions saved - come back anytime',
        'Access from the Daily Challenge menu'
      ]
    },
    {
      icon: <Award size={64} className="text-green-500" />,
      title: "You're All Set!",
      description: 'Start your citizenship test journey now',
      content: [
        '📖 Read study materials to learn',
        '🎯 Take practice quizzes to test yourself',
        '📝 Complete mock tests to prepare',
        '🏆 Track your progress in Achievements',
        '📊 View stats in your profile bar (top of page)'
      ]
    }
  ];

  const currentStepData = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`max-w-2xl w-full rounded-2xl shadow-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} overflow-hidden`}
      >
        {/* Header */}
        <div className={`p-6 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                Step {currentStep + 1} of {steps.length}
              </div>
            </div>
            <button
              onClick={handleSkip}
              className={`text-sm ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Skip Tutorial
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                {currentStepData.icon}
              </div>

              {/* Title */}
              <h2 className={`text-3xl font-bold text-center mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {currentStepData.title}
              </h2>

              {/* Description */}
              <p className={`text-center mb-6 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {currentStepData.description}
              </p>

              {/* Content List */}
              <div className={`rounded-lg p-6 mb-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <ul className="space-y-3">
                  {currentStepData.content.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-start gap-3 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}
                    >
                      <span className="text-blue-500 font-bold">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Visual Aid */}
              {currentStepData.visual && currentStepData.visual}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className={`p-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} flex justify-between items-center`}>
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all ${
              currentStep === 0
                ? darkMode ? 'text-gray-600 cursor-not-allowed' : 'text-gray-400 cursor-not-allowed'
                : darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <ChevronLeft size={20} />
            Previous
          </button>

          {/* Progress Dots */}
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentStep
                    ? 'bg-blue-500 w-8'
                    : index < currentStep
                      ? 'bg-green-500'
                      : darkMode ? 'bg-gray-700' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all ${
              darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
            } text-white`}
          >
            {currentStep === steps.length - 1 ? "Let's Start!" : 'Next'}
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
