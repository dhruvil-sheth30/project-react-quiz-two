import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import quizQuestions from './resources/quizQuestion.json';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, quizQuestions.length - 1)
    );
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleQuit = () => {
    const confirmQuit = window.confirm('Are you sure you want to quit?');

    if (confirmQuit) {
      setCurrentQuestionIndex(0);
    }
  };

  return (
    <>
      <div className="App">
        <Home />
        <Quiz
          questions={quizQuestions}
          currentQuestionIndex={currentQuestionIndex}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onQuit={handleQuit}
        />
        <Result />
      </div>
    </>
  );
}

export default App;
