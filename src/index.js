import React, { useState } from "react";
import ReactDOM from "react-dom";
import Menu from "./components/menu";
import History from "./components/history";
import Message from "./components/foundMessage";
import Map from "./Map";
import { BrowserRouter } from "react-router-dom";
import "./styles/secondary.css";
import "./styles/menu.css";

export default function App() {
  return (
    <div className="App">
      <Menu />
      <Map />
      <History />
      <Message />
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
