import React from 'react'

import { useAuth } from '../../auth/userContext';

function LoginForm() {
  // Setting the "logged-in?" value

  const { loginUser, logoutUser } = useAuth();

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    loginUser();
    console.log("What happened?")
  }

  return (
    <div>LoginForm
      <button onClick={handleSubmit}>Log in</button>
      <button onClick={logoutUser}>Log out</button>
    </div>
  )
}

export default LoginForm