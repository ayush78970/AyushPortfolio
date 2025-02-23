const ThemeToggle = ({ darkMode, toggleTheme }) => {
    return (
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    );
  };
  
  export default ThemeToggle;