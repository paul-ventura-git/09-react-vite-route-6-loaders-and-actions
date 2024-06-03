import React, { createContext, useContext, useState } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  loginUser: () => void;
  logoutUser: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  loginUser: () => {console.log("yay1")},
  logoutUser: () => {console.log("yay2")}
 });

/**
 * This is to "read" the CONTEXT VARIABLES
 * @returns 
 */

export const useAuth = (): AuthContextProps => {
  //const context = useContext(AuthContext);
  //console.log(context); // undefined
  //if (!context) {
  //  throw new Error('useAuth must be used within an AuthProvider');
  //}  
  //return context;
  return useContext(AuthContext);
};

export function useLoginContext() {
  return useContext(AuthContext);
}
/**
 * This is to "apply" the functions, and read the context STATES
 * @param param0 
 * @returns 
 */
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginUser = () => {
    // Perform authentication logic
    setIsAuthenticated(true);
    console.log("In context isAuthenticated: "+isAuthenticated)
  };

  const logoutUser = () => {
    // Perform logout logic
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      loginUser: loginUser, 
      logoutUser: logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

