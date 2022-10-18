import React, { useState, useEffect } from "react";
import {NavLink} from "react-router-dom";
import './Navbar.css'

import {
  storeCurrentUser,
  clearCurrentUser
} from '../auth';

const Navbar = ({
  currentUser,
  setCurrentUser
}) => {
  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    setSelectedUser([])
  }, []
  ) //Placeholder for the useEffect 

  return (
  <header> Welcome to Stranger's Things 
  <div id="Navbar">
    <h2> Navbar </h2>
  </div>
  </header>
  );
};

export default Navbar;
