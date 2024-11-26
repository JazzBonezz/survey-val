import React from "react";
import { useSurvey } from "../context/SurveyContext";

const Results = () => {
  const { calculateScore, answers } = useSurvey();

  return (
    <div>
      <h1>Результаты</h1>
      <ul>
        {Object.entries(answers).map(([question, score], index) => (
          <li key={index}>
            <strong>{question}:</strong> {score}
          </li>
        ))}
      </ul>
      <h2>Общее количество баллов: {calculateScore()}</h2>
    </div>
  );
};

export default Results;
