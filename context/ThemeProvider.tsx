import React, { createContext, ReactNode, useContext, useState } from "react";

type ContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ContextType | null>(null);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
