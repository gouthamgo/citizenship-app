import React, { useState, useEffect } from 'react';
import { Home, BookOpen, Award, CheckCircle, ArrowLeft, FileText, MapPin, Headphones, BookMarked, Clock, ExternalLink, Mail, ChevronRight } from 'lucide-react';
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
            <span className="text-sm text-white">{calculateProgress()}% Complete</span>
            <div className="w-24 bg-blue-800 rounded-full h-2.5">
              <div 
                className="bg-blue-300 h-2.5 rounded-full" 
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-opacity-20 bg-white hover:bg-opacity-30 transition duration-200"
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
      </header>
      
      {/* Navigation */}
      <nav className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b transition-colors duration-200`}>
        <div className="container mx-auto">
          <div className="flex overflow-x-auto">
            <button 
              className={`px-4 py-3 flex items-center whitespace-nowrap ${
                activeTab === 'home' 
                  ? `${darkMode ? 'text-blue-400 border-blue-400' : 'text-blue-600 border-blue-600'} border-b-2 font-medium` 
                  : `${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`
              }`}
              onClick={() => {
                setActiveTab('home');
                setActiveSubsection(null);
              }}
            >
              <Home size={18} className="mr-2" />
              <span>Home</span>
            </button>
            
            {sections.map(section => (
              <button 
                key={section.id}
                className={`px-4 py-3 flex items-center whitespace-nowrap ${
                  activeTab === section.id 
                    ? `${darkMode ? 'text-blue-400 border-blue-400' : 'text-blue-600 border-blue-600'} border-b-2 font-medium` 
                    : `${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`
                }`}
                onClick={() => {
                  setActiveTab(section.id);
                  setActiveSubsection(null);
                }}
              >
                <BookOpen size={18} className="mr-2" />
                <span>{section.id.charAt(0).toUpperCase() + section.id.slice(1)}</span>
              </button>
            ))}
            
            <button 
              className={`px-4 py-3 flex items-center whitespace-nowrap ${
                activeTab === 'practice' 
                  ? `${darkMode ? 'text-blue-400 border-blue-400' : 'text-blue-600 border-blue-600'} border-b-2 font-medium` 
                  : `${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`
              }`}
              onClick={() => {
                setActiveTab('practice');
                setActiveSubsection(null);
              }}
            >
              <Award size={18} className="mr-2" />
              <span>Practice</span>
            </button>
            
            <button 
              className={`px-4 py-3 flex items-center whitespace-nowrap ${
                activeTab === 'mocktest' 
                  ? `${darkMode ? 'text-blue-400 border-blue-400' : 'text-blue-600 border-blue-600'} border-b-2 font-medium` 
                  : `${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`
              }`}
              onClick={() => {
                setActiveTab('mocktest');
                setActiveSubsection(null);
              }}
            >
              <FileText size={18} className="mr-2" />
              <span>Mock Test</span>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6">
        {activeTab === 'home' && (
          <div>
            <div className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} mb-6`}>
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
                      onClick={() => setActiveTab('practice')}
                    >
                      Start Practicing
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
            
            {/* Essential Resources Section */}
            <div className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6 mb-8`}>
              <h2 className="text-2xl font-bold mb-6">Essential Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`p-6 rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-750 hover:bg-gray-700' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'} transition duration-200`}>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} mr-4`}>
                      <BookMarked size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                    </div>
                    <h3 className="text-lg font-semibold">Read the Guide</h3>
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
                
                <div className={`p-6 rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-750 hover:bg-gray-700' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'} transition duration-200`}>
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
                
                <div className={`p-6 rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-750 hover:bg-gray-700' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'} transition duration-200`}>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} mr-4`}>
                      <MapPin size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                    </div>
                    <h3 className="text-lg font-semibold">Test Locator</h3>
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
              </div>
            </div>
            
            {/* Study Topics and Progress */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
                <h2 className="text-2xl font-bold mb-4">Study Topics</h2>
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Explore all topics from the Australian citizenship test syllabus.
                </p>
                
                <div className="space-y-4">
                  {sections.map(section => (
                    <div 
                      key={section.id}
                      className={`rounded-lg border p-4 cursor-pointer ${darkMode ? 'border-gray-700 hover:bg-gray-750' : 'border-gray-200 hover:bg-gray-50'}`}
                      onClick={() => setActiveTab(section.id)}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{section.title}</h3>
                        <ChevronRight size={18} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                            {section.subsections.filter(s => s.completed).length} of {section.subsections.length} completed
                          </span>
                          <span className="font-medium">
                            {Math.round((section.subsections.filter(s => s.completed).length / section.subsections.length) * 100)}%
                          </span>
                        </div>
                        <div className={`mt-1 h-1.5 w-full rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <div
                            className={`h-1.5 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}
                            style={{ width: `${(section.subsections.filter(s => s.completed).length / section.subsections.length) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
                <h2 className="text-2xl font-bold mb-4">Test Preparation</h2>
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Our tools to help you practice for the citizenship test.
                </p>
                
                <div className="space-y-4">
                  <div className={`rounded-lg border p-4 ${darkMode ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'}`}>
                    <div className="flex items-center mb-2">
                      <div className={`p-2 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} mr-3`}>
                        <Award size={18} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                      </div>
                      <h3 className="font-medium">Practice Questions</h3>
                    </div>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Practice with our question bank to test your knowledge on specific topics.
                    </p>
                    <button 
                      onClick={() => setActiveTab('practice')}
                      className={`w-full py-2 text-center rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium`}
                    >
                      Start Practicing
                    </button>
                  </div>
                  
                  <div className={`rounded-lg border p-4 ${darkMode ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'}`}>
                    <div className="flex items-center mb-2">
                      <div className={`p-2 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} mr-3`}>
                        <Clock size={18} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                      </div>
                      <h3 className="font-medium">Timed Mock Tests</h3>
                    </div>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Take a full mock test with timer to simulate the actual test environment.
                    </p>
                    <button 
                      onClick={() => setActiveTab('mocktest')}
                      className={`w-full py-2 text-center rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium`}
                    >
                      Take Mock Test
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact & Help Section */}
            <div className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
              <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                If you have questions about the citizenship process or need additional help, contact us or visit the official resources.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4">
                <a 
                  href="mailto:support@citizentest.com"
                  className={`flex items-center px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition duration-200`}
                >
                  <Mail size={18} className="mr-2" />
                  <span>Contact Support</span>
                </a>
                
                <a 
                  href="https://immi.homeaffairs.gov.au/citizenship/become-a-citizen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition duration-200`}
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
            <div key={section.id} className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
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
                      onClick={() => setActiveTab('home')}
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
          )
        ))}
        
        {activeTab === 'practice' && (
          <div className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
            <h2 className="text-2xl font-bold mb-4">Practice Quiz</h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Test your knowledge of Australian citizenship with this practice quiz. 
              You need to score at least 75% to pass the actual test.
            </p>
            
            <Quiz questions={QUIZ_QUESTIONS} darkMode={darkMode} />
          </div>
        )}
        
        {activeTab === 'mocktest' && (
          <div className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-6`}>
            <h2 className="text-2xl font-bold mb-4">Australian Citizenship Mock Test</h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              This realistic simulator provides a seamless experience to help you prepare for the official Australian citizenship test.
            </p>
            
            <MockTest darkMode={darkMode} />
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