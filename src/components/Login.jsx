import React, { useState, useEffect } from "react";

const Login = () => {
    const [login, setLogin] = useState([])



    return(
        <form id='Login'>
            <span>Username: </span><input type='text' id='Username' name="Username" placeholder='Username' required></input>
      <span>Password: </span><input type='text' id='Password' name='Password' placeholder='Password' required></input>
      <input type='button' id='Login' name='Login' value='Login'></input>
        </form>

    )
}


export default Login