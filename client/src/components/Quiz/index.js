import React, { useState } from "react";
import questions from "./questionsData";
import { Button } from "react-materialize";
import "./quiz.css";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../Utils/queries";

var choices = [];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleAnswerClick = (selected) => {
    const nextQuestion = currentQuestion + 1;
    choices.push(selected.value);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      console.log(choices)
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  let productsAll = [];
  if (data) {
    data.products.map((product) => {
      productsAll.push(product);
    });
  }

  let productsToRender = [];

  // if (choices[idx] === true ) {
  //   return productsAll[0]
  // } else {

  // }
    for ( let i = 0; i < choices.length; i++) {
        choices[i] === true ? productsToRender.push(productsAll[(i+1)*2]) : productsToRender.push(productsAll[(i+1)*3])
    } 

    console.log()

  return (
    <div>
      {currentQuestion < questions.length ? (
        <div className="quiz-content">
          <div className="quiz">
            <h1 className="currentQuestion">{questions[currentQuestion].question}</h1>
          </div>
          <div className="answers">
            <Button
              className="pulse button"
              value="true"
              onClick={() =>
                handleAnswerClick(questions[currentQuestion].answers[0])
              }
            >
              {questions[currentQuestion].answers[0]}
            </Button>
            <Button
              className="pulse button"
              value="false"
              onClick={() =>
                handleAnswerClick(questions[currentQuestion].answers[1])
              }
            >
              {questions[currentQuestion].answers[1]}
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Recommended Products</h1>
        </div>
      )}
    </div>
  );
};

export default Quiz;
