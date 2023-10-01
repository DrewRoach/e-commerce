import React, { useContext, useState } from "react";
import { CartContext } from "../utils/cartcontext";
import { Product } from "../components/product";
import { PRODUCTS } from "../utils/products";
import { ProductInformation } from "../components/productInformation";
import { Link } from "react-router-dom";
export const Cart = () => {
  const { cart, handleRemove, handleAddToCart, handleDelete} = useContext(CartContext);
  const displayCart = () => {};
  const [totalPrice, setTotalPrice]= useState(0)
  let tP = 0
  return (
    <>
    <h1>Shopping Cart</h1>
      <ul>
        {Object.keys(cart).map((key) => {
          let price = PRODUCTS[key-1].price * cart[key]
          tP+=price
          return (
            <>
              {cart[key as keyof typeof cart] !== 0 && (
                <div style={{borderBottomColor: "black", borderBottomWidth:10}}>
                  <ProductInformation {...PRODUCTS[key - 1]} />
                  <p>Quantity: {cart[key]}</p>
                  <p>Total: {price}</p>
                  <button onClick={()=>handleAddToCart!(key, 1)}>+</button>
                  <button onClick={()=>handleRemove!(key)}>-</button>
                  <br/>
                  <button onClick={()=>handleDelete(key)}>remove</button>
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
