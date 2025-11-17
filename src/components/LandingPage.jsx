import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Award,
  Check,
  Flag,
  Info,
  Download,
  BookMarked,
  Headphones,
  MapPin,
  Bookmark,
  ExternalLink,
  ChevronRight,
  Clock,
  Target,
  Users,
  TrendingUp,
  Sparkles,
  Play,
  BookOpen,
  Scale,
  Landmark,
  Heart
} from 'lucide-react';
import { useGame } from '../contexts/GameContext';

export default function LandingPage({ darkMode, setActiveTab }) {
  const { userProfile } = useGame();
  const [sampleQuestionIndex, setSampleQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Sample questions for the interactive widget
  const sampleQuestions = [
    {
      question: "What are the national colors of Australia?",
      options: ["Red, white, and blue", "Green and gold", "Black, red, and yellow"],
      correct: 1
    },
    {
      question: "What is the capital city of Australia?",
      options: ["Sydney", "Melbourne", "Canberra"],
      correct: 2
    },
    {
      question: "What do we remember on Anzac Day?",
      options: [
        "The arrival of the first free settlers",
        "The landing of the Australian and New Zealand Army Corps in Gallipoli",
        "The arrival of the First Fleet"
      ],
      correct: 1
    }
  ];

  const currentQuestion = sampleQuestions[sampleQuestionIndex];

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setSampleQuestionIndex((prev) => (prev + 1) % sampleQuestions.length);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className={`rounded-xl ${darkMode ? 'bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900' : 'bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600'} mb-8 overflow-hidden shadow-2xl relative`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 py-12 md:py-16 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
                <Sparkles size={16} />
                Your path to Australian citizenship starts here
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Master Your Australian
              <span className="text-yellow-300 block mt-2">Citizenship Test</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Comprehensive practice tests, study materials, and gamified learning to help you pass with confidence
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                className="group px-8 py-4 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                onClick={() => setActiveTab('practice')}
              >
                <Play size={20} />
                Start Practicing Now
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="px-8 py-4 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold transition-all duration-200 border-2 border-white/30 hover:border-white/50"
                onClick={() => setActiveTab('flashcards')}
              >
                📚 Try Flashcards
              </button>
              <button
                className="px-8 py-4 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold transition-all duration-200 border-2 border-white/30 hover:border-white/50"
                onClick={() => setActiveTab('mocktest')}
              >
                Take Full Mock Test
              </button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">23</div>
                <div className="text-sm text-blue-200">Study Topics</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">120+</div>
                <div className="text-sm text-blue-200">Questions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">6</div>
                <div className="text-sm text-blue-200">Mock Tests</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-blue-200">Free Forever</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CRITICAL: Australian Values Warning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`rounded-xl p-6 mb-8 border-4 ${
          darkMode
            ? 'bg-gradient-to-r from-red-900/40 to-pink-900/40 border-red-500/50'
            : 'bg-gradient-to-r from-red-50 to-pink-50 border-red-300'
        }`}
      >
        <div className="flex items-start gap-4">
          <div className="p-4 rounded-full bg-red-500 flex-shrink-0">
            <Heart size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl font-bold">Australian Values Quiz</h3>
              <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                CRITICAL
              </span>
            </div>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong>⚠️ Important:</strong> In the real test, you must answer ALL 5 Australian values questions correctly to pass.
              Missing even ONE values question = automatic FAIL, regardless of your overall score.
            </p>
            <button
              onClick={() => setActiveTab('values-quiz')}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors flex items-center gap-2"
            >
              <Heart size={20} />
              Practice Values Questions Now
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Interactive Sample Question */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-8 mb-8 border-2 ${darkMode ? 'border-blue-900' : 'border-blue-100'}`}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'}`}>
            <Target size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Try a Sample Question</h2>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Test your knowledge with real citizenship test questions
            </p>
          </div>
        </div>

        <div className="mb-6">
          <p className={`text-lg font-medium mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            {currentQuestion.question}
          </p>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedAnswer === null
                    ? `${darkMode ? 'border-gray-700 hover:border-blue-500 bg-gray-750' : 'border-gray-200 hover:border-blue-400 bg-gray-50'}`
                    : selectedAnswer === index
                    ? index === currentQuestion.correct
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-red-500 bg-red-500/10'
                    : index === currentQuestion.correct
                    ? 'border-green-500 bg-green-500/10'
                    : `${darkMode ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'} opacity-50`
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index
                        ? index === currentQuestion.correct
                          ? 'border-green-500 bg-green-500'
                          : 'border-red-500 bg-red-500'
                        : selectedAnswer !== null && index === currentQuestion.correct
                        ? 'border-green-500 bg-green-500'
                        : `${darkMode ? 'border-gray-600' : 'border-gray-300'}`
                    }`}
                  >
                    {((selectedAnswer === index && index === currentQuestion.correct) ||
                      (selectedAnswer !== null && index === currentQuestion.correct)) && (
                      <Check size={16} className="text-white" />
                    )}
                  </div>
                  <span className={darkMode ? 'text-gray-200' : 'text-gray-800'}>{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {selectedAnswer !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3"
          >
            <button
              onClick={nextQuestion}
              className={`px-6 py-3 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium transition-all`}
            >
              Next Question
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className={`px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} font-medium transition-all`}
            >
              Start Full Practice
            </button>
          </motion.div>
        )}
      </motion.div>

      {/* Study Materials Section */}
      <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-8 mb-8`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Study Materials</h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Learn everything you need to know for the Australian Citizenship Test
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Part 1 */}
          <motion.button
            onClick={() => setActiveTab('part1')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-6 rounded-xl text-left transition-all duration-200 border-2 ${
              darkMode
                ? 'bg-gradient-to-br from-blue-900/40 to-blue-800/40 border-blue-700/50 hover:border-blue-600'
                : 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:border-blue-400'
            }`}
          >
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${
              darkMode ? 'bg-blue-800' : 'bg-blue-200'
            }`}>
              <Flag size={28} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            </div>
            <h3 className="text-xl font-bold mb-2">Part 1: Australia and Its People</h3>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Learn about Australian history, culture, symbols, and traditions
            </p>
            <div className={`flex items-center gap-2 text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              <span>9 Topics</span>
              <ChevronRight size={16} />
            </div>
          </motion.button>

          {/* Part 2 */}
          <motion.button
            onClick={() => setActiveTab('part2')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-6 rounded-xl text-left transition-all duration-200 border-2 ${
              darkMode
                ? 'bg-gradient-to-br from-purple-900/40 to-purple-800/40 border-purple-700/50 hover:border-purple-600'
                : 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:border-purple-400'
            }`}
          >
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${
              darkMode ? 'bg-purple-800' : 'bg-purple-200'
            }`}>
              <BookOpen size={28} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
            </div>
            <h3 className="text-xl font-bold mb-2">Part 2: Democratic Beliefs, Rights & Liberties</h3>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Understand Australian values, freedoms, and citizen responsibilities
            </p>
            <div className={`flex items-center gap-2 text-sm font-medium ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
              <span>4 Topics</span>
              <ChevronRight size={16} />
            </div>
          </motion.button>

          {/* Part 3 */}
          <motion.button
            onClick={() => setActiveTab('part3')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-6 rounded-xl text-left transition-all duration-200 border-2 ${
              darkMode
                ? 'bg-gradient-to-br from-green-900/40 to-green-800/40 border-green-700/50 hover:border-green-600'
                : 'bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:border-green-400'
            }`}
          >
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${
              darkMode ? 'bg-green-800' : 'bg-green-200'
            }`}>
              <Landmark size={28} className={darkMode ? 'text-green-400' : 'text-green-600'} />
            </div>
            <h3 className="text-xl font-bold mb-2">Part 3: Government and the Law</h3>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Explore how Australian government works and the legal system
            </p>
            <div className={`flex items-center gap-2 text-sm font-medium ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
              <span>8 Topics</span>
              <ChevronRight size={16} />
            </div>
          </motion.button>

          {/* Part 4 */}
          <motion.button
            onClick={() => setActiveTab('part4')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-6 rounded-xl text-left transition-all duration-200 border-2 ${
              darkMode
                ? 'bg-gradient-to-br from-red-900/40 to-pink-900/40 border-red-700/50 hover:border-red-600'
                : 'bg-gradient-to-br from-red-50 to-pink-100 border-red-200 hover:border-red-400'
            }`}
          >
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${
              darkMode ? 'bg-red-800' : 'bg-red-200'
            }`}>
              <Heart size={28} className={darkMode ? 'text-red-400' : 'text-red-600'} />
            </div>
            <h3 className="text-xl font-bold mb-2">Part 4: Australian Values</h3>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Australian values and community life
            </p>
            <div className={`flex items-center gap-2 text-sm font-medium ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
              <span>2 Topics</span>
              <ChevronRight size={16} />
            </div>
          </motion.button>
        </div>
      </div>

      {/* How It Works Section */}
      <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-8 mb-8`}>
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} mb-4`}>
              <BookMarked size={32} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            </div>
            <h3 className="text-xl font-bold mb-3">1. Study the Material</h3>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Read through all 23 topics covering Australian history, values, and government
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${darkMode ? 'bg-green-900' : 'bg-green-100'} mb-4`}>
              <Award size={32} className={darkMode ? 'text-green-400' : 'text-green-600'} />
            </div>
            <h3 className="text-xl font-bold mb-3">2. Practice & Earn XP</h3>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Take practice quizzes, earn XP, unlock achievements, and level up your knowledge
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${darkMode ? 'bg-yellow-900' : 'bg-yellow-100'} mb-4`}>
              <TrendingUp size={32} className={darkMode ? 'text-yellow-400' : 'text-yellow-600'} />
            </div>
            <h3 className="text-xl font-bold mb-3">3. Pass with Confidence</h3>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Take full mock tests to simulate the real exam and track your progress to success
            </p>
          </motion.div>
        </div>
      </div>

      {/* Your Progress Section (if user has started) */}
      {userProfile.stats.quizzesTaken > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-xl ${darkMode ? 'bg-gradient-to-br from-purple-900 to-indigo-900' : 'bg-gradient-to-br from-purple-100 to-indigo-100'} p-8 mb-8`}
        >
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Your Progress
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-white/10' : 'bg-white'} backdrop-blur-sm`}>
              <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-purple-900'}`}>
                {userProfile.stats.quizzesTaken}
              </div>
              <div className={`text-sm ${darkMode ? 'text-purple-200' : 'text-gray-600'}`}>Quizzes Taken</div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-white/10' : 'bg-white'} backdrop-blur-sm`}>
              <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-purple-900'}`}>
                {userProfile.totalQuestions > 0
                  ? Math.round((userProfile.totalCorrectAnswers / userProfile.totalQuestions) * 100)
                  : 0}%
              </div>
              <div className={`text-sm ${darkMode ? 'text-purple-200' : 'text-gray-600'}`}>Accuracy</div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-white/10' : 'bg-white'} backdrop-blur-sm`}>
              <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-purple-900'}`}>
                {userProfile.streak}
              </div>
              <div className={`text-sm ${darkMode ? 'text-purple-200' : 'text-gray-600'}`}>Day Streak</div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-white/10' : 'bg-white'} backdrop-blur-sm`}>
              <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-purple-900'}`}>
                {userProfile.achievements.length}
              </div>
              <div className={`text-sm ${darkMode ? 'text-purple-200' : 'text-gray-600'}`}>Achievements</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Test Requirements */}
      <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6 mb-8 border-l-4 border-yellow-500`}>
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <Info size={24} className="text-yellow-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">About the Australian Citizenship Test</h3>
            <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>The citizenship test is a computer-based multiple-choice test in English. You need to:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Answer 20 questions in 45 minutes</li>
                <li>Score at least 75% (15 out of 20 correct answers)</li>
                <li>Answer all 5 questions about Australian values correctly</li>
              </ul>
              <p className="mt-4">
                We recommend reading <strong>Australian Citizenship: Our Common Bond</strong> before practicing.
              </p>
            </div>
            <a
              href="https://immi.homeaffairs.gov.au/citizenship/test-and-interview/our-common-bond"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center mt-4 px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-50 hover:bg-blue-100'} ${darkMode ? 'text-blue-300' : 'text-blue-700'} transition duration-200`}
            >
              <Download size={16} className="mr-2" />
              Download Our Common Bond
            </a>
          </div>
        </div>
      </div>

      {/* Essential Resources Section */}
      <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6 mb-8`}>
        <h2 className="text-2xl font-bold mb-6">Essential Resources</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className={`p-6 rounded-xl border ${darkMode ? 'border-gray-700 bg-gray-750 hover:bg-gray-700' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'} transition duration-200 shadow-sm hover:shadow-md`}
          >
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} mr-4`}>
                <BookMarked size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
              </div>
              <h3 className="text-lg font-semibold">Official Guide</h3>
            </div>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Read "Australian Citizenship: Our Common Bond" - the official resource for the test.
            </p>
            <a
              href="https://immi.homeaffairs.gov.au/citizenship/test-and-interview/our-common-bond"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
            >
              Download PDF <ExternalLink size={16} className="ml-1" />
            </a>
          </div>

          <div
            className={`p-6 rounded-xl border ${darkMode ? 'border-gray-700 bg-gray-750 hover:bg-gray-700' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'} transition duration-200 shadow-sm hover:shadow-md`}
          >
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} mr-4`}>
                <Headphones size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
              </div>
              <h3 className="text-lg font-semibold">Listen to Podcast</h3>
            </div>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Listen to the Common Bond podcast for audio-based learning on the go.
            </p>
            <a
              href="https://immi.homeaffairs.gov.au/citizenship/test-and-interview/listen-to-podcast"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
            >
              Listen Now <ExternalLink size={16} className="ml-1" />
            </a>
          </div>

          <div
            className={`p-6 rounded-xl border ${darkMode ? 'border-gray-700 bg-gray-750 hover:bg-gray-700' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'} transition duration-200 shadow-sm hover:shadow-md`}
          >
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} mr-4`}>
                <MapPin size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
              </div>
              <h3 className="text-lg font-semibold">Find Test Centers</h3>
            </div>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Find citizenship test centers and schedule your official test.
            </p>
            <a
              href="https://immi.homeaffairs.gov.au/citizenship/test-and-interview"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
            >
              Find Test Center <ExternalLink size={16} className="ml-1" />
            </a>
          </div>

          <div
            className={`p-6 rounded-xl border ${darkMode ? 'border-gray-700 bg-gray-750 hover:bg-gray-700' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'} transition duration-200 shadow-sm hover:shadow-md`}
          >
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} mr-4`}>
                <Bookmark size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
              </div>
              <h3 className="text-lg font-semibold">Practice Materials</h3>
            </div>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Access additional practice materials and quizzes to reinforce your knowledge.
            </p>
            <button
              onClick={() => setActiveTab('practice')}
              className={`flex items-center font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
            >
              Start Practicing <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
