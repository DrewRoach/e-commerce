import React from 'react';
import './header.css';
import {useNavigate} from 'react-router-dom';
import logo from "../assets/glasses-clipart.png";


const Header: React.FC = () => {

  const navigate = useNavigate();
  
  const handleHome = () => {
    navigate('/');
  }

  const handleProducts = () => {
    navigate('/products');
  }

  const handleCart = () => {
    navigate('/cart');
  }

  return (
    <div className="header-basic">
      <header>
        <div className='img-container'>
          <img src={logo} alt="Logo" />
        </div>
        <div className="text-container">
          <div id="title" onClick={handleHome}><a href="#">Eous</a></div>
          <ul className="list-inline">
            <li className="list-inline-item" onClick = {handleHome}> <a href="#">Home</a></li>
            <li className="list-inline-item" onClick = {handleProducts}> <a href="#">Products</a></li>
            <li className="list-inline-item" onClick = {handleCart}> <a href="#">Cart</a></li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;