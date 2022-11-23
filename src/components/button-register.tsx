import React from "react";
// import { useNavigate } from "react-router-dom";

const ButtonRegister: React.FC<{
  className?: string;
  onClick?: () => void;
}> = ({ className, onClick }) => {
  // const navigate = useNavigate();
  // const handleAction = () => {
  //   navigate("/register");
  // };

  return (
    <button className={className} onClick={onClick}>
      Register
    </button>
  );
};

export default ButtonRegister;
