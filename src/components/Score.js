import React, { useState } from "react";

const Score = ({ score, questions, responses, restart }) => {
  const [reviewAnswers, setReviewAnswers] = useState(false);
  const reviewAnswersHandler = () => {
    setReviewAnswers(true);
  };

  let userAnswers = responses.map((response, i) => {
    return (
      <li
        className={response.isCorrect ? "correct" : "incorrect"}
        key={response}
      >
        <strong>Your Answer:</strong> {response.answerText}
      </li>
    );
  });

  let showQuestion = questions.map((question, i) => {
    return (
      <React.Fragment key={i}>
        <p key={question.question}>
          {i + 1}. {question.question}
        </p>
        <ul>{userAnswers[i]}</ul>
      </React.Fragment>
    );
  });

  return (
    <div>
      {reviewAnswers ? (
        <div className="responses">
          <h2>Review your answers below:</h2>
          {showQuestion}

          <button onClick={restart}>Retake Practice Quiz</button>
        </div>
      ) : (
        <div className="score-section">
          <h2>
            You scored {score} out of {questions.length}
          </h2>
          <button onClick={reviewAnswersHandler}>Review Answers</button>
          <button onClick={restart}>Retake Practice Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Score;
