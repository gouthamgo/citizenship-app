import React, { useState, useEffect } from 'react';
import { Clock, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';

const MockTest = () => {
  // Sample questions from the Australian Citizenship test based on the Common Bond booklet
  const [questions] = useState([
    {
      id: 1,
      text: "How many states and mainland territories does Australia have?",
      options: [
        "8 states and 3 mainland territories",
        "4 states and 2 mainland territories", 
        "6 states and 2 mainland territories"
      ],
      correctAnswer: "6 states and 2 mainland territories",
      section: "Australia and its people",
      answered: null,
      explanation: "Australia has 6 states and 2 mainland territories."
    },
    {
      id: 2,
      text: "What do we call the elected representatives in the Australian Parliament?",
      options: [
        "Senators and Members of Parliament (MPs)",
        "Councilors and Ministers",
        "Premiers and Governors"
      ],
      correctAnswer: "Senators and Members of Parliament (MPs)",
      section: "Government and the law in Australia",
      answered: null,
      explanation: "In the Australian Parliament, elected representatives are called Senators and Members of Parliament (MPs)."
    },
    {
      id: 3,
      text: "Which of these values is a key Australian value?",
      options: [
        "Social class distinctions are important",
        "Equality of opportunity for all people",
        "The government controls all media"
      ],
      correctAnswer: "Equality of opportunity for all people",
      section: "Australian values",
      answered: null,
      explanation: "Equality of opportunity for all people is a key Australian value. Australia values the 'fair go' for everyone."
    },
    {
      id: 4,
      text: "What is the Australian national anthem called?",
      options: [
        "God Save the Queen",
        "Waltzing Matilda",
        "Advance Australia Fair"
      ],
      correctAnswer: "Advance Australia Fair",
      section: "Australia and its people",
      answered: null,
      explanation: "Australia's national anthem is 'Advance Australia Fair'."
    },
    {
      id: 5,
      text: "In Australia's parliamentary democracy, what do citizens do to choose people to represent them?",
      options: [
        "Draw names from a ballot",
        "Vote in elections",
        "Pay a special tax"
      ],
      correctAnswer: "Vote in elections",
      section: "Australia's democratic beliefs, rights and liberties",
      answered: null,
      explanation: "In Australia's parliamentary democracy, citizens vote in elections to choose their representatives."
    },
    {
      id: 6,
      text: "What is the Rule of Law?",
      options: [
        "Only the police make the laws",
        "The government is not bound by the law",
        "No person is above the law"
      ],
      correctAnswer: "No person is above the law",
      section: "Australia's democratic beliefs, rights and liberties",
      answered: null,
      explanation: "The Rule of Law means that no person, group or religious rule is above the law. Everyone must follow Australia's laws."
    },
    {
      id: 7,
      text: "When did European settlement in Australia begin?",
      options: [
        "1788",
        "1901",
        "1851"
      ],
      correctAnswer: "1788",
      section: "Australia and its people",
      answered: null,
      explanation: "European settlement in Australia began in 1788 when the First Fleet arrived from Great Britain."
    },
    {
      id: 8,
      text: "What is celebrated on Australia Day?",
      options: [
        "The landing of ANZAC troops at Gallipoli",
        "The arrival of the First Fleet in 1788",
        "The federation of Australia in 1901"
      ],
      correctAnswer: "The arrival of the First Fleet in 1788",
      section: "Australia and its people",
      answered: null,
      explanation: "Australia Day on 26 January marks the anniversary of the arrival of the First Fleet from Great Britain in 1788."
    },
    {
      id: 9,
      text: "Which of these is NOT a responsibility of Australian citizenship?",
      options: [
        "Vote in elections",
        "Serve on a jury if called to do so",
        "Join a specific religious group"
      ],
      correctAnswer: "Join a specific religious group",
      section: "Australia's democratic beliefs, rights and liberties",
      answered: null,
      explanation: "In Australia, there is freedom of religion. Citizens are not required to join any religious group."
    },
    {
      id: 10,
      text: "What is the capital city of Australia?",
      options: [
        "Sydney",
        "Melbourne",
        "Canberra"
      ],
      correctAnswer: "Canberra",
      section: "Australia and its people",
      answered: null,
      explanation: "Canberra is Australia's capital city."
    },
    {
      id: 11,
      text: "What happened on 1 January 1901?",
      options: [
        "The colonies were united into a federation called the Commonwealth of Australia",
        "Australia gained independence through war",
        "The first European settlers arrived in Australia"
      ],
      correctAnswer: "The colonies were united into a federation called the Commonwealth of Australia",
      section: "Government and the law in Australia",
      answered: null,
      explanation: "On 1 January 1901, the separate colonies were united into a federation called the Commonwealth of Australia."
    },
    {
      id: 12,
      text: "What are the colors of the Australian Aboriginal Flag?",
      options: [
        "Green, white and yellow",
        "Black, red and yellow",
        "Blue, white and green"
      ],
      correctAnswer: "Black, red and yellow",
      section: "Australia and its people",
      answered: null,
      explanation: "The Australian Aboriginal Flag is black, red and yellow."
    },
    {
      id: 13,
      text: "Who is Australia's Head of State?",
      options: [
        "The Prime Minister",
        "The King of Australia",
        "The Governor-General"
      ],
      correctAnswer: "The King of Australia",
      section: "Government and the law in Australia",
      answered: null,
      explanation: "Australia's Head of State is the King of Australia, His Majesty King Charles III."
    },
    {
      id: 14,
      text: "What type of government does Australia have?",
      options: [
        "Dictatorship",
        "Parliamentary democracy",
        "Communist"
      ],
      correctAnswer: "Parliamentary democracy",
      section: "Government and the law in Australia",
      answered: null,
      explanation: "Australia has a parliamentary democracy, which means Australian citizens vote to elect representatives to parliament."
    },
    {
      id: 15,
      text: "What is the role of the Governor-General?",
      options: [
        "To write laws independently of parliament",
        "To rule Australia on behalf of the King",
        "To represent the King and sign bills into law"
      ],
      correctAnswer: "To represent the King and sign bills into law",
      section: "Government and the law in Australia",
      answered: null,
      explanation: "The Governor-General represents the King in Australia and has formal responsibilities including signing bills into law (Royal Assent)."
    },
    {
      id: 16,
      text: "What does the Commonwealth Star on the Australian flag represent?",
      options: [
        "The six states and territories",
        "The Southern Cross constellation",
        "The six states and one point for the territories"
      ],
      correctAnswer: "The six states and one point for the territories",
      section: "Australia and its people",
      answered: null,
      explanation: "The Commonwealth Star has seven points, one for each of the six states and one for all territories."
    },
    {
      id: 17,
      text: "What do Australians commemorate on Anzac Day?",
      options: [
        "The arrival of the First Fleet",
        "The landing of the Australian and New Zealand Army Corps at Gallipoli",
        "Federation Day"
      ],
      correctAnswer: "The landing of the Australian and New Zealand Army Corps at Gallipoli",
      section: "Australia and its people",
      answered: null,
      explanation: "Anzac Day commemorates the landing of the Australian and New Zealand Army Corps at Gallipoli, Turkey, during World War I on 25 April 1915."
    },
    {
      id: 18,
      text: "Which of these is an Australian value?",
      options: [
        "People must follow a particular religion",
        "Men and women are not equal",
        "Mutual respect and tolerance for others"
      ],
      correctAnswer: "Mutual respect and tolerance for others",
      section: "Australian values",
      answered: null,
      explanation: "Mutual respect and tolerance for others is an important Australian value."
    },
    {
      id: 19,
      text: "What is Australia's national flower?",
      options: [
        "Waratah",
        "Golden Wattle",
        "Kangaroo Paw"
      ],
      correctAnswer: "Golden Wattle",
      section: "Australia and its people",
      answered: null,
      explanation: "Australia's national flower is the Golden Wattle."
    },
    {
      id: 20,
      text: "Which of these represents freedom in Australia?",
      options: [
        "Freedom to join or leave any group voluntarily",
        "Freedom to disobey Australian laws",
        "Freedom to avoid paying taxes"
      ],
      correctAnswer: "Freedom to join or leave any group voluntarily",
      section: "Australia's democratic beliefs, rights and liberties",
      answered: null,
      explanation: "In Australia, people have the freedom to join or leave any legal group voluntarily as long as it is within the law."
    }
  ]);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes in seconds
  const [testCompleted, setTestCompleted] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  
  // Initialize question numbers
  const questionNumbers = Array.from({length: questions.length}, (_, i) => i + 1);
  
  // Start timer when test starts
  useEffect(() => {
    let timer;
    if (testStarted && !testCompleted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTestCompleted(true);
    }
    
    return () => clearInterval(timer);
  }, [testStarted, testCompleted, timeLeft]);
  
  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  // Handle answer selection
  const handleAnswer = (answer) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].answered = answer;
    
    // Move to next question after answering
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  // Jump to a specific question
  const jumpToQuestion = (index) => {
    setCurrentQuestion(index);
  };
  
  // Go to next question
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  // Go to previous question
  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  // Complete test
  const completeTest = () => {
    setTestCompleted(true);
  };
  
  // Start the test
  const startTest = () => {
    setTestStarted(true);
  };
  
  // Reset the test
  const resetTest = () => {
    const resetQuestions = questions.map(q => ({...q, answered: null}));
    setQuestions(resetQuestions);
    setCurrentQuestion(0);
    setTimeLeft(45 * 60);
    setTestCompleted(false);
    setTestStarted(true);
  };
  
  // Calculate results
  const calculateResults = () => {
    const answeredQuestions = questions.filter(q => q.answered !== null);
    const correctAnswers = questions.filter(q => q.answered === q.correctAnswer);
    
    const totalScore = (correctAnswers.length / questions.length) * 100;
    
    // Group by section
    const sections = [...new Set(questions.map(q => q.section))];
    const sectionResults = sections.map(section => {
      const sectionQuestions = questions.filter(q => q.section === section);
      const sectionCorrect = sectionQuestions.filter(q => q.answered === q.correctAnswer);
      
      return {
        section,
        score: (sectionCorrect.length / sectionQuestions.length) * 100,
        correct: sectionCorrect.length,
        total: sectionQuestions.length
      };
    });
    
    return {
      totalScore: Math.round(totalScore),
      answeredCount: answeredQuestions.length,
      correctCount: correctAnswers.length,
      totalQuestions: questions.length,
      sectionResults,
      passed: totalScore >= 75
    };
  };
  
  // Display initial screen before test starts
  if (!testStarted) {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Australian Citizenship Mock Test</h1>
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Test Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>This mock test consists of 20 questions based on the Australian citizenship test resource book "Australian Citizenship: Our Common Bond".</li>
            <li>You have 45 minutes to complete the test.</li>
            <li>To pass, you need to score at least 75% correct answers.</li>
            <li>All questions are multiple choice with one correct answer.</li>
            <li>You can navigate between questions and change your answers before submitting.</li>
          </ul>
        </div>
        <button 
          onClick={startTest}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Start Mock Test
        </button>
      </div>
    );
  }
  
  // Display results screen after test is completed
  if (testCompleted) {
    const results = calculateResults();
    
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2">Your Results</h1>
          <div className="inline-block relative w-32 h-32 mb-4">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#eee"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={results.passed ? "#4ade80" : "#ef4444"}
                strokeWidth="3"
                strokeDasharray={`${results.totalScore}, 100`}
                strokeLinecap="round"
              />
              <text x="18" y="20.5" textAnchor="middle" fontSize="10" fill={results.passed ? "green" : "red"} fontWeight="bold">
                {results.totalScore}%
              </text>
            </svg>
          </div>
          <p className="text-lg font-semibold mb-2">
            Target: 75%
          </p>
          <div className={`text-lg font-bold ${results.passed ? 'text-green-600' : 'text-red-600'}`}>
            {results.passed ? 'Congratulations! You Passed the test' : 'You did not pass the test'}
          </div>
          <p className="mt-2">
            You scored {results.correctCount} out of {results.totalQuestions} questions correctly.
          </p>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Your Section-wise Result</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.sectionResults.map((section, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">{section.section}</h3>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                    <div 
                      className={`h-2.5 rounded-full ${section.score >= 75 ? 'bg-blue-600' : 'bg-red-500'}`}
                      style={{ width: `${section.score}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">{Math.round(section.score)}%</span>
                </div>
                <p className="text-sm mt-1">
                  {section.correct} of {section.total} correct
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 space-y-4">
          <button 
            onClick={resetTest}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Take Test Again
          </button>
          
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition duration-200"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }
  
  // Main test interface
  return (
    <div className="max-w-4xl mx-auto">
      {/* Test header */}
      <div className="bg-blue-900 text-white p-4 rounded-t-lg">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium">
            {currentQuestion + 1}/{questions.length}
          </div>
          
          <div className="text-center">
            <div className="text-sm font-medium">Australia and its people test 1</div>
          </div>
          
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span className="font-medium">{formatTime(timeLeft)}</span>
          </div>
        </div>
        
        {/* Question progress bar */}
        <div className="mt-4 grid grid-cols-10 gap-1">
          {questionNumbers.map((num, index) => (
            <button
              key={index}
              onClick={() => jumpToQuestion(index)}
              className={`
                h-8 flex items-center justify-center rounded 
                text-xs font-medium 
                ${currentQuestion === index ? 'bg-white text-blue-900' : ''}
                ${questions[index].answered !== null ? 'bg-blue-700' : 'bg-blue-800'}
              `}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
      
      {/* Question and options */}
      <div className="bg-white p-6 rounded-b-lg shadow-md">
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-2">{currentQuestion + 1}. {questions[currentQuestion].text}</h3>
          
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <div 
                key={index}
                onClick={() => handleAnswer(option)}
                className={`
                  p-3 border rounded-md cursor-pointer transition
                  ${questions[currentQuestion].answered === option ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}
                `}
              >
                {option}
              </div>
            ))}
          </div>
          
          {/* If question is answered, show if correct */}
          {questions[currentQuestion].answered && (
            <div className={`mt-4 p-4 rounded-md ${
              questions[currentQuestion].answered === questions[currentQuestion].correctAnswer 
                ? 'bg-green-100 text-green-800 border-green-200'
                : 'bg-red-100 text-red-800 border-red-200'
            }`}>
              {questions[currentQuestion].answered === questions[currentQuestion].correctAnswer ? (
                <div className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5" />
                  <div>
                    <p className="font-semibold">Correct Answer</p>
                    <p>{questions[currentQuestion].explanation}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start">
                  <X size={18} className="text-red-600 mr-2 mt-0.5" />
                  <div>
                    <p className="font-semibold">Incorrect Answer</p>
                    <p>The correct answer is: {questions[currentQuestion].correctAnswer}</p>
                    <p>{questions[currentQuestion].explanation}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-between">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={`flex items-center px-4 py-2 rounded-md font-medium ${
              currentQuestion === 0 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
          >
            <ChevronLeft size={16} className="mr-1" />
            <span>Prev</span>
          </button>
          
          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={completeTest}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
            >
              <span>Complete Test</span>
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
            >
              <span>Next</span>
              <ChevronRight size={16} className="ml-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MockTest;