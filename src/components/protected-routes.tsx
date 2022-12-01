import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRoutesProps = {
  children: ReactElement<any, any> | null;
};

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  if (!localStorage.getItem("authData") && !sessionStorage.getItem("authData")) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoutes;
