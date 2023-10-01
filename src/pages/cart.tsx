import React, { useContext } from "react";
import { CartContext } from "../utils/cartcontext";
import { Product } from "../components/product";
import { PRODUCTS } from "../utils/products";
export const Cart = () => {
  const { cart } = useContext(CartContext);
  const displayCart = () => {};
  return (
    <>
      <ul>
        {Object.keys(cart).map((key) => {
          return (
            <>
              {cart[key as keyof typeof cart] !== 0 && (
                <Product {...PRODUCTS[key]}/>
              )}
            </>
          );
        })}
      </ul>
    </>
  );
};
