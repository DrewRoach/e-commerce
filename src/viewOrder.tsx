import React from "react";
import "./viewOrder.css";
import {useNavigate} from 'react-router-dom'
import {useLocation} from "react-router-dom";
import axios from "axios";
//import {Purchase, order} from './purchase.tsx'
// import order from "./paymentEntry";

const ViewOrder = () => {
  
  const location = useLocation();
  const navigate = useNavigate();

  const handleConfirm = () => {
    
    // Send the shipping info to server
    axios.post('http://localhost:8000/shipping_info/', {
      // shipping_id: 1,
      first_name: location.state.order.first_name,
      last_name: location.state.order.last_name,
      email: location.state.order.email,
      phone_number: location.state.order.phone_number, 
      address: location.state.order.address_1,
      apt_suite_number: location.state.order.address_2,
      city: location.state.order.city,
      state: location.state.order.state,
      zip_code: location.state.order.zip,
      card_first_name: location.state.order.card_holder_first_name,
      card_last_name: location.state.order.card_holder_last_name,
      card_number: location.state.order.credit_card_number,
      card_exp_date: location.state.order.expir_date,
      card_security_code: location.state.order.cvc,
      card_zip_code: location.state.order.card_postal
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))

    // Navigate to the confirmation page
    navigate('/confirm', {state: location.state.order});
  }

  return (
    <div className = "payment-container">
      <div className="payment-customer">
        <h1> Customer Information</h1>
        <h2>First Name</h2>
        <h3>{location.state.order.first_name}</h3>
        <h2>Last Name</h2>
        <h3>{location.state.order.last_name}</h3>
        <h2>Email</h2>
        <h3>{location.state.order.email}</h3>
        <h2>Phone Number</h2>
        <h3>{location.state.order.phone_number}</h3>
      </div>

      <div className="payment-shipping">
        <br></br>
        <br></br>
        <h1> Shipping Details </h1>
        <h2>Address</h2>
        <h3>{location.state.order.address_1}</h3>
        <h2>Apt/Suite#</h2>
        <h3>{location.state.order.address_2}</h3>
        <h2>City</h2>
        <h3>{location.state.order.city}</h3>
        <h2>State</h2>
        <h3>{location.state.order.state}</h3>
        <h2>Zip Code</h2>
        <h3>{location.state.order.zip}</h3>
        <br></br>
      </div>
      <div className="payment-info">
        <h1>Payment Information</h1>
        <h2>CARDHOLDER FIRST NAME</h2>
        <h3>{location.state.order.card_holder_first_name}</h3>
        <h2>CARDHOLDER LAST NAME</h2>
        <h3>{location.state.order.card_holder_last_name}</h3>
        <h2>CARD NUMBER</h2>
        <h3>{location.state.order.credit_card_number}</h3>
        <h2>Expiration Date</h2>
        <h3>{location.state.order.expir_date}</h3>
        <h2>Security Code</h2>
        <h3>{location.state.order.cvc}</h3>
        <h2>Postal Code</h2>
        <h3>{location.state.order.card_postal}</h3>
        <br></br>
        <br></br>
        {/* <button className= "button" onClick={handleBack}>Go Back</button> */}
        <button className= "button" onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default ViewOrder;
