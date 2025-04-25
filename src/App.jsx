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
  Laptop
} from 'lucide-react';
import { SECTIONS } from './data/sections';
import { QUIZ_QUESTIONS } from './data/quiz-questions';
import SubsectionContent from './components/SubsectionContent';
import Quiz from './components/Quiz';
import MockTest from './components/MockTest';

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
        {activeTab === 'home' && (
          <div>
            {/* Hero Section */}
            <div className={`rounded-xl ${darkMode ? 'bg-gradient-to-br from-blue-800 to-blue-900' : 'bg-gradient-to-br from-blue-500 to-blue-700'} mb-8 overflow-hidden shadow-lg`}>
              <div className="container mx-auto px-6 py-12 md:py-16">
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                    Welcome to the Australian citizenship <span className="text-yellow-300">test practice</span>
                  </h1>
                  <p className="text-lg mb-8 text-blue-100">
                    Our comprehensive resources are designed to help you prepare efficiently
                    and confidently for your Australian citizenship test.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      className="px-6 py-3 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white font-medium transition duration-200 shadow-md"
                      onClick={() => setActiveTab('practice')}
                    >
                      Start Practicing
                    </button>
                    <button 
                      className="px-6 py-3 rounded-md bg-blue-800 hover:bg-blue-700 text-blue-100 font-medium transition duration-200 shadow-md"
                      onClick={() => setActiveTab('mocktest')}
                    >
                      Take Mock Test
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Statistics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md flex flex-col items-center transition-all duration-200 hover:shadow-lg`}>
                <div className={`p-4 rounded-full ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mb-4`}>
                  <FileText size={28} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <h3 className="text-4xl font-bold mb-2">800+</h3>
                <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Practice Questions</p>
              </div>
              
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md flex flex-col items-center transition-all duration-200 hover:shadow-lg`}>
                <div className={`p-4 rounded-full ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mb-4`}>
                  <Award size={28} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <h3 className="text-4xl font-bold mb-2">50+</h3>
                <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Mock Tests</p>
              </div>
              
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md flex flex-col items-center transition-all duration-200 hover:shadow-lg`}>
                <div className={`p-4 rounded-full ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mb-4`}>
                  <Check size={28} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <h3 className="text-4xl font-bold mb-2">100%</h3>
                <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Test Coverage</p>
              </div>
              
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md flex flex-col items-center transition-all duration-200 hover:shadow-lg`}>
                <div className={`p-4 rounded-full ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mb-4`}>
                  <Flag size={28} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <h3 className="text-4xl font-bold mb-2">100%</h3>
                <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Official Content</p>
              </div>
            </div>
            
            {/* Pass the Test Section */}
            <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6 mb-8 border-l-4 border-yellow-500`}>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Info size={24} className="text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pass the Australian citizenship test</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Before taking the practice test below, it is advised that you read the booklet <strong>Australian Citizenship: Our Common Bond</strong> at least once. This will help you comprehend every question and get the best result possible on each test.
                  </p>
                  <a 
                    href="https://immi.homeaffairs.gov.au/citizenship/test-and-interview/our-common-bond"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-50 hover:bg-blue-100'} ${darkMode ? 'text-blue-300' : 'text-blue-700'} transition duration-200`}
                  >
                    <Download size={16} className="mr-2" />
                    Download Common Bond
                  </a>
                </div>
              </div>
            </div>
            
            {/* Essential Resources Section */}
           {/* Essential Resources Section */}
