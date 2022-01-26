import React, { useState } from "react";
import { myQuestions as questions } from "./helpers/helpers";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const clickAnswerHandler = (isCorrect) => {
    if (isCorrect) {
      setScore((previousValue) => {
        return previousValue + 1;
      });
      alert("You are correct");
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <React.Fragment>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => {
              return (
                <button
                  onClick={() => clickAnswerHandler(answerOption.isCorrect)}
                >
                  {answerOption.answerText}
                </button>
              );
            })}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
