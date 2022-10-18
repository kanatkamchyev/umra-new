import React from 'react'
import QuestionBackground from '../../assets/imgs/Group.png'
import './question.css'

const Question = () => {
  return (
    <div className='question' style={{backgroundImage: `url(${ QuestionBackground })`}}> 
      <div className="container">
        <div className="question-wrapper">
        <div className="question-wrapper__usually">
        Часто задаваемые вопросы
        </div>
        </div>
      </div>
    </div>
  )
}

export default Question
