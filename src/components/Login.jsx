import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {userLogin} from "../API"
 
const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
 
  async function handleSubmit(e) {
    e.preventDefault()
    const currentUser = await userLogin(login, password)
    console.log(currentUser, 'please')
    
  }
 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
          defaultValue={login}
          onChange={(e) => setLogin(e.target.value)}
          type="text"
          placeholder="Enter your Username here."
          id="username"
          name="username"
        />
        <label htmlFor="password"></label>
        <input
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="******"
          id="password"
          name="password"
        />
        <button type="submit"> Log In </button>
      </form>
          <NavLink
            to="/Register"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "black",
            })}
          >
            Don't have an account? Register here.
          </NavLink>
    </>
  );
};
 
export default Login;
