import React, { useState } from "react";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import Results from "./components/Results";
import { SurveyProvider } from "./context/SurveyContext";
import "./App.css";
import ParentComponent from "./components/ParentComponent";

function App() {
  const [showResults, setShowResults] = useState(false);

  return (
    <SurveyProvider>
      <div>
        {!showResults ? (
          <>
            <ParentComponent/>
            <Part1 />
            <Part2 />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
                <button onClick={() => setShowResults(true)}>Показать результаты</button>
            </div>    
            
          </>
        ) : (
          <Results />
        )}
      </div>
    </SurveyProvider>
  );
}

export default App;
