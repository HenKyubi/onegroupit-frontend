import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//Libs
import { FaPlus, FaBell, FaPowerOff } from "react-icons/fa";

//Hooks
import { useModal } from "../hooks/useModal";

//Context
import { AppContext } from "../context/app/appContext";

//Components
import FormProduct from "./form-product";
import Searchbar from "./searchbar";

const Navbar = () => {
  const { appState, closeSession } = useContext(AppContext);

  const [toggle, setToggle] = useState<boolean>(false);

  const [registerModalIsOpen, setRegisterModalIsOpen] = useModal();

  const username = `${appState.firstName} ${appState.lastName}`;

  const navigate = useNavigate();

  const handleCloseSession = () => {
    closeSession();
    navigate("/login", { replace: true });
  };

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
          <div className="dropdown">
            <img
              src={"https://placeimg.com/400/400/people"}
              alt={`${username} avatar`}
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`dropdown-content ${toggle && "show"}`}
              onClick={() => setToggle(!toggle)}
            >
              <div
                className="dropdown-content-item"
                onClick={handleCloseSession}
              >
                <FaPowerOff />
                <span>Close session</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormProduct
        isOpen={registerModalIsOpen}
        toggleModal={setRegisterModalIsOpen}
        action={"create"}
      />
    </nav>
  );
};

export default Navbar;