<div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6 mb-8`}>
  <h2 className="text-2xl font-bold mb-6">Essential Resources</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className={`p-6 rounded-xl border ${darkMode ? 'border-gray-700 bg-gray-750 hover:bg-gray-700' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'} transition duration-200 shadow-sm hover:shadow-md`}>
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
    
    <div className={`p-6 rounded-xl border ${darkMode ? 'border-gray-700 bg-gray-750 hover:bg-gray-700' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'} transition duration-200 shadow-sm hover:shadow-md`}>
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
    
    <div className={`p-6 rounded-xl border ${darkMode ? 'border-gray-700 bg-gray-750 hover:bg-gray-700' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'} transition duration-200 shadow-sm hover:shadow-md`}>
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
    
    <div className={`p-6 rounded-xl border ${darkMode ? 'border-gray-700 bg-gray-750 hover:bg-gray-700' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'} transition duration-200 shadow-sm hover:shadow-md`}>
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} mr-4`}>
          <Bookmark size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
        </div>
        <h3 className="text-lg font-semibold">Practice Materials</h3>
      </div>
      <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        Access additional practice materials and flashcards to reinforce your knowledge.
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
            
            {/* Study Topics and Progress */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
                <h2 className="text-2xl font-bold mb-4">Study Topics</h2>
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Explore all topics from the Australian citizenship test syllabus.
                </p>
                
                <div className="space-y-4">
                  {sections.map(section => (
                    <div 
                      key={section.id}
                      className={`rounded-lg border p-4 cursor-pointer ${darkMode ? 'border-gray-700 hover:bg-gray-750' : 'border-gray-200 hover:bg-gray-50'} transition-all duration-200`}
                      onClick={() => setActiveTab(section.id)}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className={`mr-3 w-8 h-8 rounded-full flex items-center justify-center ${
                            getSectionProgress(section) === 100 
                              ? (darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600')
                              : (darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600')
                          }`}>
                            {getSectionProgress(section) === 100 ? (
                              <CheckCircle size={16} />
                            ) : (
                              <BookOpen size={16} />
                            )}
                          </div>
                          <h3 className="font-medium">{section.title}</h3>
                        </div>
                        <ChevronRight size={18} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                      </div>
                      <div className="mt-2 pl-11">
                        <div className="flex items-center justify-between text-sm">
                          <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                            {section.subsections.filter(s => s.completed).length} of {section.subsections.length} completed
                          </span>
                          <span className={`font-medium ${
                            getSectionProgress(section) === 100 
                              ? (darkMode ? 'text-green-400' : 'text-green-600')
                              : (darkMode ? 'text-blue-400' : 'text-blue-600')
                          }`}>
                            {getSectionProgress(section)}%
                          </span>
                        </div>
                        <div className={`mt-1 h-2 w-full rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <div
                            className={`h-2 rounded-full ${
                              getSectionProgress(section) === 100 
                                ? (darkMode ? 'bg-green-500' : 'bg-green-600')
                                : (darkMode ? 'bg-blue-500' : 'bg-blue-600')
                            }`}
                            style={{ width: `${getSectionProgress(section)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
                <h2 className="text-2xl font-bold mb-4">Test Preparation</h2>
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Our tools to help you practice for the citizenship test.
                </p>
                
                <div className="space-y-4">
                  <div className={`rounded-lg border p-5 ${darkMode ? 'border-gray-700 bg-gray-750 hover:bg-gray-700' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'} transition-all duration-200 shadow-sm hover:shadow`}>
                    <div className="flex items-center mb-3">
                      <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900/50' : 'bg-blue-100'} mr-4`}>
                        <Award size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                      </div>
                      <h3 className="text-lg font-medium">Practice Questions</h3>
                    </div>
                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Practice with our question bank to test your knowledge on specific topics. You need to score at least 75% to pass the actual test.
                    </p>
                    <button 
                      onClick={() => setActiveTab('practice')}
                      className={`w-full py-2.5 text-center rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium transition-all duration-200 shadow-sm hover:shadow`}
                    >
                      Start Practicing
                    </button>
                  </div>
                  
                  <div className={`rounded-lg border p-5 ${darkMode ? 'border-gray-700 bg-gray-750 hover:bg-gray-700' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'} transition-all duration-200 shadow-sm hover:shadow`}>
                    <div className="flex items-center mb-3">
                      <div className={`p-3 rounded-full ${darkMode ? 'bg-yellow-900/30' : 'bg-yellow-100'} mr-4`}>
                        <Clock size={20} className={darkMode ? 'text-yellow-400' : 'text-yellow-600'} />
                      </div>
                      <h3 className="text-lg font-medium">Timed Mock Tests</h3>
                    </div>
                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Take a full mock test with timer to simulate the actual test environment. Prepare yourself for the real experience.
                    </p>
                    <button 
                      onClick={() => setActiveTab('mocktest')}
                      className={`w-full py-2.5 text-center rounded-md ${darkMode ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-yellow-500 hover:bg-yellow-600'} text-white font-medium transition-all duration-200 shadow-sm hover:shadow`}
                    >
                      Take Mock Test
                    </button>
                  </div>
                  
                  <div className={`rounded-lg border p-5 ${darkMode ? 'border-gray-700 bg-gray-750 hover:bg-gray-700' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'} transition-all duration-200 shadow-sm hover:shadow`}>
                    <div className="flex items-center mb-3">
                      <div className={`p-3 rounded-full ${darkMode ? 'bg-green-900/30' : 'bg-green-100'} mr-4`}>
                        <Laptop size={20} className={darkMode ? 'text-green-400' : 'text-green-600'} />
                      </div>
                      <h3 className="text-lg font-medium">Study Progress</h3>
                    </div>
                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Track your progress across all topics. Your progress is automatically saved so you can continue where you left off.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Overall Completion</span>
                      <span className="font-medium">{calculateProgress()}%</span>
                    </div>
                    <div className={`mt-2 h-2.5 w-full rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div
                        className={`h-2.5 rounded-full ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}
                        style={{ width: `${calculateProgress()}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact & Help Section */}
            <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
              <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                If you have questions about the citizenship process or need additional help, contact us or visit the official resources.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4">
                <a 
                  href="mailto:support@citizentest.au"
                  className={`flex items-center px-5 py-3 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition duration-200`}
                >
                  <Mail size={18} className="mr-2" />
                  <span>Contact Support</span>
                </a>
                
                <a 
                  href="https://immi.homeaffairs.gov.au/citizenship/become-a-citizen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-5 py-3 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition duration-200`}
                >
                  <ExternalLink size={18} className="mr-2" />
                  <span>Official Citizenship Website</span>
                </a>
              </div>
            </div>
          </div>
        )}
        
        {sections.map(section => (
          activeTab === section.id && (
            <div key={section.id} className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
              {activeSubsection ? (
                // Show subsection content
                <div>
                  <button 
                    className={`flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} mb-6 hover:underline`}
                    onClick={() => setActiveSubsection(null)}
                  >
                    <ArrowLeft size={16} className="mr-1" />
                    <span>Back to {section.title}</span>
                  </button>
                  
                  <h2 className="text-2xl font-bold mb-4">
                    {section.subsections.find(s => s.id === activeSubsection)?.title}
                  </h2>
                  
                  <div className="flex items-center mb-6">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'} mr-3`}>
                      {section.title}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      section.subsections.find(s => s.id === activeSubsection)?.completed
                        ? (darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700')
                        : (darkMode ? 'bg-yellow-900/30 text-yellow-300' : 'bg-yellow-100 text-yellow-700')
                    }`}>
                      {section.subsections.find(s => s.id === activeSubsection)?.completed ? 'Completed' : 'In Progress'}
                    </div>
                  </div>
                  
                  <SubsectionContent 
                    sectionId={section.id} 
                    subsectionId={activeSubsection} 
                  />
                  
                  <div className="mt-8 pt-4 border-t flex justify-between items-center">
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {section.title}
                    </span>
                    <div className="flex gap-3">
                      <button
                        className={`px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition duration-200`}
                        onClick={() => {
                          // Find index of current subsection
                          const subsections = section.subsections;
                          const currentIndex = subsections.findIndex(s => s.id === activeSubsection);
                          
                          // If this is the last subsection, go back to section overview
                          if (currentIndex === subsections.length - 1) {
                            setActiveSubsection(null);
                          } else {
                            // Otherwise, go to next subsection
                            setActiveSubsection(subsections[currentIndex + 1].id);
                          }
                        }}
                      >
                        Next Section
                      </button>
                      <button 
                        className={`px-4 py-2 rounded-md ${
                          section.subsections.find(s => s.id === activeSubsection)?.completed
                            ? `${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} ${darkMode ? 'text-gray-200' : 'text-gray-800'}`
                            : `${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`
                        } transition duration-200`}
                        onClick={() => {
                          const isCompleted = section.subsections.find(s => s.id === activeSubsection)?.completed;
                          updateProgress(section.id, activeSubsection, !isCompleted);
                        }}
                      >
                        {section.subsections.find(s => s.id === activeSubsection)?.completed
                          ? 'Mark as Incomplete'
                          : 'Mark as Complete'
                        }
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Show section overview
                <>
                  <div className="flex items-center mb-6">
                    <button 
                      className={`mr-3 p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition-colors duration-150`}
                      onClick={() => setActiveTab('home')}
                      aria-label="Back to home"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <div>
                      <h2 className="text-2xl font-bold">{section.title}</h2>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {section.description || `Study materials for ${section.title} topic`}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-6 bg-opacity-10 p-3 rounded-lg">
                    <div className="flex items-center flex-grow">
                      <div className={`h-2.5 flex-grow rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div 
                          className={`h-2.5 rounded-full ${getSectionProgress(section) === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
                          style={{ width: `${getSectionProgress(section)}%` }}
                        ></div>
                      </div>
                      <span className={`ml-3 font-medium ${getSectionProgress(section) === 100 ? (darkMode ? 'text-green-400' : 'text-green-600') : (darkMode ? 'text-blue-400' : 'text-blue-600')}`}>
                        {getSectionProgress(section)}%
                      </span>
                    </div>
                    {getSectionProgress(section) === 100 && (
                      <div className={`ml-4 flex items-center px-3 py-1 rounded-full ${darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700'}`}>
                        <CheckCircle size={16} className="mr-1" />
                        <span className="text-xs font-medium">Completed</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    {section.subsections.map((subsection, index) => (
                      <div 
                        key={subsection.id}
                        className={`flex items-center justify-between p-4 border rounded-lg ${darkMode ? 'border-gray-700 hover:bg-gray-750' : 'border-gray-200 hover:bg-gray-50'} transition-colors duration-150`}
                      >
                        <div className="flex items-center gap-3">
                          <button 
                            className="cursor-pointer"
                            onClick={() => updateProgress(section.id, subsection.id, !subsection.completed)}
                            aria-label={subsection.completed ? "Mark as incomplete" : "Mark as complete"}
                          >
                            {subsection.completed ? (
                              <CheckCircle className={darkMode ? 'text-green-400' : 'text-green-600'} size={20} />
                            ) : (
                              <div className={`w-5 h-5 rounded-full border-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}></div>
                            )}
                          </button>
                          <div>
                            <span>{subsection.title}</span>
                            <div className="flex items-center mt-1">
                              <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                Lesson {index + 1}
                              </span>
                              {subsection.completed && (
                                <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>
                                  Completed
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <button 
                          className={`px-4 py-2 text-sm rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition duration-150 shadow-sm hover:shadow`}
                          onClick={() => setActiveSubsection(subsection.id)}
                        >
                          Study
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )
        ))}
        
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