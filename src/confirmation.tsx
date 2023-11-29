import "./viewOrder.css";
import { useLocation, useNavigate } from "react-router-dom";
//import {Purchase, order} from './purchase.tsx'
// import order from "./paymentEntry";
import "./confirmation.css";
import { useContext } from "react";
import OrderStatus from "./components/orderStatus";
import { CartContext } from "./utils/cartcontext";

const Confirm = () => {
  const navigate = useNavigate();

  const { cart, clearCart } = useContext(CartContext);
  const handleSubmit = () => {
    // alert(order.card_holder_name)
    navigate("/order");
  };
  const handleOrder = () => {
    navigate("/#");
  };

  const getTotalPrice = () => {
    let runningTotal = 0;
    cart.map((item) => {
      runningTotal += item.price * item.order_quantity;
    });
    return runningTotal;
  };

  const handlePlaceOrder = () => {
    clearCart!();
    navigate("/");
  };

  let { state } = useLocation();
  let { shippingInfo, payment } = state;

  console.log(shippingInfo);
  console.log(payment);

  return (
    <div className="orderReviewContainer">
      <OrderStatus />
      <div className="userInfoContainer">
        <h1>Review and Place Order</h1>
        <p>Your order will not be placed until you click "Place Order"</p>
        <p>
          This will complete your order and charge your payment <br />
          method for the amount due.
        </p>
        <div className="shippingInfoContainer">
          <h2>Shipping address</h2>
          <>
            <p>
              {shippingInfo.firstname} {shippingInfo.lastname}
            </p>
            <p>{shippingInfo.address}</p>
            <p>
              {shippingInfo.city}, {shippingInfo.state}
            </p>
            <p>{shippingInfo.zipcode}</p>
          </>
        </div>
        <div className="paymentInfoContainer">
          <h2>Payment Method</h2>
          <>
            <p>{payment.card_holder_name}</p>
            <p>Card Number : **** **** **** {payment.card_number[3]}</p>
            <p>exp {payment.exp_date}</p>
          </>
        </div>
      </div>
      <div>
        <div className="orderSummaryContainer">
          <div className="totalsContainer">
            <h2 style={{ paddingLeft: 5 }}>Order Summary</h2>
            <div className="total-grid">
              <p>Subtotal: </p>
              <p>{getTotalPrice()}</p>
              <p>Sales Tax:</p>
              <p>{(getTotalPrice() * 0.2).toFixed(2)}</p>
              <p>Delivery:</p>
              <p>FREE</p>
            </div>
            <hr />
            <div className="total-grid">
              <h3>Total</h3>
              <h4>${(getTotalPrice() + getTotalPrice() * 0.2).toFixed(2)}</h4>
            </div>
            <div className="action flex-center">
              <button
                onClick={handlePlaceOrder}
                className="b-main-color pointer"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
