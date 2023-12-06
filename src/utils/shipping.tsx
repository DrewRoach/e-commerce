import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductType from './types';
import './shipping.css'; // Assuming paymentEntry.css contains your styles

interface ShippingFormProps {
  cart: ProductType[]; // Specify the type of the cart prop
}

const ShippingForm: React.FC<ShippingFormProps> = () => {
  const [shippingDetails, setShippingDetails] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    country: '',
    zipcode: '',
    city: '',
    state: '',
    deliveryNotes: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };


  const handleSubmit = () => {
    // Check if all required fields are filled before navigating
    navigate('/payment', { state: { shippingInfo: shippingDetails}  });
    // if (Object.values(shippingDetails).every((value) => value !== '')) {
    //   navigate('/payment', { state: { shippingDetails } });
    // } else {
    //   // Optionally, you can display an error message or handle it as needed
    //   alert('Please fill in all required fields.');
    // }
  };

  return (
    <div className="container-Shipping">
      <h1>Shipping</h1>
      <p>Please enter your shipping details.</p>
      <hr />
      <div className="form">
        <div className="fields fields--2">
          <label className="field" htmlFor="firstname">
            <span className="field__label" >
              First name *
            </span>
            <input
              className="field__input"
              type="text"
              id="firstname"
              value={shippingDetails.firstname}
              onChange={handleChange}
              placeholder="John"
             
            />
          </label>
          <label className="field"  htmlFor="lastname">
            <span className="field__label">
              Last name *
            </span>
            <input
              className="field__input"
              type="text"
              id="lastname"
              value={shippingDetails.lastname}
              onChange={handleChange}
              placeholder="Smith"
         
            />
          </label>
        </div>
        <label className="field" htmlFor="address">
          <span className="field__label" >
            Email*
          </span>
          <input
            className="field__input"
            type="text"
            id="email"
            value={shippingDetails.email}
            onChange={handleChange}
            placeholder="ilovethisclass@gmail.com"
            
          />
        </label>
        <label className="field" htmlFor="address">
          <span className="field__label" >
            Address *
          </span>
          <input
            className="field__input"
            type="text"
            id="address"
            value={shippingDetails.address}
            onChange={handleChange}
            placeholder="235 West Norwich Ave"
            
          />
        </label>
        <label className="field" htmlFor="country">
          <span className="field__label" >
            Country *
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
          <label className="field" htmlFor="zipcode">
            <span className="field__label">
              Zip code *
            </span>
            <input
              className="field__input"
              type="text"
              id="zipcode"
              value={shippingDetails.zipcode}
              onChange={handleChange}
              placeholder="44202"
              
            />
          </label>
          <label className="field" htmlFor="city">
            <span className="field__label" >
              City *
            </span>
            <input
              className="field__input"
              type="text"
              id="city"
              value={shippingDetails.city}
              onChange={handleChange}
              placeholder="Cleveland"
              
            />
          </label>
          <label className="field" htmlFor="state">
            <span className="field__label" >
              State *
            </span>
            <input
              className="field__input"
              type="text"
              id="state"
              value={shippingDetails.state}
              onChange={handleChange}
              placeholder="Ohio"
              
            >
            </input>
          </label>
          <label className="field">
            <span className="field__label">Delivery Notes</span>
            <textarea
              className="field__input"
              id="deliveryNotes"
              value={shippingDetails.deliveryNotes}
              onChange={handleChange}
              placeholder="Any special instructions..."
            />
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
