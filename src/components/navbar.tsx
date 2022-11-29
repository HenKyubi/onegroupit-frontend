import { useContext } from "react";

//Libs
import { FaPlus, FaBell } from "react-icons/fa";

//Hooks
import { useModal } from "../hooks/useModal";

//Context
import { AppContext } from "../context/app/appContext";

//Components
import FormProduct from "./form-product";
import Searchbar from "./searchbar";

const Navbar = () => {
  const { appState } = useContext(AppContext);

  const [registerModalIsOpen, setRegisterModalIsOpen] = useModal();

  const username = `${appState.firstName} ${appState.lastName}`;

  return (
    <nav id="navbar">
      <Searchbar />
      <div className="navbar__options">
        <button
          className="navbar__options-btn-new-product"
          onClick={setRegisterModalIsOpen}
        >
          <div>
            <FaPlus />
          </div>
          NEW
        </button>
        <div className="navbar__options-box-notifications">
          <FaBell />
        </div>
        <div className="navbar__options-box-username">
          <span>{username}</span>
        </div>
        <div className="navbar__options-box-avatar">
          <img
            src={"https://placeimg.com/400/400/people"}
            alt={`${username} avatar`}
          />
        </div>
      </div>
      <FormProduct
        isOpen={registerModalIsOpen}
        toggleModal={setRegisterModalIsOpen}
      />
    </nav>
  );
};

export default Navbar;
