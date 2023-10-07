import { useContext } from "react";
import { CartContext } from "../utils/cartcontext";
import { PRODUCTS } from "../utils/products";
import { ProductInformation } from "../components/productInformation";
import { Link } from "react-router-dom";
export const Cart = () => {
  const { cart, handleRemove, handleAddToCart, handleDelete } =
    useContext(CartContext);
  let tP = 0;
  return (
    <div className="cartContainer">
      <h1>Shopping Cart</h1>
      <ul className="cartList">
        {cart.map((_, index) => {
          let price = PRODUCTS[index].price * cart[index];
          tP += price;
          return (
            <>
              {cart[index] !== 0 && (
                <div className="cartItem">
                  <ProductInformation {...PRODUCTS[index]} />
                  <p>Quantity: {cart[index]}</p>
                  <p>Total: {price}</p>
                  <div className="addRemoveButtons">
                    <button
                      onClick={() => handleAddToCart!(index, 1)}
                      style={{ marginRight: 20 }}
                    >
                      +
                    </button>
                    <button onClick={() => handleRemove!(index)}>-</button>
                  </div>
                  <br />
                  <button
                    onClick={() => handleDelete!(index)}
                    style={{ marginBottom: 20 }}
                  >
                    remove
                  </button>
                </div>
              )}
            </>
          );
        })}
      </ul>
      <div>
        <p>Cart Total: {tP}</p>
      </div>
      <Link to={"/information"}>
        <button>Payment/Shipping</button>
      </Link>
    </div>
  );
};
