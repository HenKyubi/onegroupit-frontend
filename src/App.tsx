import React from "react";
import "./App.scss";
import { AppProvider } from "./context/app/app-provider";
// import LoginPage from "./pages/page-login";
import PageProducts from "./pages/page-products";

function App() {
  return (
    <>
      <AppProvider>
        {/* <LoginPage /> */}
        <PageProducts />
      </AppProvider>
    </>
  );
}

export default App;
