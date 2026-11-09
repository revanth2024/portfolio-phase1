import React, { useEffect, useState } from "react";
import "./ColorTheme.scss";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";

const ColorTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-icon"
      type="button"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? (
        <BsMoonStarsFill />
      ) : (
        <IoSunnyOutline className="dark-icon" />
      )}
    </button>
  );
};

export default ColorTheme;
