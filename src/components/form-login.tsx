import { useContext } from "react";
import { useNavigate } from "react-router-dom";

//Context
import { AppContext } from "../context/app/appContext";

//Toast
import { ToastContainer, toast } from "react-toastify";

//Hooks
import { useForm } from "react-hook-form";
import { useModal } from "../hooks/useModal";

//API
import { login } from "../api";

//Components
import FormRegister from "./form-register";
import { userData as UserData } from "../interfaces/types";

//Types
type formLogin = {
  email: string;
  password: string;
  keepMeSignedIn: boolean;
};

const FormLogin = () => {
  const { setUserData } = useContext(AppContext);

  const [registerModalIsOpen, setRegisterModalIsOpen] = useModal();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<formLogin>();

  const toastError = (message: string) => toast.error(message);

  const saveSession = (keepSession: boolean, userData: UserData) => {
    if (keepSession) {
      localStorage.setItem("authData", JSON.stringify(userData));
      setUserData(userData);
    } else {
      sessionStorage.setItem("authData", JSON.stringify(userData));
      const lel = sessionStorage.getItem("authData");
      console.log(lel);
      setUserData(userData);
    }
  };

  const onSubmit = async (data: formLogin) => {
    await login(data.email, data.password)
      .then((res) => {
        if (res?.userData === null) {
          toastError(res.message);
        } else {
          saveSession(data.keepMeSignedIn, res.userData);
          navigate("/products")
        }
      })
      .catch((error) => toastError(error));
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
          {...register("password", { required: true })}
          required
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
      <FormRegister
        isOpen={registerModalIsOpen}
        toggleModal={setRegisterModalIsOpen}
      />
      <ToastContainer autoClose={1500} />
    </form>
  );
};

export default FormLogin;
