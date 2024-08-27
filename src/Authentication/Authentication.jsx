import React from "react";
import "./Authentication.css";
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";
const Authentication = () => {
  const [active, setActive] = useState("signup");
  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };
  return (
    <div className="authentication">
      <div className="auth__left">
        <img
          src="https://i.imgur.com/P3Vm1Kq.png"
          alt="isntagram-login-image"
        />
      </div>
      <div className="auth__right">
        {active === "login" ? <Login /> : <Signup setActive={setActive} />}

        <div className="auth__signup">
          <span>
            {active === "login" ? (
              <>
                Don't have an account?
                <button onClick={handleChange}>Sign up</button>
              </>
            ) : (
              <>
                Have an Account? <button onClick={handleChange}>Log in</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
