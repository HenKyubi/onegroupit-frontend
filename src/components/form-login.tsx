import { useContext } from "react";
//Context
import { AppContext } from "../context/app/app-context";

//Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Hooks
import { useForm } from "react-hook-form";
import { useModal } from "../hooks/useModal";

//API
import { login } from "../api";

//Components
import Modal from "./modal";
import { useNavigate } from "react-router-dom";

//Types
type formLogin = {
  email: string;
  password: string;
  keepMeSignedIn: boolean;
};

const FormLogin = () => {
  const { appState } = useContext(AppContext);

  const [registerModalIsOpen, setRegisterModalIsOpen] = useModal();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<formLogin>();

  const onSubmit = async (data: formLogin) => {
    await login(data.email, data.password).then((res) => {
      if (res.userData.token === null) {
        const toastError = () => toast.error(res.message);
        toastError();
      } else {
        const { id, firstName, lastName, email, token } = res.userData;
        appState.id = id;
        appState.firstName = firstName;
        appState.lastName = lastName;
        appState.email = email;
        appState.token = token;
        navigate("/products");
        console.log(appState);
      }
    });
  };

  return (
    <form id="form__login" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="form__login-title">Enter your credentials</h3>
      <div className="form__login-email">
        <label htmlFor="email-input">Email Address</label>
        <input
          id="email-input"
          type="email"
          placeholder="example@gmail.com"
          {...register("email", { required: true })}
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
          {...register("password", { required: true })}
        />
      </div>
      <div className="form__login-remember-me">
        <input
          id="rememberme-input"
          type="checkbox"
          {...register("keepMeSignedIn")}
        />
        <label htmlFor="rememberme-input">Keep me signed in</label>
      </div>
      <input type="submit" value="LOGIN" className="btn__primary" />
      <div className="form__login-signup">
        <span>Not a member? </span>
        <span
          className="form__login-signup-signup"
          onClick={setRegisterModalIsOpen}
        >
          Sign up
        </span>
      </div>
      {/* <Modal
        isOpen={registerModalIsOpen}
        toggleModal={setRegisterModalIsOpen}
      ></Modal> */}
      <ToastContainer autoClose={1500} />
    </form>
  );
};

export default FormLogin;
