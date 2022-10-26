import React, { useState } from "react";
import ButtonLogin from "./button-login";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSession, setKeepSession] = useState(false);
  return (
    <div id="form__login">
      <div>Enter your credentials</div>
      <label>
        Email
        <input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </label>
      <label>
        Keep me signed in
        <input type="checkbox" checked={keepSession} onChange={()=>setKeepSession(!keepSession)} />
      </label>
      <ButtonLogin username={email} password={password} />
      <div>
        <span>Not a member? </span><a href="/register">Sign up</a>
      </div>
    </div>
  );
};

export default FormLogin;
