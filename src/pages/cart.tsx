import React, { useContext } from "react";
import { CartContext } from "../utils/cartcontext";
import { Product } from "../components/product";
import { PRODUCTS } from "../utils/products";
import { ProductInformation } from "../components/productInformation";
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
                <>
                  <ProductInformation {...PRODUCTS[key - 1]} />
                  <p>{PRODUCTS[key-1].price * cart[key]}</p>
                </>
              )}
            </>
          );
        })}
      </ul>
    </>
  );
};
