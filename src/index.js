import React, { useState } from "react";
import ReactDOM from "react-dom";
import Map from "./Map";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Map />
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
