import React, { useState } from "react";
import "./Signup.css";
import { useDispatch } from "react-redux";
import { createUser } from "../app/slices/usersSlice";

const Signup = ({ setActive }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const data = {
      username: username.trim(),
      email: email.trim(),
      password,
    };

    const entries = Object.entries(data);

    for (let i = 0; i < entries.length; i++) {
      const [key, value] = entries[i];
      if (!value) {
        alert(`${key} required`);
        return;
      }
    }

    dispatch(createUser(data));
    setActive("login");
  };

  return (
    <div className="signup">
      <img
        className="signup__logo"
        src="https://freelogopng.com/images/all_img/1658587465instagram-name-logo.png"
        alt="instagram-main-logo"
      />

      <div className="signup__inputs">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="email"
          value={email}
        />
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <button className="signup__button" onClick={handleSignup}>
        Signup
      </button>
    </div>
  );
};

export default Signup;
