import React, { useState } from 'react';
import './header.css'; // Import your CSS file
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import logo from "../assets/glasses-clipart.png";

const Navbar = () => {
  const [isChecked, setChecked] = useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  
  const handleHome = () => {
    navigate('/');
  }

  const handleProducts = () => {
    navigate('/products');
  }

  const handleCart = () => {
    navigate('/cart');
  }

  const handleContact = () => {
    navigate('/contact');
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <input type="checkbox" name="" id="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className={`menu-items ${isChecked ? 'show' : ''}`}>
          <li onClick = {handleHome}><a href="#">Home</a></li>
          <li onClick = {handleProducts}><a href="#">Shop</a></li>
          <li onClick = {handleCart}><a href="#">Cart</a></li>
          <li onClick = {handleContact}> <a href="#">Contact</a></li>
        </ul>
        <div className="logo">
        <Link to="/"><a href="#"><p>EOSU</p></a></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
