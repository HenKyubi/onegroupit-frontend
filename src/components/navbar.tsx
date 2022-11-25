import { useState, useContext } from "react";

//Icons
import { FaSearch, FaPlus, FaBell } from "react-icons/fa";

//Context
import { AppContext } from "../context/app/app-context";

//Assets
import userAvatar from "../assets/logo.png";

const Navbar = () => {
  const { appState } = useContext(AppContext);

  const [searchInput, setSearchInput] = useState<string>("");

  const username = `${appState.firstName} ${appState.lastName}`;

  const handleSearch = (search: string) => {
    console.log(search);
    setSearchInput(search);
  };
  return (
    <nav id="navbar">
      <div className="searchbar">
        <FaSearch />
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="navbar__options">
        <button className="navbar__options-btn-new-product">
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
          <img src={userAvatar} alt="name of user avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
