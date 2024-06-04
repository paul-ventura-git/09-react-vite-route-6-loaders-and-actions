/* eslint-disable @typescript-eslint/ban-types */
import { createContext, useContext } from "react";
import { PropsWithChildren, useState } from "react";

type ContextType = [string, (theme: string) => void];
 
export const ThemeContext = createContext<ContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
 
  if (!context) {
    throw new Error("useThemeContext must be used inside the ThemeProvider");
  }
 
  return context;
};

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const value = useState("");
 
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

