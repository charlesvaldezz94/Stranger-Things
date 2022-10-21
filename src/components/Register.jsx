import React, {useState} from 'react'
import {createUser} from '../API'
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [newLogin, setNewLogin] = useState("");
    const [newPassword, setNewPassword] = useState("");

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   try {
    //     const token = await getUser(login, password)
    //     console.log(token)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // };

    async function handleSubmit(e){
        e.preventDefault()
        try {
        const newUser = await createUser(username, password)
        const token = newUser.token
        localStorage.removeItem('token')
        localStorage.setItem('token', token)
        console.log(token, 'token')
      } catch (error) {
        console.log(error, 'error')
      }
        

            }
     
    return(
        <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newUsername"></label>
        <input
          defaultValue={newLogin}
          onChange={(e) => setNewLogin(e.target.value)}
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
      <button>
          <NavLink
            to="/Login"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "black",
            })}
          >
            Log in
          </NavLink>
          </button>
    </>
    )
}
export default Register