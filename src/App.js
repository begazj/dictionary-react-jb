import React from "react";
import background from "./background.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <img src={background} className="App-background" alt="background" />
      </div>
    </div>
  );
}
