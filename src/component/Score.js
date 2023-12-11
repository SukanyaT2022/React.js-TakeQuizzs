import React from 'react'
import './Score.css'

//method one 1 to put grade
const Score = ({nameScore, nameDataScore, nameHandleResetButton }) => {

 const showGrade =(val)=>{
  return(
(val >= 9 )? "A" :
(val == 8)? " B" :
(val == 7 )? " C" :
(val == 6 )?  " D" :
 " F" )
  }
  const grade = showGrade(nameScore)

//method 2
// const gradingScale = [
//   {score: 9, grade: "A"},
//   {score: 8, grade: "B"},
//   {score: 7, grade: "C"},
//   {score: 6, grade: "D"},
//   {score: 0, grade: "F"}
// ]
// For Of Loop
// const findLetterGrade =(val)=>{
//   for(const item of gradingScale){
//     if (val >= item.score){
//       return item.grade
//     }
//   }
// }
// const userGrade = findLetterGrade(nameScore)

//method 3
// const findLetterGrade =(val)=>{
//    gradingScale.map((item)=>{
//     console.log(item.grade)

//     if (val >= item.score){
//       return item.grade
//     }else{
//       return "F"
//     }
//    })
      
//     }
  
  // const userGrade = findLetterGrade(nameScore)
  // console.log(userGrade)
  return (
    <div>
     <h4>Completed the quiz.</h4>
     <p>Your Score : {nameScore} out of {nameDataScore.length} </p>
     {/* method 1 */}
     <p>Your Grade:{grade} </p>
{/* 
     method 2 */}
     {/* <p> Your Grade: {userGrade}</p> */}
     {/* 
     method 3 */}
     {/* <p> Your Grade: {userGrade}</p> */}

     <button onClick={nameHandleResetButton} className='resetButton'>Reset</button>

    </div>
  )
}

export default Score
