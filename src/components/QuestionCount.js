import React from "react";

const QuestionCount = (props) => {
  return (
    <div className="question-count">
      <span>Question {props.currentQuestion + 1}</span>/{props.questions.length}
    </div>
  );
};

export default QuestionCount;
