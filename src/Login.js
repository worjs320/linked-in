import React from "react";
import "./Login.css";
import LinkdinLogo from "./img/linkedinLogo.png";

function Login() {
  const loginToApp = () => {};
  const register = () => {};

  return (
    <div className="login">
      <img src={LinkdinLogo} alt="" />
      <form>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Profile pic URL" />
        <input type="Email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
