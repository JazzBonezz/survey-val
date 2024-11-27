import React, { useEffect, useState } from "react";
import { useSurvey } from "../context/SurveyContext"; // Подключаем контекст
import ProgressBar from "./ProgressBar"; // Импортируем прогресс-бар
import "./Results.css";

const Results = () => {
  const { totalScore, getRiskLevelText } = useSurvey(); // Получаем данные из контекста
  const MAX_SCORE = 52.5; // Максимальный балл

  return (
    <div className="resultStyle" style={{ textAlign: "center" }}>
      <h1>Ваши результаты</h1>
      {/* Отображаем прогресс-бар */}
      <ProgressBar currentScore={totalScore} maxScore={MAX_SCORE} />

      <p>Общее количество баллов: {totalScore.toFixed(2)} из {MAX_SCORE}</p>
      {/* Отображаем текст уровня риска */}
      <p>{getRiskLevelText()}</p>
    </div>
  );
};

export default Results;
