import React from 'react';
import './thanks.css'
import ShippingForm from '../utils/shipping';
import { useLocation} from "react-router-dom";
import { Balloon, Basket } from './thanksStyling'
const Thanks = () => {
    // let { state } = useLocation();
    // let { shippingInfo } = state;
  return (
    <div id="orderconfirmation">
      <div id="balloon">
      <div className="balloon"></div>
        <div className="basket"></div>
        <div className="cloud"></div>
      </div>

      <div className="rentalinfo">
        <h1>Your Order has been confirmed!</h1>
        <p>
          We've sent you an email to maralla.loh@gmail.com with all the details. 
        </p>
      </div>
    </div>
  );
};

export default Thanks;
