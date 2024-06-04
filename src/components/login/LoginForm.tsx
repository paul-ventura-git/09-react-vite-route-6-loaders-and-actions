/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useLoginContext();
  console.log(user);

  const [inputs, setInputs] = useState({username: "", password: ""});

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    console.log(name)
    console.log(value)
    console.log(inputs)
  }

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const my_key = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN;
    console.log(my_key);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer "+my_key);
    /*
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    */
    fetch("http://localhost:3000/user", {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    })
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .then((data) => {
      console.log(data)
      
      const exists = data.some((elem: { email: any; password: any; })=>{
        if(inputs.username===elem.email && inputs.password===elem.password){
        //console.log(elem.email)  
        //console.log(elem.password)  
        //if (inputs.username===elem.email){
          alert("Logged in successfully!");
          navigate("/home");
          setUser(elem.email);       
          return true   
        }        
      })
      if (exists===false) { 
        alert("Wrong username or password")
      }
      return false
    })
    .catch((error) => console.error(error));    
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input name="username" type="email" onChange={handleChange}></input><hr></hr>
        <label>Password: </label>
        <input name="password" type="password" autoComplete="on" onChange={handleChange}></input><hr></hr>
        <button type="submit">
          Toggle User
        </button>
      </Form>
    </div>
  );
}

export default LoginForm