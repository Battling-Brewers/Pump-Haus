import React from "react";
import QuizData from "../components/Quiz";
import Bmi from "../components/Quiz/bmi";
const Quiz = () => {
  return (
    <div className="container">
      <div className="row col s12">
        <QuizData />
      </div>
      <div className="row col s12">
        <Bmi />
      </div>
    </div>
  );
};

export default Quiz;
