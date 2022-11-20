import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonLogin from "./button-login";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSession, setKeepSession] = useState(false);
  return (
    <div id="form__login">
      <h3 className="form__login-title">Enter your credentials</h3>
      <div className="form__login-email">
        <label htmlFor="email-input">Email Address</label>
        <input
          id="email-input"
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
      </div>
      <div className="form__login-password">
        <div className="form__login-password-title">
          <label htmlFor="password-input">Password</label>
          <a href="password-recovery">Forgot password?</a>
        </div>
        <input
          id="password-input"
          type="password"
          placeholder="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <div className="form__login-remember-me">
        <input
          id="rememberme-input"
          type="checkbox"
          checked={keepSession}
          onChange={() => setKeepSession(!keepSession)}
        />
        <label htmlFor="rememberme-input">Keep me signed in</label>
      </div>
      <ButtonLogin
        username={email}
        password={password}
        className="form__login-btn-login"
      />
      <div className="form__login-signup">
        <span>Not a member? </span>
        <Link to={`register`}>Sign up</Link>
      </div>
    </div>
  );
};

export default FormLogin;
