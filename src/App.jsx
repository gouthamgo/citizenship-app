import React, { useState, useEffect } from 'react';
import {
  Home,
  BookOpen,
  Award,
  CheckCircle,
  ArrowLeft,
  FileText,
  MapPin,
  Headphones,
  BookMarked,
  Clock,
  ExternalLink,
  Mail,
  ChevronRight,
  Flag,
  Check,
  Menu,
  X,
  Search,
  Download,
  Bookmark,
  Info,
  Laptop,
  Trophy,
  Calendar,
  Layers,
  Star,
  Target,
  Eye,
  Lightbulb
} from 'lucide-react';
import { SECTIONS } from './data/sections';
import { QUIZ_QUESTIONS } from './data/quiz-questions';
import { EXPANDED_QUESTIONS } from './data/expanded-questions';
import { GOVERNMENT_QUESTIONS } from './data/government-questions';
import { VALUES_QUESTIONS } from './data/values-questions';
import { ADDITIONAL_QUESTIONS } from './data/additional-questions';
import SubsectionContent from './components/SubsectionContent';
import Quiz from './components/Quiz';
import MockTest from './components/MockTest';
import AchievementToast from './components/AchievementToast';
import UserStatsBar from './components/UserStatsBar';
import LandingPage from './components/LandingPage';
import Achievements from './components/Achievements';
import DailyChallenge from './components/DailyChallenge';
import OnboardingModal from './components/OnboardingModal';
import AboutPage from './components/AboutPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import Logo, { LogoSimple } from './components/Logo';
import ProgressDashboard from './components/ProgressDashboard';
import Flashcards from './components/Flashcards';
import ValuesQuiz from './components/ValuesQuiz';
import StarredQuestions from './components/StarredQuestions';
import QuestionOfTheDay from './components/QuestionOfTheDay';
import TestDatePlanner from './components/TestDatePlanner';
import CrammingMode from './components/CrammingMode';
import Leaderboard from './components/Leaderboard';
import TimedTest from './components/TimedTest';
import { useGame } from './contexts/GameContext';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [sections, setSections] = useState(SECTIONS);
  const [activeSubsection, setActiveSubsection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showProgressDashboard, setShowProgressDashboard] = useState(false);

  // Load progress from localStorage on initial load
  useEffect(() => {
    const savedProgress = localStorage.getItem('citizenship-progress');
    if (savedProgress) {
      setSections(JSON.parse(savedProgress));
    }

    // Check for user preference on dark mode
    const savedDarkMode = localStorage.getItem('citizenship-dark-mode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }

    // Check if first time visit - show onboarding
    const hasSeenOnboarding = localStorage.getItem('citizenship-onboarding-complete');
    if (!hasSeenOnboarding) {
      setShowOnboarding(true);
    }
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem('citizenship-onboarding-complete', 'true');
    setShowOnboarding(false);
  };
  
  // Function to update progress
  const updateProgress = (sectionId, subsectionId, completed) => {
    const updatedSections = sections.map(section => {
      if (section.id === sectionId) {
        const updatedSubsections = section.subsections.map(subsection => {
          if (subsection.id === subsectionId) {
            return { ...subsection, completed };
          }
          return subsection;
        });
        return { ...section, subsections: updatedSubsections };
      }
      return section;
    });
    
    setSections(updatedSections);
    localStorage.setItem('citizenship-progress', JSON.stringify(updatedSections));
  };
  
  // Calculate overall progress
  const calculateProgress = () => {
    let totalSubsections = 0;
    let completedSubsections = 0;
    
    sections.forEach(section => {
      totalSubsections += section.subsections.length;
      completedSubsections += section.subsections.filter(s => s.completed).length;
    });
    
    return totalSubsections > 0 
      ? Math.round((completedSubsections / totalSubsections) * 100) 
      : 0;
  };
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('citizenship-dark-mode', JSON.stringify(newMode));
  };

  // Calculate section progress
  const getSectionProgress = (section) => {
    const total = section.subsections.length;
    const completed = section.subsections.filter(s => s.completed).length;
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  // Find the current section and subsection
  const currentSection = sections.find(s => s.id === activeTab);
  const currentSubsection = activeSubsection 
    ? currentSection?.subsections.find(s => s.id === activeSubsection) 
    : null;
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Onboarding Modal */}
      {showOnboarding && <OnboardingModal darkMode={darkMode} onClose={handleOnboardingComplete} />}

      {/* Progress Dashboard */}
      {showProgressDashboard && (
        <ProgressDashboard
          darkMode={darkMode}
          onClose={() => setShowProgressDashboard(false)}
        />
      )}

      {/* Achievement Toast Notifications */}
      <AchievementToast />

      {/* Header */}
      <header className={`${darkMode ? 'bg-blue-900' : 'bg-blue-600'} py-4 px-6 transition-colors duration-200 sticky top-0 z-50`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => {
            setActiveTab('home');
            setActiveSubsection(null);
          }}>
            <div className="mr-3">
              <LogoSimple size={40} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">CitizenTest<span className="text-yellow-300 font-normal">.au</span></h1>
              <p className="text-xs text-blue-200 hidden sm:block">Australian Citizenship Test Preparation</p>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-full bg-opacity-20 bg-white hover:bg-opacity-30 transition duration-200 text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm text-white">{calculateProgress()}% Complete</span>
                <div className="w-24 bg-blue-800 rounded-full h-2.5">
                  <div 
                    className="bg-yellow-300 h-2.5 rounded-full" 
                    style={{ width: `${calculateProgress()}%` }}
                  ></div>
                </div>
              </div>
              <div className="h-6 mx-4 border-r border-blue-400"></div>
              <div className="flex items-center gap-4">
                <button 
                  className={`px-4 py-2 rounded-md ${darkMode ? 'bg-blue-800 hover:bg-blue-700' : 'bg-blue-700 hover:bg-blue-800'} text-white text-sm font-medium transition duration-200`}
                  onClick={() => setActiveTab('practice')}
                >
                  Practice Test
                </button>
                <button 
                  className={`px-4 py-2 rounded-md ${darkMode ? 'bg-yellow-600 hover:bg-yellow-500' : 'bg-yellow-500 hover:bg-yellow-600'} text-white text-sm font-medium transition duration-200`}
                  onClick={() => setActiveTab('mocktest')}
                >
                  Mock Test
                </button>
                <button 
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-opacity-20 bg-white hover:bg-opacity-30 transition duration-200"
                  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {darkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden fixed inset-0 z-40 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="flex flex-col p-6 pt-20">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <span className="text-sm mr-2">{calculateProgress()}% Complete</span>
                <div className="w-24 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div 
                    className={`${darkMode ? 'bg-blue-500' : 'bg-blue-600'} h-2.5 rounded-full`}
                    style={{ width: `${calculateProgress()}%` }}
                  ></div>
                </div>
              </div>
              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                )}
              </button>
            </div>
            
            <div className="flex flex-col gap-2">
              <button 
                className={`p-3 rounded-md flex items-center ${
                  activeTab === 'home' 
                    ? `${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-700'}`
                    : `${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
                onClick={() => {
                  setActiveTab('home');
                  setActiveSubsection(null);
                  setMobileMenuOpen(false);
                }}
              >
                <Home size={18} className="mr-3" />
                <span>Home</span>
              </button>
              
              {sections.map(section => (
                <button 
                  key={section.id}
                  className={`p-3 rounded-md flex items-center ${
                    activeTab === section.id 
                      ? `${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-700'}`
                      : `${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`
                  }`}
                  onClick={() => {
                    setActiveTab(section.id);
                    setActiveSubsection(null);
                    setMobileMenuOpen(false);
                  }}
                >
                  <BookOpen size={18} className="mr-3" />
                  <span>{section.title}</span>
                </button>
              ))}
              
              <button 
                className={`p-3 rounded-md flex items-center ${
                  activeTab === 'practice' 
                    ? `${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-700'}`
                    : `${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
                onClick={() => {
                  setActiveTab('practice');
                  setActiveSubsection(null);
                  setMobileMenuOpen(false);
                }}
              >
                <Award size={18} className="mr-3" />
                <span>Practice Test</span>
              </button>
              
              <button
                className={`p-3 rounded-md flex items-center ${
                  activeTab === 'mocktest'
                    ? `${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-700'}`
                    : `${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
                onClick={() => {
                  setActiveTab('mocktest');
                  setActiveSubsection(null);
                  setMobileMenuOpen(false);
                }}
              >
                <FileText size={18} className="mr-3" />
                <span>Mock Test</span>
              </button>

              <button
                className={`p-3 rounded-md flex items-center ${
                  activeTab === 'achievements'
                    ? `${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-700'}`
                    : `${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
                onClick={() => {
                  setActiveTab('achievements');
                  setActiveSubsection(null);
                  setMobileMenuOpen(false);
                }}
              >
                <Trophy size={18} className="mr-3" />
                <span>Achievements</span>
              </button>

              <button
                className={`p-3 rounded-md flex items-center ${
                  activeTab === 'daily-challenge'
                    ? `${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-700'}`
                    : `${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
                onClick={() => {
                  setActiveTab('daily-challenge');
                  setActiveSubsection(null);
                  setMobileMenuOpen(false);
                }}
              >
                <Calendar size={18} className="mr-3" />
                <span>Daily Challenge</span>
              </button>

              <button
                className={`p-3 rounded-md flex items-center ${
                  activeTab === 'flashcards'
                    ? `${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-700'}`
                    : `${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
                onClick={() => {
                  setActiveTab('flashcards');
                  setActiveSubsection(null);
                  setMobileMenuOpen(false);
                }}
              >
                <Layers size={18} className="mr-3" />
                <span>Flashcards</span>
              </button>

              <button
                className={`p-3 rounded-md flex items-center ${
                  activeTab === 'starred-questions'
                    ? `${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-700'}`
                    : `${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
                onClick={() => {
                  setActiveTab('starred-questions');
                  setActiveSubsection(null);
                  setMobileMenuOpen(false);
                }}
              >
                <Star size={18} className="mr-3" />
                <span>Starred Questions</span>
              </button>

              <button
                className={`p-3 rounded-md flex items-center ${
                  activeTab === 'question-of-day'
                    ? `${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-700'}`
                    : `${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
                onClick={() => {
                  setActiveTab('question-of-day');
                  setActiveSubsection(null);
                  setMobileMenuOpen(false);
                }}
              >
                <Lightbulb size={18} className="mr-3" />
                <span>Question of the Day</span>
              </button>

              <button
                className={`p-3 rounded-md flex items-center ${
                  activeTab === 'test-planner'
                    ? `${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-700'}`
                    : `${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
                onClick={() => {
                  setActiveTab('test-planner');
                  setActiveSubsection(null);
                  setMobileMenuOpen(false);
                }}
              >
                <Target size={18} className="mr-3" />
                <span>Test Date Planner</span>
              </button>

              <button
                className={`p-3 rounded-md flex items-center ${
                  activeTab === 'cramming'
                    ? `${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-700'}`
                    : `${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
                onClick={() => {
                  setActiveTab('cramming');
                  setActiveSubsection(null);
                  setMobileMenuOpen(false);
                }}
              >
                <Eye size={18} className="mr-3" />
                <span>Cramming Mode</span>
              </button>

              <button
                className={`p-3 rounded-md flex items-center ${
                  activeTab === 'leaderboard'
                    ? `${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-700'}`
                    : `${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
                onClick={() => {
                  setActiveTab('leaderboard');
                  setActiveSubsection(null);
                  setMobileMenuOpen(false);
                }}
              >
                <Trophy size={18} className="mr-3" />
                <span>Leaderboard</span>
              </button>

              <button
                className={`p-3 rounded-md flex items-center ${
                  activeTab === 'timed-test'
                    ? `${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-700'}`
                    : `${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
                onClick={() => {
                  setActiveTab('timed-test');
                  setActiveSubsection(null);
                  setMobileMenuOpen(false);
                }}
              >
                <Clock size={18} className="mr-3" />
                <span>Timed Test (45 min)</span>
              </button>

              <div className="mt-6 grid grid-cols-1 gap-3">
                <button 
                  className={`py-3 rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white text-center font-medium transition duration-200`}
                  onClick={() => {
                    setActiveTab('practice');
                    setMobileMenuOpen(false);
                  }}
                >
                  Start Practicing
                </button>
                <button 
                  className={`py-3 rounded-md ${darkMode ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-yellow-500 hover:bg-yellow-600'} text-white text-center font-medium transition duration-200`}
                  onClick={() => {
                    setActiveTab('mocktest');
                    setMobileMenuOpen(false);
                  }}
                >
                  Take Mock Test
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* We removed the desktop navigation bar as requested */}
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6 md:px-6">
        {/* User Stats Bar */}
        <div className="mb-6">
          <UserStatsBar
            darkMode={darkMode}
            onViewProgress={() => setShowProgressDashboard(true)}
          />
        </div>

        {activeTab === 'home' && (
          <LandingPage darkMode={darkMode} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'practice' && (
          <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
            <h2 className="text-2xl font-bold mb-4">Practice Quiz</h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Test your knowledge of Australian citizenship with this practice quiz.
              You need to score at least 75% to pass the actual test. Now with 190+ comprehensive questions!
            </p>

            <Quiz questions={[...EXPANDED_QUESTIONS, ...VALUES_QUESTIONS, ...GOVERNMENT_QUESTIONS, ...ADDITIONAL_QUESTIONS]} darkMode={darkMode} />
          </div>
        )}
        
        {activeTab === 'mocktest' && (
          <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
            <h2 className="text-2xl font-bold mb-4">Australian Citizenship Mock Test</h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              This realistic simulator provides a seamless experience to help you prepare for the official Australian citizenship test.
            </p>
            
            <MockTest darkMode={darkMode} />
          </div>
        )}

        {activeTab === 'achievements' && (
          <Achievements darkMode={darkMode} />
        )}

        {activeTab === 'daily-challenge' && (
          <DailyChallenge darkMode={darkMode} />
        )}

        {activeTab === 'flashcards' && (
          <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
            <Flashcards darkMode={darkMode} />
          </div>
        )}

        {activeTab === 'values-quiz' && (
          <ValuesQuiz darkMode={darkMode} onBack={() => setActiveTab('home')} />
        )}

        {activeTab === 'starred-questions' && (
          <StarredQuestions darkMode={darkMode} onBack={() => setActiveTab('home')} />
        )}

        {activeTab === 'question-of-day' && (
          <QuestionOfTheDay darkMode={darkMode} />
        )}

        {activeTab === 'test-planner' && (
          <TestDatePlanner darkMode={darkMode} />
        )}

        {activeTab === 'cramming' && (
          <CrammingMode darkMode={darkMode} onBack={() => setActiveTab('home')} />
        )}

        {activeTab === 'leaderboard' && (
          <Leaderboard darkMode={darkMode} />
        )}

        {activeTab === 'timed-test' && (
          <TimedTest darkMode={darkMode} onBack={() => setActiveTab('home')} />
        )}

        {activeTab === 'about' && (
          <AboutPage darkMode={darkMode} />
        )}

        {activeTab === 'privacy' && (
          <PrivacyPage darkMode={darkMode} />
        )}

        {activeTab === 'terms' && (
          <TermsPage darkMode={darkMode} />
        )}

        {/* Study Sections */}
        {currentSection && !['home', 'practice', 'mocktest', 'achievements', 'daily-challenge', 'flashcards', 'values-quiz', 'starred-questions', 'question-of-day', 'test-planner', 'cramming', 'leaderboard', 'timed-test', 'about', 'privacy', 'terms'].includes(activeTab) && (
          <div>
            {!activeSubsection ? (
              <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
                <div className="flex items-center mb-6">
                  <currentSection.icon className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={32} />
                  <div>
                    <h2 className="text-2xl font-bold">{currentSection.title}</h2>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>{currentSection.description}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Section Progress</span>
                    <span className={`text-sm font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{getSectionProgress(currentSection)}%</span>
                  </div>
                  <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
                    <div
                      className={`${darkMode ? 'bg-blue-500' : 'bg-blue-600'} h-2.5 rounded-full transition-all duration-300`}
                      style={{ width: `${getSectionProgress(currentSection)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentSection.subsections.map(subsection => (
                    <button
                      key={subsection.id}
                      onClick={() => setActiveSubsection(subsection.id)}
                      className={`p-4 rounded-lg text-left transition duration-200 ${
                        darkMode
                          ? 'bg-gray-700 hover:bg-gray-650 border border-gray-600'
                          : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{subsection.title}</h3>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{subsection.description}</p>
                        </div>
                        {subsection.completed && (
                          <CheckCircle className="text-green-500 ml-2 flex-shrink-0" size={20} />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
                <button
                  onClick={() => setActiveSubsection(null)}
                  className={`mb-4 flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition duration-200`}
                >
                  <ArrowLeft size={20} className="mr-2" />
                  Back to {currentSection.title}
                </button>

                <SubsectionContent
                  subsection={currentSubsection}
                  darkMode={darkMode}
                  onComplete={() => updateProgress(currentSection.id, currentSubsection.id, !currentSubsection.completed)}
                />
              </div>
            )}
          </div>
        )}
      </main>
      
      <footer className={`py-8 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} transition-colors duration-200`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <LogoSimple size={40} />
                </div>
                <h3 className="text-xl font-bold">CitizenTest<span className="text-blue-500 dark:text-blue-400">.au</span></h3>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                Your complete Australian citizenship test preparation resource. Study, practice, and pass with confidence.
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                © {new Date().getFullYear()} CitizenTest.au - Not affiliated with the Australian Government.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>
                  <button 
                    onClick={() => setActiveTab('home')}
                    className="hover:underline flex items-center"
                  >
                    <ChevronRight size={14} className="mr-1" />
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('practice')}
                    className="hover:underline flex items-center"
                  >
                    <ChevronRight size={14} className="mr-1" />
                    Practice Questions
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('mocktest')}
                    className="hover:underline flex items-center"
                  >
                    <ChevronRight size={14} className="mr-1" />
                    Mock Test
                  </button>
                </li>
                <li>
                  <a 
                    href="https://immi.homeaffairs.gov.au/citizenship/test-and-interview/our-common-bond"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center"
                  >
                    <ChevronRight size={14} className="mr-1" />
                    Official Guide
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>
                  <button
                    onClick={() => {
                      setActiveTab('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:underline flex items-center"
                  >
                    <ChevronRight size={14} className="mr-1" />
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActiveTab('privacy');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:underline flex items-center"
                  >
                    <ChevronRight size={14} className="mr-1" />
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActiveTab('terms');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:underline flex items-center"
                  >
                    <ChevronRight size={14} className="mr-1" />
                    Terms of Use
                  </button>
                </li>
                <li>
                  <a href="mailto:support@citizentest.au" className="hover:underline flex items-center">
                    <ChevronRight size={14} className="mr-1" />
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} text-center`}>
              CitizenTest.au is an independent test preparation platform and is not affiliated with, endorsed by, or connected to the Australian Government or the Department of Home Affairs.
              This site is meant for practice purposes only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;