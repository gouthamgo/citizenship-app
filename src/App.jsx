import React, { useState, useEffect } from 'react';
import { Home, BookOpen, Award, CheckCircle, ArrowLeft, FileText } from 'lucide-react';
import { SECTIONS } from './data/sections';
import { QUIZ_QUESTIONS } from './data/quiz-questions';
import PdfViewer from './components/PdfViewer';
// import MockPDF from './components/MockPDF';
import Quiz from './components/Quiz';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [sections, setSections] = useState(SECTIONS);
  const [activeSubsection, setActiveSubsection] = useState(null);
  
  // PDF file path - this PDF should be placed in the public folder
  const pdfUrl = '/australian-citizenship-our-common-bond.pdf';
  
  // Load progress from localStorage on initial load
  useEffect(() => {
    const savedProgress = localStorage.getItem('citizenship-progress');
    if (savedProgress) {
      setSections(JSON.parse(savedProgress));
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
  
  // Get content for a specific subsection
  const getSubsectionContent = (sectionId, subsectionId) => {
    // This would typically come from a database or content files
    // For the demo, we'll just show sample content for one subsection
    if (sectionId === 'part1' && subsectionId === 'aboriginal') {
      return (
        <div className="prose max-w-none">
          <h3 className="text-xl font-bold mb-4">Aboriginal and Torres Strait Islander peoples</h3>
          <p className="mb-4">
            Australia's first inhabitants are the Aboriginal and Torres Strait Islander peoples, who have the oldest continuous 
            cultures and traditions in the world.
          </p>
          <p className="mb-4">
            Historically, Aboriginal people are from mainland Australia and Tasmania. The archaeological record indicates 
            that Aboriginal peoples arrived in Australia between 65,000 and 40,000 years ago; however, the Aboriginal 
            peoples believe they are central to the creation stories of this land, and their creation stories commence with the 
            beginning of time. Torres Strait Islander people are from islands between the northern tip of Queensland and 
            Papua New Guinea.
          </p>
          <p className="mb-4">
            Aboriginal and Torres Strait Islander peoples have age-old beliefs and traditions that still guide them today. 
            They have a deep connection with the land, which is expressed in their stories, art and dance. Indigenous cultures 
            are diverse and an important part of Australia's national identity.
          </p>
        </div>
      );
    }

    if (subsectionId === 'european') {
      return (
        <div className="prose max-w-none">
          <h3 className="text-xl font-bold mb-4">Early days of European settlement</h3>
          <p className="mb-4">
            European settlement started when the first 11 convict ships, which became known as the 'First Fleet', arrived from 
            Great Britain on 26 January 1788.
          </p>
          <p className="mb-4">
            At this time British laws were harsh and the jails could not hold the large number of people imprisoned for their 
            crimes. To manage this problem, the British Government decided to transport convicts to the other side of the 
            world: to the new colony of New South Wales.
          </p>
          <p className="mb-4">
            The first Governor of the colony of New South Wales was Captain Arthur Phillip. The colony survived, and as more 
            convicts and free settlers arrived, it grew and developed. More colonies were established in other parts of Australia.
          </p>
          <p className="mb-4">
            Early free settlers came from Great Britain and Ireland. This British and Irish heritage has had a major influence on 
            Australia's recent history, culture and politics.
          </p>
          <p className="mb-4">
            In 1851, a 'gold rush' began when gold was discovered in the colonies of New South Wales and Victoria. 
            People from all around the world came to these colonies to try to make their fortunes. Chinese people arriving 
            at this time were the first large group of migrants not from Europe. In 10 years, Australia's population more 
            than doubled.
          </p>
        </div>
      );
    }
    
    // Default content for other subsections
    return (
      <div className="prose max-w-none">
        <h3 className="text-xl font-bold mb-4">{subsectionId}</h3>
        <p className="mb-4">
          This is placeholder content for this subsection. In a complete implementation, this would contain 
          the actual study material.
        </p>
        <p>
          You can mark this section as complete when you've studied the material by clicking the 
          "Mark as Complete" button below.
        </p>
      </div>
    );
  };
  
  // Find the current section and subsection
  const currentSection = sections.find(s => s.id === activeTab);
  const currentSubsection = activeSubsection 
    ? currentSection?.subsections.find(s => s.id === activeSubsection) 
    : null;
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-green-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Australian Citizenship Prep</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm">{calculateProgress()}% Complete</span>
            <div className="w-24 bg-green-900 rounded-full h-2.5">
              <div 
                className="bg-green-500 h-2.5 rounded-full" 
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto p-4 flex-grow">
        {/* Navigation */}
        <div className="flex border-b mb-6 overflow-x-auto">
          <button 
            className={`flex items-center gap-2 px-4 py-2 ${activeTab === 'home' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-600'}`}
            onClick={() => {
              setActiveTab('home');
              setActiveSubsection(null);
            }}
          >
            <Home size={18} />
            <span>Home</span>
          </button>
          
          {sections.map(section => (
            <button 
              key={section.id}
              className={`flex items-center gap-2 px-4 py-2 ${activeTab === section.id ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-600'}`}
              onClick={() => {
                setActiveTab(section.id);
                setActiveSubsection(null);
              }}
            >
              <BookOpen size={18} />
              <span>{section.id.charAt(0).toUpperCase() + section.id.slice(1)}</span>
            </button>
          ))}
          
          <button 
            className={`flex items-center gap-2 px-4 py-2 ${activeTab === 'pdf' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-600'}`}
            onClick={() => {
              setActiveTab('pdf');
              setActiveSubsection(null);
            }}
          >
            <FileText size={18} />
            <span>PDF</span>
          </button>
          
          <button 
            className={`flex items-center gap-2 px-4 py-2 ${activeTab === 'practice' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-600'}`}
            onClick={() => {
              setActiveTab('practice');
              setActiveSubsection(null);
            }}
          >
            <Award size={18} />
            <span>Practice</span>
          </button>
        </div>
        
        {/* Content */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          {activeTab === 'home' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Welcome to Australian Citizenship Prep</h2>
              <p className="text-gray-600 mb-4">
                This platform will help you prepare for the Australian citizenship test by providing study materials
                and practice quizzes based on "Australian Citizenship: Our Common Bond".
              </p>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">Your Progress</h3>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                  <div 
                    className="bg-green-600 h-4 rounded-full" 
                    style={{ width: `${calculateProgress()}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500">{calculateProgress()}% Complete</p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Study Topics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sections.map(section => (
                    <div 
                      key={section.id}
                      className="border rounded-md p-4 hover:bg-gray-50 cursor-pointer"
                      onClick={() => setActiveTab(section.id)}
                    >
                      <h4 className="font-medium">{section.title}</h4>
                      <div className="flex items-center text-sm text-gray-500 mt-2">
                        <span>{section.subsections.filter(s => s.completed).length} of {section.subsections.length} completed</span>
                        <div className="ml-2 flex-1 h-1.5 bg-gray-200 rounded-full">
                          <div 
                            className="bg-green-600 h-1.5 rounded-full" 
                            style={{ width: `${(section.subsections.filter(s => s.completed).length / section.subsections.length) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {sections.map(section => (
            activeTab === section.id && (
              <div key={section.id}>
                {activeSubsection ? (
                  // Show subsection content
                  <div>
                    <button 
                      className="flex items-center text-blue-600 mb-6 hover:underline"
                      onClick={() => setActiveSubsection(null)}
                    >
                      <ArrowLeft size={16} className="mr-1" />
                      <span>Back to {section.title}</span>
                    </button>
                    
                    <h2 className="text-2xl font-bold mb-6">
                      {section.subsections.find(s => s.id === activeSubsection)?.title}
                    </h2>
                    
                    {getSubsectionContent(section.id, activeSubsection)}
                    
                    <div className="mt-8 pt-4 border-t flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {section.title}
                      </span>
                      <button 
                        className={`px-4 py-2 rounded-md ${
                          section.subsections.find(s => s.id === activeSubsection)?.completed
                            ? 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                            : 'bg-green-600 hover:bg-green-700 text-white'
                        }`}
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
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    <p className="text-gray-600 mb-6">
                      {section.subsections.filter(s => s.completed).length} of {section.subsections.length} topics completed
                    </p>
                    
                    <div className="space-y-3">
                      {section.subsections.map(subsection => (
                        <div 
                          key={subsection.id}
                          className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50"
                        >
                          <div className="flex items-center gap-2">
                            <div 
                              className="cursor-pointer"
                              onClick={() => updateProgress(section.id, subsection.id, !subsection.completed)}
                            >
                              {subsection.completed ? (
                                <CheckCircle className="text-green-600" size={20} />
                              ) : (
                                <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                              )}
                            </div>
                            <span>{subsection.title}</span>
                          </div>
                          <button 
                            className="px-4 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
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
          
          {activeTab === 'pdf' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Australian Citizenship: Our Common Bond</h2>
              <p className="text-gray-600 mb-6">
                This is the official resource book for the Australian citizenship test.
              </p>
              
              {/* If you have the PDF file, use PdfViewer. Otherwise use MockPDF */}
              {/* Use this if you have added the PDF file to your public folder: */}
              <PdfViewer pdfUrl={pdfUrl} />
              
              {/* Use this if you don't have the PDF file: */}
              {/* <MockPDF /> */}
            </div>
          )}
          
          {activeTab === 'practice' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Practice Quiz</h2>
              <p className="text-gray-600 mb-6">
                Test your knowledge of Australian citizenship with this practice quiz. 
                You need to score at least 75% to pass the actual test.
              </p>
              
              <Quiz questions={QUIZ_QUESTIONS} />
            </div>
          )}
        </div>
      </main>
      
      <footer className="bg-gray-100 mt-8 py-6 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Australian Citizenship Prep
              </p>
              <p className="text-sm text-gray-500">
                This is a study tool and is not affiliated with the Australian Government.
              </p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-sm text-blue-600 hover:underline">Privacy Policy</a>
              <a href="#" className="text-sm text-blue-600 hover:underline">Terms of Use</a>
              <a href="#" className="text-sm text-blue-600 hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;