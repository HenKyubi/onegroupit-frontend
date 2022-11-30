import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//Context
import { AppProvider } from "./context/app/appProvider";

//Styles
import "./styles/styles.scss";
import "react-toastify/dist/ReactToastify.css";

//Pages
import PageLogin from "./pages/page-login";
import PageProducts from "./pages/page-products";

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<PageLogin />} />
            <Route path="/products" element={<PageProducts />} />
            <Route path="*" element={<Navigate replace to={"/products"} />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
