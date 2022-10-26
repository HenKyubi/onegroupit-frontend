import React from "react";
import ButtonRegister from "../components/button-register";
import FormLogin from "../components/form-login";
import "../styles/page-login.scss";
import datos from "../users.json"

const LoginPage = () => {
  return (
    <div id="page__login">
      <div className="section__left">
        <div className="section__left___logo">logo</div>
        <div className="section__left___welcome">
          !Welcome! <br /> Sing to start
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
