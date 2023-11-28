
import { useState, useContext } from "react";
import { CartContext } from "../utils/cartcontext";
import "./header.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [isChecked, setChecked] = useState(false);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleProducts = () => {
    navigate("/products");
  };

  const handleCart = () => {
    navigate("/cart");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  const getItemCount = ()=>{
    let count = 0
    cart.map((item)=>{
      count += item.order_quantity
    })

    return count
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <input
          type="checkbox"
          name=""
          id="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className={`menu-items ${isChecked ? "show" : ""}`}>
          <li onClick={handleHome}>
            <a href="#">Home</a>
          </li>
          <li onClick={handleProducts}>
            <a href="#">Shop</a>
          </li>
          <li onClick={handleCart}>
            <>
              <a href="#">Cart</a>
              <span className="badge">{cart.length > 0 && getItemCount()}</span>
            </>
          </li>
          <li onClick={handleContact}>
            {" "}
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="logo">
        <Link to="/"><a href="#"><p>EOSU</p></a></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
