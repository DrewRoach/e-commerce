import { useContext } from "react";
import { CartContext } from "../utils/cartcontext";
import { ProductInformation } from "../components/productInformation";
import { Link } from "react-router-dom";
import ProductType from "../utils/types";
import "./cart.css";
export const Cart = () => {
  const { cart, handleRemove, handleAddToCart, handleDelete } =
    useContext(CartContext);
  let tP = 0;
  return (
    <div className="cartContainer">
      <ul className="cartList">
        {cart.map((product: ProductType, index: number) => {
          let price = product.order_quantity * product.price;
          tP += price;
          return (
            <>
              <div className="cartItem">
                <img
                  src={product.img}
                  alt={product.product_name}
                  className="productImage"
                />
                <p>Quantity: {product.order_quantity}</p>
                <p>Total: {price}</p>
                <div className="addRemoveButtons">
                  <button
                    disabled={cart[index].order_quantity >= product.quantity}
                    onClick={() => handleAddToCart!(product, 1)}
                    style={{ marginRight: 20 }}
                  >
                    +
                  </button>
                  <button onClick={() => handleRemove!(index)}>-</button>
                </div>
                <br />
                <button
                  onClick={() => handleDelete!(index)}
                >
                  remove
                </button>
              </div>
            </>
          );
        })}
      </ul>
      <div className="shippingContainer">
        <p>Total Price: ${tP}</p>
        <p>Total number of products {cart.length}</p>
        <Link to={"/shipping"}>
          <button> Checkout</button>
        </Link>
      </div>
    </div>
  );
};
