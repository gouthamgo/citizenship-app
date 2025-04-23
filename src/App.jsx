import React, { useState, useEffect } from 'react';
import { Home, BookOpen, Award, CheckCircle, ArrowLeft, ChevronRight, FileText, Moon, Sun, BarChart } from 'lucide-react';
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
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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

  // Find the current section and subsection
  const currentSection = sections.find(s => s.id === activeTab);
  const currentSubsection = activeSubsection 
    ? currentSection?.subsections.find(s => s.id === activeSubsection) 
    : null;
  
  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-blue-900' : 'bg-blue-600'} py-4 px-6 transition-colors duration-200`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => {
            setActiveTab('home');
            setActiveSubsection(null);
          }}>
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg mr-3">
              <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
            </div>
            <h1 className="text-xl font-bold text-white">CitizenTest</h1>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setActiveTab('practice')}
              className="hidden md:block px-4 py-2 rounded-md bg-white text-blue-600 font-medium hover:bg-blue-50 transition duration-200"
            >
              Take Mock Test
            </button>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-opacity-20 bg-white hover:bg-opacity-30 transition duration-200"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 rounded-full bg-opacity-20 bg-white hover:bg-opacity-30 transition duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation Menu */}
      {showMobileMenu && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} py-4 px-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex flex-col space-y-4">
            <button 
              className={`text-left px-2 py-2 rounded-md flex items-center ${activeTab === 'home' ? (darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-50 text-blue-600') : ''}`}
              onClick={() => {
                setActiveTab('home');
                setActiveSubsection(null);
                setShowMobileMenu(false);
              }}
            >
              <Home size={18} className="mr-2" />
              <span>Home</span>
            </button>
            <button 
              className={`text-left px-2 py-2 rounded-md flex items-center ${activeTab === 'dashboard' ? (darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-50 text-blue-600') : ''}`}
              onClick={() => {
                setActiveTab('dashboard');
                setActiveSubsection(null);
                setShowMobileMenu(false);
              }}
            >
              <BarChart size={18} className="mr-2" />
              <span>My Progress</span>
            </button>
            <button 
              className={`text-left px-2 py-2 rounded-md flex items-center ${activeTab === 'practice' ? (darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-50 text-blue-600') : ''}`}
              onClick={() => {
                setActiveTab('practice');
                setActiveSubsection(null);
                setShowMobileMenu(false);
              }}
            >
              <Award size={18} className="mr-2" />
              <span>Practice Tests</span>
            </button>

            <button 
            className={`flex items-center gap-2 px-4 py-2 ${activeTab === 'mocktest' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            onClick={() => {
              setActiveTab('mocktest');
              setActiveSubsection(null);
            }}
          >
            <FileText size={18} />
            <span>Mock Test</span>
          </button>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <div>
            {/* Hero Banner */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} mb-6`}>
              <div className="container mx-auto px-6 py-12 md:py-24">
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Everything you need to <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>succeed</span>
                  </h1>
                  <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Our comprehensive resources are designed to help you prepare efficiently
                    and confidently for your Australian citizenship test.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      className={`px-6 py-3 rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium transition duration-200`}
                      onClick={() => setActiveTab('dashboard')}
                    >
                      Start Learning
                    </button>
                    <button 
                      className={`px-6 py-3 rounded-md ${darkMode ? 'bg-blue-800 hover:bg-blue-700' : 'bg-blue-100 hover:bg-blue-200'} ${darkMode ? 'text-blue-200' : 'text-blue-700'} font-medium transition duration-200`}
                      onClick={() => setActiveTab('mocktest')}
                    >
                      Take Mock Test
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature Sections */}
            <div className="container mx-auto px-6 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} mr-4`}>
                      <FileText size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                    </div>
                    <h3 className="text-xl font-semibold">Interactive Quizzes</h3>
                  </div>
                  <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Test your knowledge with multiple-choice, true/false, and
                    fill-in-the-blank questions extracted from the official guide.
                  </p>
                  <button 
                    className={`px-5 py-2 rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium transition duration-200`}
                    onClick={() => setActiveTab('practice')}
                  >
                    Get Started
                  </button>
                </div>
                
                <div className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} mr-4`}>
                      <Award size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                    </div>
                    <h3 className="text-xl font-semibold">Realistic Mock Exams</h3>
                  </div>
                  <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Experience the real test environment with timed mock exams
                    that simulate the official citizenship test.
                  </p>
                  <button 
                    className={`px-5 py-2 rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium transition duration-200`}
                    onClick={() => setActiveTab('practice')}
                  >
                    Get Started
                  </button>
                </div>
              </div>
              
              <div className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6 mb-10`}>
                <h2 className="text-2xl font-bold mb-6">Study Topics</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sections.map(section => (
                    <div 
                      key={section.id}
                      className={`rounded-lg border ${darkMode ? 'border-gray-700 hover:bg-gray-750' : 'border-gray-200 hover:bg-gray-50'} p-4 cursor-pointer transition-colors duration-200`}
                      onClick={() => setActiveTab(section.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{section.title}</h3>
                        <ChevronRight size={18} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                      </div>
                      
                      <div className="flex items-center text-sm mb-3">
                        <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                          {section.subsections.filter(s => s.completed).length} of {section.subsections.length} completed
                        </span>
                      </div>
                      
                      <div className={`h-1.5 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} w-full`}>
                        <div 
                          className={`h-1.5 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}
                          style={{ width: `${(section.subsections.filter(s => s.completed).length / section.subsections.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'dashboard' && (
          <div className="container mx-auto px-6 py-8">
            <div className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6 mb-6`}>
              <h2 className="text-2xl font-bold mb-4">Track Your Journey</h2>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                Monitor your progress and identify areas for improvement.
              </p>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Overall Progress</span>
                  <span className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{calculateProgress()}%</span>
                </div>
                <div className={`h-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} w-full`}>
                  <div 
                    className={`h-3 rounded-full bg-gradient-to-r ${darkMode ? 'from-blue-600 to-blue-400' : 'from-blue-500 to-blue-600'}`}
                    style={{ width: `${calculateProgress()}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-6">
                {sections.map(section => (
                  <div key={section.id} className="space-y-2">
                    <div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => setActiveTab(section.id)}
                    >
                      <h3 className="font-medium">{section.title}</h3>
                      <div className="flex items-center">
                        <span className={`text-sm mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {Math.round((section.subsections.filter(s => s.completed).length / section.subsections.length) * 100)}%
                        </span>
                        <ChevronRight size={16} />
                      </div>
                    </div>
                    <div className={`h-2.5 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} w-full`}>
                      <div 
                        className="h-2.5 rounded-full bg-blue-500" 
                        style={{ width: `${(section.subsections.filter(s => s.completed).length / section.subsections.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <button 
                  className={`w-full px-5 py-3 rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium transition duration-200`}
                  onClick={() => setActiveTab('practice')}
                >
                  Practice Test Now
                </button>
              </div>
            </div>
            
            <div className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
              <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                Track your learning activities and test results.
              </p>
              
              <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <p>No recent activity to display.</p>
                <p>Start learning to see your progress here!</p>
              </div>
            </div>
          </div>
        )}
        
        {sections.map(section => (
          activeTab === section.id && (
            <div key={section.id} className="container mx-auto px-6 py-8">
              <div className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
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
                    
                    <h2 className="text-2xl font-bold mb-6">
                      {section.subsections.find(s => s.id === activeSubsection)?.title}
                    </h2>
                    
                    <SubsectionContent 
                      sectionId={section.id} 
                      subsectionId={activeSubsection} 
                    />
                    
                    <div className="mt-8 pt-4 border-t flex justify-between items-center">
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {section.title}
                      </span>
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
                ) : (
                  // Show section overview
                  <>
                    <div className="flex items-center mb-4">
                      <button 
                        className={`mr-3 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
                        onClick={() => setActiveTab('dashboard')}
                      >
                        <ArrowLeft size={18} />
                      </button>
                      <h2 className="text-2xl font-bold">{section.title}</h2>
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <div className={`h-2 flex-grow rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div 
                          className="h-2 rounded-full bg-blue-500" 
                          style={{ width: `${(section.subsections.filter(s => s.completed).length / section.subsections.length) * 100}%` }}
                        ></div>
                      </div>
                      <span className={`ml-3 font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        {Math.round((section.subsections.filter(s => s.completed).length / section.subsections.length) * 100)}%
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      {section.subsections.map(subsection => (
                        <div 
                          key={subsection.id}
                          className={`flex items-center justify-between p-3 border rounded-md ${darkMode ? 'border-gray-700 hover:bg-gray-750' : 'border-gray-200 hover:bg-gray-50'} transition-colors duration-150`}
                        >
                          <div className="flex items-center gap-3">
                            <div 
                              className="cursor-pointer"
                              onClick={() => updateProgress(section.id, subsection.id, !subsection.completed)}
                            >
                              {subsection.completed ? (
                                <CheckCircle className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
                              ) : (
                                <div className={`w-5 h-5 rounded-full border-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}></div>
                              )}
                            </div>
                            <span>{subsection.title}</span>
                          </div>
                          <button 
                            className={`px-4 py-1 text-sm rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition duration-150`}
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
            </div>
          )
        ))}
        
        {activeTab === 'practice' && (
          <div className="container mx-auto px-6 py-8">
            <div className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
              <h2 className="text-2xl font-bold mb-4">Practice Quiz</h2>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                Test your knowledge of Australian citizenship with this practice quiz. 
                You need to score at least 75% to pass the actual test.
              </p>
              
              <Quiz questions={QUIZ_QUESTIONS} darkMode={darkMode} />
            </div>
          </div>
        )}

{activeTab === 'mocktest' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Australian Citizenship Mock Test</h2>
              <p className="text-gray-600 mb-6">
                Test your knowledge with this realistic mock citizenship test. This simulates the actual test environment with a timer and provides section-by-section feedback.
              </p>
              
              <MockTest />
            </div>
          )}
      </main>
      
      <footer className={`py-6 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} transition-colors duration-200`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © {new Date().getFullYear()} CitizenTest - Australian Citizenship Prep
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                This is a study tool and is not affiliated with the Australian Government.
              </p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className={`text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} hover:underline`}>Privacy Policy</a>
              <a href="#" className={`text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} hover:underline`}>Terms of Use</a>
              <a href="#" className={`text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} hover:underline`}>Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;