"use client";

import { createContext, useEffect, useState } from "react";

const getFromLocalStorage = () => {
  // Use this if condition to make sure that the server component of next is converted to client component first as localStorage is only available in the client browser and not the server.
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
