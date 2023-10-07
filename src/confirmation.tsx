import React from "react";
import "./viewOrder.css";
import {useNavigate} from 'react-router-dom'
import {useLocation} from "react-router-dom";
//import {Purchase, order} from './purchase.tsx'
// import order from "./paymentEntry";

const Confirm = () => {
  
  const navigate = useNavigate();
  
  const handleReturn = () => {
    navigate('/');
  }
  let confirmationCode: number = 1;

  return (
    
    <div>
      <h2>Thank you for your purchase!</h2>
      <h3>Your confirmation code is {confirmationCode}</h3>
      <button className= "button" onClick={handleReturn}>Home</button>
    </div>
  );
};

export default Confirm;
