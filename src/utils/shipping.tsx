import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './shipping.css'; // Assuming paymentEntry.css contains your styles

const ShippingForm = () => {
  const [shippingDetails, setShippingDetails] = useState({
    firstname: 'John',
    lastname: 'Doe',
    address: '',
    country: '',
    zipcode: '',
    city: '',
    state: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    navigate('/payment', { state: { shippingDetails } });
  }

  return (
    <div className="container-Shipping">
      <h1>Shipping</h1>
      <p>Please enter your shipping details.</p>
      <hr />
      <div className="form">
        <div className="fields fields--2">
          <label className="field">
            <span className="field__label" htmlFor="firstname">
              First name
            </span>
            <input
              className="field__input"
              type="text"
              id="firstname"
              value={shippingDetails.firstname}
              onChange={handleChange}
            />
          </label>
          <label className="field">
            <span className="field__label" htmlFor="lastname">
              Last name
            </span>
            <input
              className="field__input"
              type="text"
              id="lastname"
              value={shippingDetails.lastname}
              onChange={handleChange}
            />
          </label>
        </div>
        <label className="field">
          <span className="field__label" htmlFor="address">
            Address
          </span>
          <input
            className="field__input"
            type="text"
            id="address"
            value={shippingDetails.address}
            onChange={handleChange}
          />
        </label>
        <label className="field">
          <span className="field__label" htmlFor="country">
            Country
          </span>
          <select
            className="field__input"
            id="country"
            value={shippingDetails.country}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="unitedstates">United States</option>
          </select>
        </label>
        <div className="fields fields--3">
          <label className="field">
            <span className="field__label" htmlFor="zipcode">
              Zip code
            </span>
            <input
              className="field__input"
              type="text"
              id="zipcode"
              value={shippingDetails.zipcode}
              onChange={handleChange}
            />
          </label>
          <label className="field">
            <span className="field__label" htmlFor="city">
              City
            </span>
            <input
              className="field__input"
              type="text"
              id="city"
              value={shippingDetails.city}
              onChange={handleChange}
            />
          </label>
          <label className="field">
            <span className="field__label" htmlFor="state">
              State
            </span>
            <select
              className="field__input"
              id="state"
              value={shippingDetails.state}
              onChange={handleChange}
            >
              <option value=""></option>
            </select>
          </label>
        </div>
      </div>
      <hr />
      <button className="button" onClick={handleSubmit}>
        Continue
      </button>
    </div>
  );
};

export default ShippingForm;
