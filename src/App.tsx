import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Context
import { AppProvider } from "./context/app/app-provider";

//Styles
import './styles/styles.scss'
import "react-toastify/dist/ReactToastify.css";

// import "./App.scss";

//Pages
import PageLogin from "./pages/page-login";
import PageProducts from "./pages/page-products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLogin />,
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
