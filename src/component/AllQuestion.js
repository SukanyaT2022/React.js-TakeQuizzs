import React, { useState } from 'react';
import './AllQuestion.css';

const AllQuestion = ({ nameData, nameFunchandleAnswerClick, nameHandleNextClick, nameHandleBackClick, nameCurrentQuestion }) => {
  const [resetSelectedOption, setResetSelectedOption] = useState(null)
  
  const handleResetOption =(e)=>{
setResetSelectedOption(e.target.value)
  }

  //evrey time when click next button this function will work
  const handleNextButton =()=>{
    setResetSelectedOption(null) // it reset radio batton everytime when click next button
    nameHandleNextClick(resetSelectedOption) //nameHandleNextClick set question function from app.js
  }

  
  return (
    <div>
    
      <h3>Question No. {nameData.id}</h3>
      <h2>{nameData.question}</h2>
      <ul>
        {/* //display array option on DataQuesion.js [1,2,3] by map only option */}
        {nameData.option.map((val, index) => (
          <label>
      
          <li onClick={() => nameFunchandleAnswerClick(val)} key={index}>
            {/* val is number from multiple choices */}
            {/* // nameFunchandleAnswerClick from app.js  check if it correct and gice score*/}
  
            <input 
            type="radio" 
            value={val} 
            checked={resetSelectedOption === val}  
         //line 32 when user click it tick only one radion button that tick--checked means tick when user tick
            onChange={handleResetOption}/>
            {val}
          </li>
          </label>
        ))}
      </ul>
      {/* //disable line 44 if not click any answer it will not let go to the next question -- means disable */}
      <button className='backButton' onClick={nameHandleBackClick} disabled = {nameCurrentQuestion === 0}>Back</button>
      {/* disable use for exaplme it on question 1 we can not go back ward - back button will not show*/}
    <button className='nextButton' onClick={handleNextButton} disabled={resetSelectedOption===null}>Next</button>
    </div>
  );
};

export default AllQuestion;
