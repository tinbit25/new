import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isDarkMode, toggleTheme, isLoggedIn, onLogin, onLogout }) => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b shadow-md">
      {/* Logo/Title Section */}
      <h1 className="text-2xl font-semibold text-gray-800">Pomodoro Timer</h1>

      {/* Theme Toggle and Authentication Section */}
      <div className="flex items-center space-x-6">
        {/* Theme Toggle Button */}
        <button
          className={`p-2 rounded-full ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"}`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>

        {/* Authentication Button (Login/Logout) */}
        {isLoggedIn ? (
          // Displaying Logout Button but Routing to /logout
          <Link to="/logout">
            <button
              className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={onLogout}
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={onLogin}
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
