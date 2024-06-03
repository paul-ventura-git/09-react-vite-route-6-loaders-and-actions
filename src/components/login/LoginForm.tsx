import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

export const LoginForm: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  console.log(currentTheme)
  if (!themeContext) {
    throw new Error('UserProfile must be used within a UserProvider');
  }

  return (
    <div>
      <p>Name: {themeContext.currentTheme}</p>
      <p>Age: {themeContext.currentTheme}</p>
      <button onClick={toggleTheme}>Update Theme</button>
    </div>
  );
}

export default LoginForm