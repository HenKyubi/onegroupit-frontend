import React from "react";

const login = (username: string, password: string) => {
  try {
    console.log(username);
    console.log(password);
  } catch {}
};

const ButtonLogin: React.FC<{
  username: string;
  password: string;
  className: string;
}> = ({ username, password, className }) => {
  return (
    <button className={className} onClick={() => login(username, password)}>
      LOGIN
    </button>
  );
};

export default ButtonLogin;
