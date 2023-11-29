// src/ProgressBar.js
import React from 'react';
import "./orderStatus.css"

const OrderStatus = () => {
  return (
    <div className="mt-5">
      <div id="bar-progress" className="mt-5 mt-lg-0">
        <div className="step step-active">
          <span className="number-container">
            <span className="number">1</span>
          </span>
          <h5>Shop</h5>
        </div>
        <div className="seperator"></div>
        <div className="step">
          <span className="number-container">
            <span className="number">2</span>
          </span>
          <h5>Shipping</h5>
        </div>
        <div className="seperator"></div>
        <div className="step">
          <span className="number-container">
            <span className="number">3</span>
          </span>
          <h5>Payment</h5>
        </div>
        <div className="seperator"></div>
        <div className="step">
          <span className="number-container">
            <span className="number">4</span>
          </span>
          <h5>Order</h5>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
