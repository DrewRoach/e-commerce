import { useContext } from "react";
import { CartContext } from "../utils/cartcontext";
import { ProductInformation } from "../components/productInformation";
import { Link } from "react-router-dom";
import ProductType from "../utils/types";
export const Cart = () => {
  const { cart, handleRemove, handleAddToCart, handleDelete } =
    useContext(CartContext);
  let tP = 0;
  return (
    <div className="cartContainer">
      <h1>Shopping Cart</h1>
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
                    style={{ marginBottom: 20 }}
                  >
                    remove
                  </button>
                </div>
            </>
          );
        })}
      </ul>
      <div>
        <p>Cart Total: {tP}</p>
      </div>
      <Link to={"/shipping"}>
        <button>Shipping</button>
      </Link>
    </div>
  );
};
