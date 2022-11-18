import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonRegister: React.FC<{ className?: string }> = ({ className }) => {
  const navigate = useNavigate();
  const handleAction = () => {
    navigate("/register");
  };

  return (
    <button className={className} onClick={handleAction}>
      Register
    </button>
  );
};

export default ButtonRegister;
