import React from 'react';
import './header.css'
import {useNavigate} from 'react-router-dom'

const Header: React.FC = () => {

  const navigate = useNavigate();
  
  const handleHome = () => {
    navigate('/');
  }

  const handleProducts = () => {
    navigate('/');
  }

  const handleCart = () => {
    navigate('/');
  }

  return (
    <div className="header-basic">
      <header>
        <h1 id="title"> Eous </h1>
        <ul className="list-inline">
          <li className="list-inline-item" onClick = {handleHome}> <a href="#">Home</a></li>
          <li className="list-inline-item" onClick = {handleProducts}> <a href="#">Products</a></li>
          <li className="list-inline-item" onClick = {handleCart}> <a href="#">Cart</a></li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
