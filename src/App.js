import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Krakow" />
        <footer>
          This project was coded by Anita Czajka and is{" "}
          <a
            href="https://github.com/anitaczajka/react_weather_project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
