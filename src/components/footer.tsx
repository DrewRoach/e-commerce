import React, { useState } from 'react';

import { Link } from 'react-router-dom'
import "./footer.css"

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
      };

    return (
        <footer>
            <div className="footer-container container">
                <div className="content_1">
                <p>EOSU</p>
                    <p>At the core of our business philosophy lies a deep appreciation for our customers.<br /> 
                    Our distinctive business model is intricately woven with thoughtful design, creating <br /> a unique and delightful shopping experience for you.</p>
                    <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
                </div>
                <div className="content_3">
                    <h4>SHOPPING</h4>
                    <Link to="/about"><a href="#">About Us</a></Link>
                    <a href="https://delivery-status-sb.netlify.app/" target="_blank" rel="noopener noreferrer">Delivery</a>
                    <a href="" target="_blank" rel="noopener noreferrer">Return and Exchange</a>
                </div>
                <div className="content_4">
                    <h4>NEWSLETTER</h4>
                    <p>Be the first to know about new<br />arrivals, look books, sales & promos!</p>
                    <form onSubmit={handleSubmit}>
                        <div className="f-mail">
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <button type="submit">
                            <i className='bx bx-envelope'></i>
                        </button>
                        </div>
                    </form>
                    <hr />
                    </div>
            </div>
           
        </footer>
    );
};

export default Footer;
