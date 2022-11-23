import React from "react";
import ButtonRegister from "../components/button-register";
import FormLogin from "../components/form-login";
import "../styles/page-login.scss";
// import datos from "../users.json";
import logo from "../assets/logo.png";
import { useModal } from "../hooks/useModal";
import ModalRegister from "../components/modal-register";

const PageLogin = () => {
  const [registerModalIsOpen, setRegisterModalIsOpen] = useModal();
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
        <div className="section__rigth-register">
          <span>No Employer account yet?</span>
          <ButtonRegister
            className="btn-register"
            onClick={setRegisterModalIsOpen}
          />
        </div>
        <div className="section__rigth-login">
          <FormLogin />
        </div>
        {/* {JSON.stringify(datos)} */}
      </div>
      <ModalRegister
        isOpen={registerModalIsOpen}
        toggleModal={setRegisterModalIsOpen}
      />
    </div>
  );
};

export default PageLogin;
