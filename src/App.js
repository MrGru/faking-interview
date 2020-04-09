import React from "react";
import "./App.css";
import data from "./mock";

function App() {
  return (
    <div>
      {data.map((value, index) => {
        return (
          <div className="card" key={index}>
            <p className="container">{value.question}</p>
            <p className="container">{value.answer}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
