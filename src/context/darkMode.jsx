import { useReducer } from "react";
import { createContext } from "react";
import { darkModeInitialState, darkModeReducer } from "../reducers/darMode";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [state, dispatch] = useReducer(darkModeReducer, darkModeInitialState);

  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  return (
    <DarkModeContext.Provider
      value={{
        stateDarkMode: state,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}
