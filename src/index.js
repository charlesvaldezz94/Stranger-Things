import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom/client"
import {
  Navbar,
  Allposts,
  Login,
  Register,
  Home,
  Profile
} from "./components"

import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

import {
    getCurrentUser
  } from './auth';


const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)



const App = () => {
  const [currentUser, setCurrentUser] = useState(getCurrentUser()); 
  

  return ( 
    <Router> 
  <div id="Main">
    <Navbar
    currentUser={currentUser} />
    <div id="Content">
    <Switch>
    <Route exact path="/"> <Home /> </Route>
      <Route exact path="/Allposts"> <Allposts /> </Route>
      <Route exact path="/Register"> <Register /> </Route>
      <Route exact path="/Login"> <Login /> </Route>
      <Route exact path="/Profile"> <Profile /> </Route> 
    </Switch>
    </div> 
  </div>
  </Router>
  );
};



root.render(<App />)