import React, { useState, useEffect } from "react";

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(login);
    // console.log(password);
}

  return (
    <>
    <form onSubmit= {handleSubmit}>
      <label for="username"></label>
      <input
        defaultValue = {login}
        onChange={(e) => setLogin(e.target.value)}
        type="text"
        placeholder="Enter your Username here."
        id="username"
        name="username"
      />
      <label for="password"></label>
      <input
        defaultValue = {password}
         onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="******"
        id="password"
        name="password"
      />
      <button type="submit"> Log In </button>
    </form>
    <button> Don't have an account? Register here! </button>
    </>
  );
};

export default Login;
