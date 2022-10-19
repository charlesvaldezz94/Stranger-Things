import React, { useState, useEffect } from "react";
import {NavLink} from "react-router-dom";
import './Navbar.css'

import Login from "./Login";

import {
  storeCurrentUser,
  clearCurrentUser
} from '../auth';
import { getUser } from "../API";

const Navbar = ({
  currentUser,
  setCurrentUser
}) => {
  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    const user = getUser()
    setSelectedUser(user)
  }, []
  ) //Placeholder for the useEffect 

  return (
  <header> Welcome to Stranger's Things 
  <div id="Navbar">
    <h2> Navbar </h2>
    <Login/>
  </div>
  </header>
  );
};

export default Navbar;
