import React from "react";
import { useSurvey } from "../context/SurveyContext";

const Opros = ({ name, type = "text", text }) => {
  const { updateAnswer } = useSurvey();

  const handleChange = (e) => {
    updateAnswer(name, e.target.value);
  };

  return (
    <div className="opros">
      <h3 className="question-title">{name}</h3>
      <input
        type={type}
        placeholder={text}
        className="input-field"
        onBlur={handleChange}
      />
    </div>
  );
};

export default Opros;
