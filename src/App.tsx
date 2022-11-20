import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Context
import { AppProvider } from "./context/app/app-provider";

//Styles
import "./App.scss";

//Pages
import PageLogin from "./pages/page-login";
import PageRegister from "./pages/page-register";
import PageProducts from "./pages/page-products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLogin />,
    },
    {
      path: "register",
      element: <PageRegister />,
    },
    {
      path: "products",
      element: <PageProducts />,
    },
  ]);
  return (
    <>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </>
  );
}

export default App;
