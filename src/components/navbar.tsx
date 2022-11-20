import React, { useState } from "react";
import userAvatar from "../assets/logo.png";
import { FaSearch, FaPlus, FaBell } from "react-icons/fa";
const Navbar = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const handleSearch = (search: string) => {
    console.log(search);
    setSearchInput(search);
  };
  return (
    <nav
      style={{
        height: "8%",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 2px 30px -16.43541717529297px #00000026",
        boxSizing: "border-box",
        padding: "0.75em 2em",
      }}
    >
      <div
        // className="searchbar"
        style={{
          width: "25%",
          height: "100%",
          border: "1px solid #A2A3A433",
          borderRadius: "4px",
          boxShadow: "0px 2px 30px -16.43541717529297px #00000026",
          boxSizing: "border-box",
          padding: "0.5em",
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
            width: "100%",
            border: "none",
            outline: "none",
            padding: "0 0 0 0.5em",
          }}
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div
        style={{
          width: "75%",
          justifyContent: "end",
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          style={{
            height: "100%",
            border: "none",
            backgroundColor: "#248aff",
            color: "#ffffff",
            borderRadius: "6px",
            boxSizing: "border-box",
            padding: "0.5em 1em",
            fontWeight: "500",
            fontSize: "16px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              boxSizing: "border-box",
              paddingRight: "0.5em",
            }}
          >
            <FaPlus />
          </div>
          NEW
        </button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box",
            paddingLeft: "1.5em",
          }}
        >
          <FaBell style={{ color: "#3F444E", fontSize: "20px" }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box",
            paddingLeft: "1.5em",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#000000",
            }}
          >
            userName
          </span>
        </div>
        <div
          style={{
            boxSizing: "border-box",
            paddingLeft: "1.5em",
            // height: "100%",
            // maxWidth: "4em",
            // borderRadius: "50%",
          }}
        >
          <img
            src={userAvatar}
            alt="name of user avatar"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "4em",
              borderRadius: "50%",
              boxShadow: "0px 2px 4px 0px #00000040",
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
