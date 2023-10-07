import  {useContext} from "react";
import { CartContext } from "../utils/cartcontext";
import { PRODUCTS } from "../utils/products";
import { ProductInformation } from "../components/productInformation";
import { Link } from "react-router-dom";
export const Cart = () => {
  const { cart, handleRemove, handleAddToCart, handleDelete} = useContext(CartContext);
  let tP = 0
  return (
    <>
    <h1>Shopping Cart</h1>
      <ul>
        {cart.map((value, index) => {
          let price = PRODUCTS[index].price * cart[index]
          tP+=price
          return (
            <>
              {cart[index] !== 0 && (
                <div style={{borderBottomColor: "black", borderBottomWidth:10}}>
                  <ProductInformation {...PRODUCTS[index]} />
                  <p>Quantity: {cart[index]}</p>
                  <p>Total: {price}</p>
                  <button onClick={()=>handleAddToCart!(index, 1)}>+</button>
                  <button onClick={()=>handleRemove!(index)}>-</button>
                  <br/>
                  <button onClick={()=>handleDelete(index)}>remove</button>
                </div>
              )}
            </>
          );
        })}
      </ul>
      <div>
        <p>Cart Total: {tP}</p>
      </div>
      <Link to={"/information"}>Payment/Shipping</Link>
    </>
  );
};
