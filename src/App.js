import React, { useState } from 'react'
import {data} from './component/DataQuestions'
import AllQuestion from './component/AllQuestion'
import Score from './component/Score'
import './App.css'
const App = () => {
  // hold current question
const[currentQuestion, setCurrentQuestion] = useState(0)
  //hold score
  const[score, setScore] = useState(0)

  // step5 create function if correct get score if not corect no score

//funnction 1- below function deal with answer array
const handleAnswerClick =(selectedOption)=>{
if (selectedOption === data[currentQuestion].answer){
  setScore(score + 1)
  //if it true we put score plus 1
}
}
//function 2- work on next button - only when click
//we need this function to Allquestions.js
//this function change current function to next question by increment
const handleNextClick = ()=>{
  const nextQuestion = currentQuestion + 1
  if (nextQuestion < data.length){
    setCurrentQuestion(nextQuestion)
  }else{
    console.log("You answer all questions")
  }
}

const handleBackClick =()=>{
  if (currentQuestion > 0){
    setCurrentQuestion(currentQuestion - 1 )
  } 
}

//2 way -way 1 make func from app.js set current function to 0 and set cuurentscore too 0
const handleResetButton =()=>{
setCurrentQuestion(0)
setScore(0)

}

  return (
    <div className='wrapper'>
      <h1>Take a Quiz</h1>
      <div className='mainBox'>
    {
      
      //ternary if else
      //check if 2 less than    7     if true run line 16 if false run line 17
      //we do this coz we want user answer question before show score
      //example if check email have to see log in page first then  can check email
      (currentQuestion < data.length - 1) ?
       (  <AllQuestion nameData ={data[currentQuestion]} nameFunchandleAnswerClick = {handleAnswerClick} nameHandleNextClick={handleNextClick} nameHandleBackClick={handleBackClick} nameCurrentQuestion = {currentQuestion}/>):
       (<Score nameScore={score} nameDataScore = {data} nameHandleResetButton = {handleResetButton}/>)
    }
    </div>
    </div>
  )
}

export default App

// 2 conditions must be true so kid can watch TV
// kidHomework && freeTV ?
// kidcanwatchTV :
// kidNoTV

// condition either one of condition - kid can watch tv use or
// kidHomework || freeTV ?
// kidcanwatchTV :
// kidNoTV

// score
// score > 80 ?
// alert ('a'):
// score > 70 && score < 80?
// alert('b'):
// acore < 70 && score > 65 ?
// alert('c'):
// alert('fail')


// myArray = [5,6,7]
// myArray[currentValue]
//[currentValue] is there to set a position
// currentValue = 2
// show 7 online 51

