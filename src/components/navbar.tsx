import React, { useState } from "react";
// import userAvatar from "../assets/logo.png";
const Navbar = () => {
  // const style= {

  // }
  const [searchInput, setSearchInput] = useState("");
  return (
    <nav
      style={{
        height: "7%",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 2px 30px -16.43541717529297px #00000026",
      }}
    >
      <div className="searchbar">
        <i className="gg-search"></i>
        <input
          style={{
            border: "1px solid #A2A3A433",
            borderRadius: "4px",
            padding: "5px",
          }}
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div>
        <button
          style={{
            border: "none",
            backgroundColor: "#248aff",
            color: "#ffffff",
            borderRadius: "6px",
            padding: "8px 16px",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          NEW
        </button>
        <i>notification</i>
        <span>userName</span>
        {/* <div
          style={{
            borderRadius: "50%",
            height: "100%",
            width: "100%",
          }}
        >
          <img
            src={userAvatar}
            alt="name of user avatar"
            style={{ objectFit: 'cover' }}
          />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
