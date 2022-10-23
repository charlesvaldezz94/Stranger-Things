import React, {useState} from 'react'
import {createUser} from '../API'
import { NavLink } from 'react-router-dom';
 
const Register = () => {
    const [newLogin, setNewLogin] = useState("");
    const [newPassword, setNewPassword] = useState("");
 
    async function handleSubmit(e){
        e.preventDefault()
        console.log(e.target, 'handleSubmit')
        const newUser = await createUser(newLogin, newPassword)
        console.log(newUser, 'hello')
        const token = newUser
        localStorage.removeItem('token')
        localStorage.setItem('token', token)
       
       
            }
     
    return(
        <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newUsername"></label>
        <input
          defaultValue={newLogin}
          onChange={(e) => { console.log(e.target)
            setNewLogin(e.target.value)}
          }
             
          type="text"
          placeholder="Create a Username here."
          id="username"
          name="username"
        />
        <label htmlFor="newPassword"></label>
        <input
          defaultValue={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          type="password"
          placeholder="******"
          id="password"
          name="password"
        />
        <button type="submit"> Create Account </button>
      </form>
          <NavLink
            to="/Login"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "black",
            })}
          >
            Already have an account? Log in
          </NavLink>
    </>
    )
}
export default Register