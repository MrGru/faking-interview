import React from "react";
import "./App.css";
import data from "./mock";
import Card from "./component/Card";
import Header from "./container/Header";
import Footer from "./container/Footer";

function App() {
  console.log("render App");
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="topnav">
        <a href="123">Link 1</a>
        <a href="123">Link 2</a>
        <a href="123">Link 3</a>
        <a href="123" style={{ float: "right" }}>
          Search
        </a>
      </div>

      <div className="row">
        <div className="leftcolumn">
          {data.map((value, index) => {
            return <Card key={index} index={index} value={value} />;
            // return Card({ key: { index }, value: { value } });
          })}
        </div>
        <div className="rightcolumn">
          <p>abac</p>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
