import React, { useState } from "react";
import { FaUserCircle, FaLock, FaEnvelope } from "react-icons/fa";
import Modal from "./modal";

const ModalRegister: React.FC<{
  isOpen: boolean;
  toggleModal: () => void;
}> = ({ isOpen, toggleModal }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  // const [firstName, setFirstName] = useState<string>("");
  const handleSubmit = () => {
    if(password === repeatPassword){

    }
  }

  return (
    <Modal isOpen={isOpen} toggleModal={toggleModal}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="pb-1">
          <h1 className="textAlignCenter">Sign up</h1>
        </div>
        <div className="pb-1">
          <div
            style={{
              border: "1px #000000 solid",
              borderRadius: "6px",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "1rem",
                fontWeight: "500",
                padding: "0.5rem",
              }}
              required
            />
            <FaUserCircle
              style={{
                paddingRight: "0.5rem",
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
            />
          </div>
        </div>
        <div className="pb-1">
          <div
            style={{
              border: "1px #000000 solid",
              borderRadius: "6px",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "1rem",
                fontWeight: "500",
                padding: "0.5rem",
              }}
              required
            />
            <FaUserCircle
              style={{
                paddingRight: "0.5rem",
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
            />
          </div>
        </div>
        <div className="pb-1">
          <div
            style={{
              border: "1px #000000 solid",
              borderRadius: "6px",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "1rem",
                fontWeight: "500",
                padding: "0.5rem",
              }}
              required
            />
            <FaEnvelope
              style={{
                paddingRight: "0.5rem",
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
            />
          </div>
        </div>
        {/* <div className="pb-1">
          <div
            style={{
              border: "1px #000000 solid",
              borderRadius: "6px",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Phone"
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "1rem",
                fontWeight: "500",
                padding: "0.5rem",
              }}
              required
            />
            <FaPhone
              style={{
                paddingRight: "0.5rem",
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
            />
          </div>
        </div> */}
        <div className="pb-1">
          <div
            style={{
              border: "1px #000000 solid",
              borderRadius: "6px",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "1rem",
                fontWeight: "500",
                padding: "0.5rem",
              }}
              required
            />
            <FaLock
              style={{
                paddingRight: "0.5rem",
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
            />
          </div>
        </div>
        <div className="pb-1">
          <div
            style={{
              border: "1px #000000 solid",
              borderRadius: "6px",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="password"
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "1rem",
                fontWeight: "500",
                padding: "0.5rem",
              }}
              required
            />
            <FaLock
              style={{
                paddingRight: "0.5rem",
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="btn__primary" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalRegister;
