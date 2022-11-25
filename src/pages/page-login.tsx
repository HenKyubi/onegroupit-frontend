//Hooks
import { useModal } from "../hooks/useModal";

//Components
import FormLogin from "../components/form-login";
import FormRegister from "../components/form-register";

//Assets
import logo from "../assets/logo.png";

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
          <button className="btn__secondary" onClick={setRegisterModalIsOpen}>
            Register
          </button>
        </div>
        <div className="section__rigth-login">
          <FormLogin />
        </div>
      </div>
      <FormRegister
        isOpen={registerModalIsOpen}
        toggleModal={setRegisterModalIsOpen}
      />
    </div>
  );
};

export default PageLogin;
