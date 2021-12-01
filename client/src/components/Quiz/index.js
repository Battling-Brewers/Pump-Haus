import React, {useState} from 'react'
import  questions  from './questionsData';
import {Button} from 'react-materialize'
import "./quiz.css";
var choices = [];
const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const handleAnswerClick = (selected) => {
        const nextQuestion = currentQuestion +1
        choices.push(selected)
        if (nextQuestion < questions.length) {

			setCurrentQuestion(nextQuestion);
		} else {

		}
    }
    // const data = questions.map( (d) => d)

    return (
        <div className="quiz-content">
            <div className="quiz">
            <h1 className="">{questions[currentQuestion].question}</h1>
            </div>
            <div className="answers">
            <Button className="pulse button" onClick={() => handleAnswerClick(questions[currentQuestion].answers[0])}>{questions[currentQuestion].answers[0]}</Button>
            <Button className="pulse button" onClick={() => handleAnswerClick(questions[currentQuestion].answers[1])}>{questions[currentQuestion].answers[1]}</Button>
            </div>
        </div>
    )
}


export default Quiz;