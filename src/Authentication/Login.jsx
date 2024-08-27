import React, { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../app/slices/usersSlice";
import { setAuth } from "../app/slices/authSlice";

const Login = () => {
  const users = useSelector(getUsers)
  const dispatch = useDispatch()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    const user = users.find(u => (u.username === username || u.email === username) && u.password === password)
    
    if (!user) {
      alert('Wrong username/password')
      return
    }
    
    dispatch(setAuth(user))
  }

  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://freelogopng.com/images/all_img/1658587465instagram-name-logo.png"
        alt="instagram-main-logo"
      />

      <div className="login__inputs">
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Phone number, username or email address"
          value={username}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          value={password}
        />
      </div>

      <button className="login__button" onClick={login}>Log in</button>
    </div>
  );
};

export default Login;
