import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      typ: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const handleToggle = (e) => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert(" Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enabled", "success");
    }
  }

  return (

    <>
      <Router>

        <Navbar title="Textutils" aboutText="About Us" toggle={handleToggle} Mode={Mode} alert={alert} />
        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route path="/"
              element={<TextForm h1="Enter the text below to Convert " Mode={Mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
