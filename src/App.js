import React, { useState } from "react";
import { myQuestions as questions } from "./helpers/helpers";
import Questions from "./components/Questions";
import Score from "./components/Score";
import StartQuiz from "./components/StartQuiz";

import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState([]);
  const [playable, setPlayable] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  let showScore;

  const clickAnswerHandler = (isCorrect) => {
    if (isCorrect) {
      setScore((previousValue) => {
        return previousValue + 1;
      });
    }

    setResponses((previousValue) => {
      let value = isCorrect ? "Correct" : "Wrong";
      return [...previousValue, value];
    });

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setPlayable(false);
    }
  };

  const startQuizHandler = () => {
    setStartQuiz(true);
    restartHandler();
  };

  const restartHandler = () => {
    setPlayable(true);
    setScore(0);
    setCurrentQuestion(0);
    setResponses([]);
  };

  return (
    <div className="app">
      {!startQuiz && <StartQuiz start={startQuizHandler}></StartQuiz>}

      {!playable && startQuiz && (
        <Score
          score={score}
          questions={questions}
          responses={responses}
          restart={restartHandler}
        ></Score>
      )}

      {playable && (
        <React.Fragment>
          <Questions
            currentQuestion={currentQuestion}
            questions={questions}
          ></Questions>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, i) => {
              return (
                <button
                  key={i}
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
