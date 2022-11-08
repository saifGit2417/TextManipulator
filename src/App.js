import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbarboot from './Components/Navbar';
import Textarea from './Components/Textarea';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Aboutus from './Components/Aboutus';
import Alertcode from './Components/Alert';




function App() {

  let [mode, setmode] = useState("light");
  const [buttontext, buttontextset] = useState("Enable Dark Mode")
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark")
      buttontextset("Enable Light Mode")
      showalert("Dark Mode Has Been Enabled", "Success")
      document.body.style.backgroundColor = "#a4b0be"
      document.body.style.color = "white"
    } else {
      setmode("light")
      buttontextset("Enable Dark Mode");
      showalert("Light Mode Has Been Enabled", "Success")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  }

  const [alertmsg, setalertmsg] = useState(null)

  const showalert = (msg, typeofmsg) => {
    setalertmsg({
      msg: msg,
      typeofmsg: typeofmsg
    })
    setTimeout(() => {
      setalertmsg(null)
    }, 1000);

  }
  return (
    <div>
      <Navbarboot Name="Text-Manipulator" Home="Home" About="About" Contact="Contact Us" mode={mode} togglemode={togglemode} buttontext={buttontext} />
      <Alertcode alertmsg={alertmsg} />
      <Routes>
        <Route path="/" element={<Textarea mode={mode} showalert={showalert} />} />
        <Route path="about" element={<Aboutus />} />
      </Routes>

    </div>
  )
}

export default App;
