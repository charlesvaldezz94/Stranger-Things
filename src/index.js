import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom/client"
import {Navbar} from "./components"

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';

import {
    getCurrentUser
  } from './auth';


const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)


const App = () => {
    const [currentUser, setCurrentUser] = useState(getCurrentUser()); 
    
    return <div id="App">
      <Navbar
      currentUser={currentUser} />
      <h1> Today's hot items </h1>
    </div>;
  };


root.render(<App />)