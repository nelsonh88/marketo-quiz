import React, { useState } from "react";

const Score = ({ score, questions, responses, restart }) => {
  const [reviewAnswers, setReviewAnswers] = useState(false);
  const reviewAnswersHandler = () => {
    setReviewAnswers(true);
  };
  console.log(questions);

  let userAnswers = responses.map((response, i) => {
    return (
      <li className={response.isCorrect ? "correct" : "incorrect"} key={i}>
        <strong>Your Answer:</strong> {response.answerText}
      </li>
    );
  });

  let showQuestion = questions.map((question, i) => {
    return (
      <p>
        {i + 1}. {question.question}
        <ul>{userAnswers[i]}</ul>
      </p>
    );
  });

  return (
    <div>
      {reviewAnswers ? (
        <div className="responses">
          <h2>Review your answers below:</h2>
          {showQuestion}

          {/* <ol>
            {responses.map((response, i) => {
              return <li key={i}>{response.toString()}</li>;
            })}
          </ol> */}
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
