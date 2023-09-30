import React from "react";
import { useState } from "react";
import "./paymentEntry.css";
import {useNavigate} from 'react-router-dom'

//import {Purchase, order} from './purchase.tsx'

const PaymentEntry = () => {
  const [order]= useState({
    phone_number: "",
    credit_card_number: 0,
    expir_date: "",
    cvc: 0,
    card_postal: 0,
    card_holder_name: "",
    card_holder_first_name: "",
    card_holder_last_name: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    zip: 0,
    email: "",
  });

//once routes are set up will uncomment
  
// const navigate = useNavigate();

// // const handleSubmit = () => {
// //     navigate('/purchase/viewConfirmation', {state: {order}});
// // }

  return (
    <div className = "payment-container">
      <div className="payment-customer">
        <h1> Customer Information</h1>
        <h2>First and Last Name </h2>
        <input
          type="text"
          required
          onChange={(e) => {
            order.card_holder_name = e.target.value;
          }}
        />
        <h2>Email</h2>
        <input
          type="text"
          required
          onChange={(e) => {
            order.email = e.target.value;
          }}
        />
        <h2>Phone Number</h2>
        <input
          type="text"
          required
          onChange={(e) => {
            order.phone_number = e.target.value;
          }}
        />
      </div>

      <div className="payment-shipping">
        <br></br>
        <br></br>
        <h1> Shipping Details </h1>
        <h2>Address</h2>
        <input
          type="text"
          required
          onChange={(e) => {
            order.address_1 = e.target.value;
          }}
        />
        <h2>Apt/Suite#</h2>
        <input
          type="text"
          onChange={(e) => {
            order.address_2 = e.target.value;
          }}
        />
        <h2>City</h2>
        <input
          type="text"
          required
          onChange={(e) => {
            order.city = e.target.value;
          }}
        />
        <h2>State</h2>
        <input
          type="text"
          required
          onChange={(e) => {
            order.state = e.target.value;
          }}
        />
        <h2>Zip Code</h2>
        <input
          type="text"
          required
          onChange={(e) => {
            order.zip = Number(e.target.value);
          }}
        />
        <br></br>
      </div>
      <div className="payment-info">
        <h1>Payment Information</h1>
        <h2>CARDHOLDER FIRST NAME</h2>
        <input
          type="text"
          required
          onChange={(e) => {
            order.card_holder_first_name = e.target.value;
          }}
        />
        <h2>CARDHOLDER LAST NAME</h2>
        <input
          type="text"
          required
          onChange={(e) => {
            order.card_holder_last_name = e.target.value;
          }}
        />
        <h2>CARD NUMBER</h2>
        <input
          type="text"
          required
          onChange={(e) => {
            order.credit_card_number = Number(e.target.value);
          }}
        />
        <h2>Expiration Date</h2>
        <input
          type="text"
          required
          onChange={(e) => {
            order.expir_date = e.target.value;
          }}
        />
        <h2>Security Code</h2>
        <input
          type="text"
          required
          onChange={(e) => {
            order.cvc = Number(e.target.value);
          }}
        />
        <h2>Postal Code</h2>
        <input
          type="text"
          required
          onChange={(e) => {
            order.card_postal = Number(e.target.value);
          }}
        />
        <br></br>
        <br></br>
        {/* <button className= "button" onClick={handleSubmit}> Pay</button> */}
      </div>
    </div>
  );
};

export default PaymentEntry;
