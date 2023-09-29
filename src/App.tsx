import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Navbar } from "./components/navbar";
import Home from "./pages/home";
import { Cart } from "./pages/cart";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
