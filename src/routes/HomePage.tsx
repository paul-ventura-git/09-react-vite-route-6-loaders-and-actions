import React from 'react'
import { useLoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const [user, setUser] = useLoginContext();

  function handleLogOut(){
    if (user) {
      setUser("")    
      console.log("User successfully deleted.")
      navigate('/login');  
    } else {
      console.log("User doesn't exists.")
      navigate('/login');  
    }    
  }

  return (
    <div>
      This is supposed to be protected.
      <button onClick={handleLogOut}>Log out</button>
    </div>
  )
}

export default HomePage