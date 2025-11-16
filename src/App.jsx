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
  Trophy
} from 'lucide-react';
import { SECTIONS } from './data/sections';
import { QUIZ_QUESTIONS } from './data/quiz-questions';
import SubsectionContent from './components/SubsectionContent';
import Quiz from './components/Quiz';
import MockTest from './components/MockTest';
import AchievementToast from './components/AchievementToast';
import UserStatsBar from './components/UserStatsBar';
import LandingPage from './components/LandingPage';
import Achievements from './components/Achievements';
import { useGame } from './contexts/GameContext';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [sections, setSections] = useState(SECTIONS);
  const [activeSubsection, setActiveSubsection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
  }, []);
  
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
      {/* Achievement Toast Notifications */}
      <AchievementToast />

      {/* Header */}
      <header className={`${darkMode ? 'bg-blue-900' : 'bg-blue-600'} py-4 px-6 transition-colors duration-200 sticky top-0 z-50`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => {
            setActiveTab('home');
            setActiveSubsection(null);
          }}>
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg mr-3">
              <Flag size={18} className="text-blue-600" />
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
          <UserStatsBar darkMode={darkMode} />
        </div>

        {activeTab === 'home' && (
          <LandingPage darkMode={darkMode} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'practice' && (
          <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
            <h2 className="text-2xl font-bold mb-4">Practice Quiz</h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Test your knowledge of Australian citizenship with this practice quiz. 
              You need to score at least 75% to pass the actual test.
            </p>
            
            <Quiz questions={QUIZ_QUESTIONS} darkMode={darkMode} />
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
      </main>
      
      <footer className={`py-8 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} transition-colors duration-200`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg mr-3">
                  <Flag size={18} className="text-blue-600" />
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
                  <a href="#" className="hover:underline flex items-center">
                    <ChevronRight size={14} className="mr-1" />
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline flex items-center">
                    <ChevronRight size={14} className="mr-1" />
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline flex items-center">
                    <ChevronRight size={14} className="mr-1" />
                    Cookie Policy
                  </a>
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