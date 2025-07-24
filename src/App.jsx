import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./pages/Home";
import "./App.css";
import Button from "./components/Button/button";
import { cvDownload } from "./utils/cv";
import Skills from "./pages/Skills";

function App() {

  return (
    <>
      {/* <Home /> */}
      <Skills/>
      
    </>
  );
}

export default App;
