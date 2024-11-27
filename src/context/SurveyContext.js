import React, { createContext, useState, useContext } from "react";

const SurveyContext = createContext();

export const useSurvey = () => useContext(SurveyContext);

export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState({}); // Инициализация состояния без использования localStorage

  // Функция для обновления ответа на вопрос
  const updateAnswer = (question, value) => {
    const parsedValue = parseFloat(value) || 0; // Преобразование в число или 0
    const updatedAnswers = { ...answers, [question]: parsedValue };
    setAnswers(updatedAnswers); // Обновление состояния
  };

  // Функция для расчета общего балла
  const calculateScore = () =>
    Object.values(answers).reduce((total, value) => total + (value || 0), 0); // Учитываем пустые значения как 0

  // Вычисляем общий балл
  const totalScore = calculateScore();

  // Функция для получения уровня риска на основе процента от максимального балла
  const getRiskLevelText = () => {
    const percentage = (totalScore / 52.5) * 100; // Максимальный балл 52.5
    if (percentage <= 30) {
      return "Низкий риск: Рекомендации касаются только образа жизни";
    } else if (percentage <= 70) {
      return "Высокий риск: Рекомендации обратиться к врачу и скорректировать образ жизни";
    } else {
      return "Очень высокий риск: Настоятельно рекомендовано обратиться к врачу в ближайшее время!";
    }
  };

  return (
    <SurveyContext.Provider value={{ answers, updateAnswer, calculateScore, totalScore, getRiskLevelText }}>
      {children}
    </SurveyContext.Provider>
  );
};
