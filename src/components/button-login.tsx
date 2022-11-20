import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonLogin: React.FC<{
  username: string;
  password: string;
  className: string;
}> = ({ username, password, className }) => {
  const navigate = useNavigate();
  const login = (username: string, password: string) => {
    try {
      console.log(username);
      console.log(password);
      navigate("/products");
    } catch {}
  };
  const handleAction = (username: string, password: string) => {
    login(username, password);
  };
  return (
    <button
      className={className}
      onClick={() => handleAction(username, password)}
    >
      LOGIN
    </button>
  );
};

export default ButtonLogin;
