import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Import Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { loadFull } from "tsparticles";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";


// Main App Component
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
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