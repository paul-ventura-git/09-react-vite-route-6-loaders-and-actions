/* eslint-disable @typescript-eslint/ban-types */
import { createContext, useContext } from "react";
import { PropsWithChildren, useState } from "react";

type ContextType = [
  string, 
  (user: string) => void
];
 
export const LoginContext = createContext<ContextType | undefined>(undefined);

export const useLoginContext = () => {
  const context = useContext(LoginContext);
 
  if (!context) {
    throw new Error("useLoginContext must be used inside the LoginProvider");
  }
 
  return context;
};

export const LoginProvider = ({ children }: PropsWithChildren<{}>) => {
  const value = useState("default");
  console.log(value)
  return (
    <LoginContext.Provider 
      value={value}
    >
      {children}
    </LoginContext.Provider>
  );
};
