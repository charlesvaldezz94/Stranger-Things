import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {getUser} from '../API';

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await getUser(login, password)
      console.log(token)
    } catch (error) {
      console.log(error)
    }
  };

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
      <button>
          <NavLink
            to="/Register"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "black",
            })}
          >
            Register
          </NavLink>
          </button>
    </>
  );
};

export default Login;
