import React from "react";

import QuestionCount from "./QuestionCount";

const Questions = (props) => {
  return (
    <div className="question-section">
      <QuestionCount
        currentQuestion={props.currentQuestion}
        questions={props.questions}
      ></QuestionCount>
      <div className="question-text">
        {props.questions[props.currentQuestion].question}
      </div>
    </div>
  );
};

export default Questions;
