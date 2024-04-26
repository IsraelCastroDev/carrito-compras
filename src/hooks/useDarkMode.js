import { useContext } from "react";
import { DarkModeContext } from "../context/darkMode";

export function useDarkMode() {
  const darkModeContext = useContext(DarkModeContext);

  if (darkModeContext === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }

  const { stateDarkMode, toggleDarkMode } = darkModeContext;

  return { stateDarkMode, toggleDarkMode };
}
