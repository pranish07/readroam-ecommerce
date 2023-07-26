import React from "react";
import Mockman from "mockman-js";

// import { Auth } from "./Auth";
import { HomePage } from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";
import { WishListPage } from "./pages/WishListPage";
import { LoginPage } from "./pages/Login/LoginPage";
// import { IndividualProductPage } from "./pages/IndividualProductPage";

import { injectStyle } from "react-toastify/dist/inject-style";
import "./App.css";
import { ProductListing } from "./pages/ProductListing/ProductListing";
import { IndividualProduct } from "./pages/IndividualProductPage";
import { ErrorPage } from "./pages/ErrorPage";
import { SignUp } from "./pages/Login/SignupPage";
import { RequiresAuth } from "./components/RequiresAuth/RequiresAuth";
import { ToastContainer } from "react-toastify";
import {Loading} from "./components/Loading/Loading"
import { Route, Routes } from "react-router";
import { useData } from "./contexts/DataContext";
import {Profile} from "./pages/Profile"
export const App = () => {
  const { loading } = useData();
  injectStyle();
  return (
    <div>
       {loading && <Loading />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:productId" element={<IndividualProduct />} />
        {/* <Route path="/auth" element={<Auth />} /> */}
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />}/>
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              {" "}
              <CartPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <WishListPage />
            </RequiresAuth>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
