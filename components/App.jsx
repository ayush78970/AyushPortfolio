import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Import Components
import Navbar from "./Navbar";
import Hero from "./Hero";
import { loadFull } from "tsparticles";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Services from "./Services";
// import Blog from "./Blog";
import Contact from "./Contact";
import ThemeToggle from "./ThemeToggle";


// Main App Component
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} /> */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      {/* <Blog /> */}
      <Contact />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);