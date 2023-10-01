import { useState, useReducer, useContext } from "react";
import { PRODUCTS } from "../utils/products";
import { Product } from "../components/product";
import ProductType from "../utils/types";
import { CartContext } from "../utils/cartcontext";
const Home = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      {PRODUCTS.map((product) => {
        return (
          <>
            <Product {...product} />
          </>
        );
      })}
      
    </>
  );
};

export default Home;
