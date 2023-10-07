import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Navbar } from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer"
import { Cart } from "./pages/cart";
import { CartContextProvider } from "./utils/cartcontext";
import PaymentEntry from "./paymentEntry";
import ViewOrder from "./viewOrder";
import Confirm from "./confirmation";
import MyHead from './components/footerHead';
import AboutUs from "./pages/aboutUs";
export const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/information" element={<PaymentEntry/>}/>
            <Route path="/review" element={<ViewOrder/>}/>
            <Route path="/confirm" element={<Confirm/>}/>
            <Route path="/about" element={<AboutUs/>}/>
          </Routes>
          <MyHead />
          <Footer />
        </BrowserRouter>
    </div>
  );
};
