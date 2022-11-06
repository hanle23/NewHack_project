import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [defaultMode, setdefaultMode] = useState('login');

  const toggleForm = (formName) => {
    setdefaultMode(formName);
  }

  return (
    <div className="App">
      {
        defaultMode === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;