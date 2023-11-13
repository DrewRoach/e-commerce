import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navbar } from "./components/navbar";
import Home from "./pages/home";
import Header from "./components/header"
import Footer from "./components/footer"
import { Cart } from "./pages/cart";
import { Order } from "./pages/orderConfirmation"
import PaymentEntry from "./Payment/paymentEntry";
import ViewOrder from "./viewOrder";
import Confirm from "./confirmation";
import MyHead from './components/footerHead';
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import Products from "./pages/productPage";
import ShippingForm from "./utils/shipping";
export const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Header></Header>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/payment" element={<PaymentEntry/>}/>
            <Route path="/review" element={<ViewOrder/>}/>
            <Route path="/confirm" element={<Confirm/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/shipping" element={<ShippingForm/>}/>
          </Routes>
          <MyHead />
          <Footer />
        </BrowserRouter>
    </div>
  );
};
