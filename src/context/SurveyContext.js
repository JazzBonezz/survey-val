import React, { createContext, useState, useEffect, useContext } from "react";

const SurveyContext = createContext();

export const useSurvey = () => useContext(SurveyContext);

export const SurveyProvider = ({ children }) => {
    const [answers, setAnswers] = useState(() => {
      const saved = localStorage.getItem("surveyAnswers");
      return saved ? JSON.parse(saved) : {};
    });
  
    const updateAnswer = (question, value) => {
      const parsedValue = parseFloat(value) || 0; // Преобразование в число или 0
      const updatedAnswers = { ...answers, [question]: parsedValue };
      setAnswers(updatedAnswers);
      localStorage.setItem("surveyAnswers", JSON.stringify(updatedAnswers));
    };
  
    const calculateScore = () =>
      Object.values(answers).reduce((total, value) => total + (value || 0), 0); // Учитываем пустые значения как 0
  
    return (
      <SurveyContext.Provider value={{ answers, updateAnswer, calculateScore }}>
        {children}
      </SurveyContext.Provider>
    );
  };