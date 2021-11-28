import React from "react";
import QuizData from "../components/Quiz"
import Bmi from "../components/Quiz/bmi";
const Quiz = () => {
    return (
      <div className="container">
          <QuizData />
          <Bmi />
      </div>
    );
  };
  
  export default Quiz;
