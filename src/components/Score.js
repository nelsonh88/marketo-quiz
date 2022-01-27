import React, { useState } from "react";

const Score = ({ score, questions, responses }) => {
  const [reviewAnswers, setReviewAnswers] = useState(false);
  const reviewAnswersHandler = () => {
    setReviewAnswers(true);
  };

  return (
    <div>
      {reviewAnswers ? (
        <div>
          <p>Review your answers below:</p>

          <ul>
            {responses.map((response, i) => {
              return (
                <li key={i}>
                  #{i + 1}. {response.toString()}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="score-section">
          <p>
            You scored {score} out of {questions.length}
          </p>
          <button onClick={reviewAnswersHandler}>Review Answers</button>
        </div>
      )}
    </div>
  );
};

export default Score;
