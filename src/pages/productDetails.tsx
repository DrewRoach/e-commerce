import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../utils/cartcontext";
import "./productDetails.css";
import ProductType from "../utils/types";

const ProductDetails = () => {
  const location = useLocation();
  const { handleAddToCart } = useContext(CartContext);

  // Access data from location.state
  const initialData: ProductType = location.state?.data || {
    product_name: "",
    price: 0,
    img: "",
    quantity: 0,
  };

  // State to manage quantity
  const [quantity, setQuantity] = useState(1);

  // Function to handle quantity changes
  const handleQuantityChange = (event: any) => {
    let newQuantity = parseInt(event.target.value, 10);
    newQuantity =
      newQuantity > initialData.quantity ? initialData.quantity : newQuantity;
    setQuantity(newQuantity);
  };

  // Function to add to cart with the specified quantity
  const addToCart = () => {
    handleAddToCart!(initialData, quantity);
  };

  return (
    <div className="product-details-container">
      <div className="image-container">
        <div className="white-box">
          <img
            src={initialData.img}
            className="productImage"
            alt={initialData.product_name}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="info-container">
        <div className="gray-box">
          <h2 className="product-name">{initialData.product_name}</h2>
          <p className="price">${initialData.price}</p>
          <p className="description">
            Elevate your style with our modern {initialData.product_name}{" "}
            frames. Sleek design, comfortable fit, and crafted for durability.
            Make a statement wherever you go.
          </p>
          {/* Add quantity input and add to cart button here */}

          {initialData.quantity >0 ? <>
            <div className="quantity-container">
              <label htmlFor="quantity" className="label">
                Quantity:
              </label>
              <div className="quantity-input-container">
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="quantity-input"
                />
              </div>
            </div>
            <button className="add-to-cart-button" onClick={addToCart}>
              Add to Cart
            </button>
          </>
          :
          <>
          <p>Sold Out</p>
          </>
}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
