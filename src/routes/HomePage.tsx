import React from 'react'
import { useLoginContext } from '../context/LoginContext';

function HomePage() {
  const [user, setUser] = useLoginContext();

  function handleLogOut(){
    if (user) {
      setUser("")    
      console.log("User successfully deleted.")  
    } else {
      console.log("User doesn't exists.")
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