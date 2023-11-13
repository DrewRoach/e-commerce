import { useContext } from "react";
import { CartContext } from "../utils/cartcontext";
import { ProductInformation } from "../components/productInformation";
import { Link } from "react-router-dom";
import ProductType from "../utils/types";
import "./cart.css"
export const Order = () => {
  const { cart, handleRemove, handleAddToCart, handleDelete } =
    useContext(CartContext);
  let tP = 0;
  return (
    <div className="cartContainer">
      <h1>View Order</h1>
      <ul className="cartList">
        {cart.map((product: ProductType, index: number) => {
          let price = product.quantity * product.price
          tP += price;
          return (
            <>
                <div className="cartItem">
                  <ProductInformation {...product} />
                  <p>Quantity: {product.quantity}</p>
                  <p>Total: {price}</p>
                  <br />
                </div>
            </>
          );
        })}
      </ul>
    </div>
  );
};
