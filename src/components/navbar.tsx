import React, { useState } from "react";
// import userAvatar from "../assets/logo.png";
import { FaSearch, FaPlus, FaBell } from "react-icons/fa";
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
      <div
        className="searchbar"
        style={{
          border: "1px solid #A2A3A433",
          borderRadius: "4px",
          boxShadow: "0px 2px 30px -16.43541717529297px #00000026",
          padding: "5px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <FaSearch
          style={{
            color: "#A2A3A4",
          }}
        />
        <input
          style={{
            border: "none",
            padding: "5px",
            outline: "none",
          }}
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // width: "25%",
        }}
      >
        <button
          style={{
            border: "none",
            backgroundColor: "#248aff",
            color: "#ffffff",
            borderRadius: "6px",
            padding: "8px 16px",
            fontWeight: "500",
            fontSize: "16px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <FaPlus />
          NEW
        </button>
        <FaBell style={{ color: "#3F444E" }} />
        <span>userName</span>
        <div
          style={{
            boxShadow: "0px 2px 4px 0px #00000040",
            borderRadius: "50%",
            height: "100%",
          }}
        >
          {/* <img
            src={userAvatar}
            alt="name of user avatar"
            style={{ height: "100%" }}
          /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
