import React from "react";

const StartQuiz = (props) => {
  return (
    <React.Fragment>
      <h1>Marketo Certification Practice Quiz</h1>
      <p>
        The following practice quiz is a compilation of questions that will
        serve as an supplement to your studying.
      </p>
      <button onClick={props.start}>Start Quiz</button>
    </React.Fragment>
  );
};

export default StartQuiz;
