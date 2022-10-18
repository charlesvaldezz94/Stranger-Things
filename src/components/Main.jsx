import React, {useState} from "react";
import Navbar from "./Navbar"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const Main = () => {
  return <div id="main">
    <Navbar />
    <h1> Today's hot items </h1>
  </div>;
};

export default Main;
