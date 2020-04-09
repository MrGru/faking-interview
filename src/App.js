import React from "react";
import "./App.css";
import data from "./mock";
import Card from "./component/Card";
import Card2 from "./component/Card2";

function App() {
  console.log("render App");
  return (
    <div>
      {data.map((value, index) => {
        return <Card2 key={index} index={index} value={value} />;
        // return Card({ key: { index }, value: { value } });
      })}
    </div>
  );
}

export default App;
