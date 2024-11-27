// src/components/HealthTest.js
import React, { useState } from "react";
import WelcomeScreen from "./WelcomeScreen"; // Импортируем компонент приветственного окна

const HealthTest = () => {
  const [showTest, setShowTest] = useState(false); // Управляем состоянием отображения теста

  // Функция для старта теста
  const startTest = () => {
    setShowTest(true); // Показываем тест
  };

  return (
    <div>
      {!showTest ? (
        <WelcomeScreen onStartTest={startTest} /> // Если тест не начался, показываем WelcomeScreen
      ) : (
        <div>
          <h2>Начинаем тест!</h2>
          {/* Добавьте сюда ваши вопросы и форму для теста */}
        </div>
      )}
    </div>
  );
};

export default HealthTest;
