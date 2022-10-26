import React from "react";
import "./App.scss";
import { AppProvider } from "./context/app/app-provider";
import LoginPage from "./pages/page-login";

function App() {
  return (
    <>
      <AppProvider>
        <LoginPage />
      </AppProvider>
    </>
  );
}

export default App;
