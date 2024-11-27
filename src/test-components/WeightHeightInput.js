import React, { useState } from "react";
import { useSurvey } from "../context/SurveyContext";

const WeightHeightInput = () => {
  const { updateAnswer } = useSurvey();
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  // Функция для расчета ИМТ
  const calculateBMI = (weight, height) => {
    if (!weight || !height) return null; // Проверка на пустые значения
    const bmi = weight / (height * height); // Формула ИМТ: масса / (рост^2)
    return bmi;
  };

  // Функция для назначения баллов в зависимости от ИМТ
  const getBMIResult = (bmi) => {
    if (bmi < 18) return 0; // Недостаточная масса тела
    if (bmi >= 18 && bmi <= 24.9) return 0; // Норма
    if (bmi >= 25 && bmi <= 29.9) return 1; // Избыточная масса тела
    if (bmi >= 30) return 2; // Ожирение
    return 0;
  };

  const handleSubmit = () => {
    const bmi = calculateBMI(weight, height);
    const bmiPoints = bmi !== null ? getBMIResult(bmi) : 0;

    // Обновляем только баллы за ИМТ в контексте
    updateAnswer("bmiPoints", bmiPoints); // Записываем баллы за ИМТ
  };

  return (
    <div>
      <label>
        Ваш вес (кг):
        <input
          type="number"
          placeholder="Введите вес"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <label>
        Ваш рост (м):
        <input
          type="number"
          placeholder="Введите рост"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Рассчитать ИМТ</button>
    </div>
  );
};

export default WeightHeightInput;
