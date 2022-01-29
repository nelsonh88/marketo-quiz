import React from "react";

const StartQuiz = (props) => {
  return (
    <div className="start-quiz">
      <h1>Marketo Certification Practice Quiz</h1>
      <div className="divider"></div>
      <p>
        The following practice quiz is a compilation of questions that will
        serve as an supplement to your studying.
      </p>
      <button onClick={props.start}>Start Quiz</button>
    </div>
  );
};

export default StartQuiz;
