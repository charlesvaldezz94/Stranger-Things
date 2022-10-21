import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
 
import Login from "./Login";
 
import { storeCurrentUser, clearCurrentUser } from "../auth";
import { getUser } from "../API";
 
const Navbar = ({ currentUser, setCurrentUser }) => {
  const [selectedUser, setSelectedUser] = useState();
 
  useEffect(() => {
    async function fetchUser(){
    const user = await getUser(localStorage.token);
    setSelectedUser(user);}
    fetchUser()
  }, []); //Placeholder for the useEffect
 
  return (
    <header>
      <h1>Welcome to Stranger's Things </h1>
      <div id="Navbar">
        <h2> Menu </h2>
         <div>
        <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/Allposts"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
          >
            Posts
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/Login"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
          >
            Login
          </NavLink>
          <NavLink
            to="/Register"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
          >
            Register
          </NavLink>
        </div>
        <div>
        <h2>profile</h2>
        <button>logout</button>
        </div>
      </div>
    </header>
  );
};
 
export default Navbar;