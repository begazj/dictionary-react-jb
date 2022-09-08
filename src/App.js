import React from "react";

import Dictionary from "./Dictionary.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="containter">
        <main>
          <Dictionary />
        </main>

        <footer className="App-footer">
          <small>Coded by Jen Begazo</small>
        </footer>
      </div>
    </div>
  );
}
