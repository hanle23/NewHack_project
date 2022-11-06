import React, { useState } from "react";
import ReactDOM from "react-dom";
import Map from "./Map";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
const locations = require("./locations.json");

export default function App() {
  const locate = locations;
  const clicked = () => {
    console.log(locations);
  };

  return (
    <div className="App">
      <div onClick={clicked()}>hello</div>
      <Map locations={locate} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
