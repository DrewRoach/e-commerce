import { useContext } from "react";
import { CartContext } from "../utils/cartcontext";
import { useNavigate } from 'react-router-dom';
import ProductType from "../utils/types";
import "./cart.css";
export const Cart = () => {
  const { cart, handleRemove, handleAddToCart, handleDelete } =
    useContext(CartContext);
  let tP = 0;
  const navigate = useNavigate();
  const handleSubmit = () => { 
    navigate('/shipping', { state: { cart } });
  }
  return (
    <div className="cartContainer">
      <ul className="cartList">
        {cart.length > 0 ? (
          <>
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
                    <p>Total: {price.toFixed(2)}</p>
                    <div className="addRemoveButtons">
                      <button
                        className="cartButton"
                        disabled={
                          cart[index].order_quantity >= product.quantity
                        }
                        onClick={() => handleAddToCart!(product, 1)}
                        style={
                          cart[index].order_quantity >= product.quantity
                            ? { marginRight: 20, pointerEvents: "none" }
                            : { marginRight: 20 }
                        }
                      >
                        +
                      </button>
                      <button
                        className="cartButton"
                        onClick={() => handleRemove!(index)}
                        style={{ marginLeft: 10 }}
                      >
                        -
                      </button>
                    </div>
                    <br />
                    <button
                      className="cartButton"
                      style={{ border: "2px solid" }}
                      onClick={() => handleDelete!(index)}
                    >
                      remove
                    </button>
                  </div>
                </>
              );
            })}
          </>
        ) : (
          <>
            <h2 className="pageHeader">Cart is empty</h2>
          </>
        )}
      </ul>
      <div className="shippingContainer">
        <p>Total Price: ${tP.toFixed(2)}</p>
        <p>Total number of products {cart.length}</p>
        {cart.length > 0 && (
          <>
              <button onClick={handleSubmit}> Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};
