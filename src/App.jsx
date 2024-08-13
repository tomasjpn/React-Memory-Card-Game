import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="gameBoard">
        <div className="scoreBoard">
          <p>Score: 0</p>
          <p>Score Streak: 0</p>
        </div>
        <div className="cards">
          <div
            className="singleCard"
            style={{
              width: "160px",
              height: "200px",
              backgroundColor: "lightblue",
              margin: "5px",
              borderRadius: "10px",
            }}
          ></div>
          <div
            className="singleCard"
            style={{
              width: "160px",
              height: "200px",
              backgroundColor: "lightblue",
              margin: "5px",
              borderRadius: "10px",
            }}
          ></div>
          <div
            className="singleCard"
            style={{
              width: "160px",
              height: "200px",
              backgroundColor: "lightblue",
              margin: "5px",
              borderRadius: "10px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
