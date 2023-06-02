import React from "react";
import { Route, Routes } from "react-router";
import Mockman from "mockman-js";
import { Auth } from "./Auth";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { CartPage } from "./pages/CartPage";
import { WishListPage } from "./pages/WishListPage";
import { LoginPage } from "./pages/LoginPage";
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        
      </Routes>
    </div>
  );
};
