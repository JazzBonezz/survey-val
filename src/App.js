import React, { useState } from "react";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import Results from "./components/Results";
import { SurveyProvider } from "./context/SurveyContext";
import "./App.css";

function App() {
  const [showResults, setShowResults] = useState(false);

  return (
    <SurveyProvider>
      <div>
        {!showResults ? (
          <>
            <Part1 />
            <Part2 />
            <button onClick={() => setShowResults(true)}>Показать результаты</button>
          </>
        ) : (
          <Results />
        )}
      </div>
    </SurveyProvider>
  );
}

export default App;
