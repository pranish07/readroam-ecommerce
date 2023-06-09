import React from "react";
import { Route, Routes } from "react-router";
import Mockman from "mockman-js";

import { Auth } from "./Auth";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { CartPage } from "./pages/CartPage";
import { WishListPage } from "./pages/WishListPage";
import { LoginPage } from "./pages/LoginPage";
// import { IndividualProductPage } from "./pages/IndividualProductPage";

import "./App.css"
import { ProductDetail } from "./components/Products/ProductDetail/ProductDetail";
import NotFound from "./components/NotFound/NotFound";
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ShopPage />} />
        <Route path="/products/:productId" element={<ProductDetail />}/>
        <Route path="/auth" element={<Auth />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
