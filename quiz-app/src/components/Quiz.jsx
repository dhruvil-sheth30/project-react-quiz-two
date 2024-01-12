import React from 'react';

const Quiz = (props) => {
  const { currentQuestionIndex, onNext, onPrevious, questions, onQuit } = props;

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <div>No questions available</div>;
  }

  return (
    <div id='quiz'>
      <h1>Question</h1>
      <p id='question-number'>{currentQuestionIndex + 1} of {questions.length}</p>
      <p>{currentQuestion.question}</p>
      <div className='options'>
        <button>{currentQuestion.optionA}</button>
        <button>{currentQuestion.optionB}</button>
        <button>{currentQuestion.optionC}</button>
        <button>{currentQuestion.optionD}</button>
      </div>
      <div className='navigation'>
        <button id='prevBtn' onClick={onPrevious}>
          Previous
        </button>
        <button id='nextBtn' onClick={onNext}>
          Next
        </button>
        <button id='quitBtn' onClick={onQuit}>
          Quit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
