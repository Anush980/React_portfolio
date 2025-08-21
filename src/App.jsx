import React from 'react';
import "./App.css";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";


function App() {
  
  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <div id="home" ><Home /></div>
        <div id="about" ><About /></div>
        <div id="education" ><Education /></div>
        <div id="skills"><Skills /></div>
        <div id="contact"><Contact /></div>
      </div>
    </>
  );
}

export default App;
