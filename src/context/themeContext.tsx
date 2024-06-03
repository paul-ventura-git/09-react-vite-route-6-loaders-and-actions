import React, { useState } from 'react';

// Define the shape of the context data
interface ThemeContextType {
  currentTheme: string;
  toggleTheme: () => void;
}

interface Props {
  children: React.ReactNode;
}

// Create the context with a default value
export const ThemeContext = React.createContext<ThemeContextType>({
  currentTheme: 'light',
  toggleTheme: () => {},
});

// Create a provider component
export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme1 = () => {
    console.log("It fucking works!")
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ 
      currentTheme: theme, 
      toggleTheme: toggleTheme1 }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider