import React, { createContext, useContext, useState } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  loginUser: () => void;
  logoutUser: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);
export const useAuth = (): AuthContextProps => {
  let context = useContext(AuthContext);
  context = {isAuthenticated:true, loginUser: () => (console.log("yay1")), logoutUser: () => (console.log("yay2"))}
  console.log(context); // undefined
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};

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
      loginUser, 
      logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

