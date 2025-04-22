import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleSelectAnswer = (questionId, optionId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionId
    });
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
  };
  
  const calculateScore = () => {
    let correctAnswers = 0;
    
    questions.forEach(question => {
      const selectedOption = question.options.find(option => option.id === selectedAnswers[question.id]);
      if (selectedOption && selectedOption.correct) {
        correctAnswers++;
      }
    });
    
    return {
      correct: correctAnswers,
      total: questions.length,
      percentage: (correctAnswers / questions.length) * 100
    };
  };
  
  if (showResults) {
    const score = calculateScore();
    
    return (
      <div className="space-y-6">
        <div className="p-6 bg-white border rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-2">Quiz Results</h3>
          <div className="text-5xl font-bold mb-2 text-blue-600">{Math.round(score.percentage)}%</div>
          <p className="text-xl mb-4">{score.correct} out of {score.total} correct</p>
          
          <div className="p-4 rounded-md mb-6 text-center">
            {score.percentage >= 75 ? (
              <p className="text-green-600 font-medium text-lg">
                Congratulations! You passed the practice test.
              </p>
            ) : (
              <p className="text-amber-600 font-medium text-lg">
                Keep studying! You need 75% to pass the citizenship test.
              </p>
            )}
          </div>
          
          <button 
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={resetQuiz}
          >
            Try Again
          </button>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Review Your Answers</h3>
          
          {questions.map((question, index) => {
            const selectedOption = question.options.find(option => option.id === selectedAnswers[question.id]);
            const correctOption = question.options.find(option => option.correct);
            const isCorrect = selectedOption && selectedOption.correct;
            
            return (
              <div key={question.id} className="p-4 border rounded-md">
                <div className="flex justify-between">
                  <p className="font-medium mb-2">
                    {index + 1}. {question.question}
                  </p>
                  {isCorrect ? (
                    <CheckCircle className="text-green-600" size={20} />
                  ) : (
                    <XCircle className="text-red-600" size={20} />
                  )}
                </div>
                
                <div className="ml-6 space-y-1">
                  <p className={`${selectedOption ? (isCorrect ? 'text-green-600 font-medium' : 'text-red-600 font-medium') : 'text-gray-500'}`}>
                    Your answer: {selectedOption ? selectedOption.text : 'Not answered'}
                  </p>
                  
                  {!isCorrect && (
                    <p className="text-green-600">
                      Correct answer: {correctOption.text}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between text-sm text-gray-500">
        <div>Question {currentQuestionIndex + 1} of {questions.length}</div>
        <div>{Object.keys(selectedAnswers).length} of {questions.length} answered</div>
      </div>
      
      <div className="p-6 border rounded-md">
        <h3 className="text-xl font-bold mb-4">{currentQuestion.question}</h3>
        
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map(option => (
            <div 
              key={option.id}
              className={`flex items-center p-3 border rounded-md cursor-pointer ${
                selectedAnswers[currentQuestion.id] === option.id
                  ? 'bg-blue-50 border-blue-300'
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => handleSelectAnswer(currentQuestion.id, option.id)}
            >
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${
                selectedAnswers[currentQuestion.id] === option.id
                  ? 'border-blue-600'
                  : 'border-gray-300'
              }`}>
                {selectedAnswers[currentQuestion.id] === option.id && (
                  <div className="w-3 h-3 rounded-full bg-blue-600" />
                )}
              </div>
              <span>{option.text}</span>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between">
          <button 
            className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50"
            onClick={handleNext}
            disabled={!selectedAnswers[currentQuestion.id]}
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;