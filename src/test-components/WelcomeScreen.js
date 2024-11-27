// src/components/WelcomeScreen.js
import React from "react";

const WelcomeScreen = ({ onStartTest }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
        textAlign: "center",
      }}
    >
      <h1>Тест на здоровье</h1>
      <p>Пройдите тест, чтобы узнать больше о своем здоровье!</p>
      <button
        onClick={onStartTest}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Начать тест
      </button>
    </div>
  );
};

export default WelcomeScreen;
