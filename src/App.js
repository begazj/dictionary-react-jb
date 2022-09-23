import React from "react";

import Dictionary from "./Dictionary.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="containter">
        <h2 className="title">Dictionary App</h2>
        <main>
          <Dictionary defaultKeyword="design" />
        </main>

        <footer className="App-footer">
          <small>
            This project was coded by Jen Begazo and is{" "}
            <a
              href="https://github.com/begazj/dictionary-react-jb"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>{" "}
            on GitHub.
          </small>
        </footer>
      </div>
    </div>
  );
}
