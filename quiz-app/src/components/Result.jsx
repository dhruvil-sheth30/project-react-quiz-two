import { Component } from 'react'

export default class Result extends Component {
  render() {
    return (
      <div id='result-container'>
        <h1 id='result-title'>Result</h1>
        <div id='result'>
            <p>You need more practice!</p>
            <h1>Your score is 20%</h1>
            <div id='quiz-details'>
                <div className='flex'>
                    <p>Total Number Of Questions</p> 
                    <p>15</p>
                </div>
                <div className='flex'>
                    <p>Number Of Attempted Questions</p> 
                    <p>9</p>
                </div>
                <div className='flex'>
                    <p>Number Of Correct Answers</p> 
                    <p>3</p>
                </div>
                <div className='flex'>
                    <p>Number Of Wrong Answers</p> 
                    <p>6</p>
                </div>  
            </div>
        </div>
        <div>
            <button id='playAgain'>Play Again</button>
            <button id='goHome'>Back To Home</button>
        </div>
      </div>
    )
  }
}