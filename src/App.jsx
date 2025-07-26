import "./App.css";

import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>


    </>
  );
}

export default App;
