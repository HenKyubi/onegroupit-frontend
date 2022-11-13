import React from "react";
import ButtonRegister from "../components/button-register";
import FormLogin from "../components/form-login";
import "../styles/page-login.scss";
import datos from "../users.json";
import logo from '../assets/logo.png'

const LoginPage = () => {
  return (
    <div id="page__login">
      <div className="section__left">
        <div className="section__left-logo">
          <img src={logo} alt="One group it logo" />
        </div>
        <div className="section__left-welcome">
          <h2>
            !Welcome! <br /> Sing to start
          </h2>
        </div>
      </div>
      <div className="section__rigth">
        <div className="section__rigth___register">
          <span>No Employer account yet?</span>
          <ButtonRegister />
        </div>
        <div className="section__rigth___login">
          <FormLogin />
        </div>
        {JSON.stringify(datos)}
      </div>
    </div>
  );
};

export default LoginPage;
