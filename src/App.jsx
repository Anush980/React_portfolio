import 'aos/dist/aos.css';
import { useEffect } from 'react';
import React from 'react';
import "./App.css";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";
import AOS from "aos";


function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);
  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <div id="home" data-aos="fade-down"><Home /></div>
        <div id="about" data-aos="fade-up"><About /></div>
        <div id="education" data-aos="fade-up"><Education /></div>
        <div id="skills" data-aos="fade-up"><Skills /></div>
        <div id="contact" data-aos="fade-up"><Contact /></div>
      </div>
    </>
  );
}

export default App;
