import React from 'react'

import { AuthProvider, useAuth } from '../../auth/userContext';

function LoginForm() {
  // Setting the "logged-in?" value

  const { loginUser, logoutUser } = useAuth();

  return (
    <AuthProvider>
      <div>LoginForm
        <button onClick={loginUser}>Log in</button>
        <button onClick={logoutUser}>Log out</button>
      </div>
    </AuthProvider>
  )
}

export default LoginForm