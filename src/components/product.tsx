import React, { useContext, useState } from "react";
import { Button } from "./button";
import ProductType from "../utils/types";
import { CartContext } from "../utils/cartcontext";
import { ProductInformation } from "./productInformation";
import { Quantity } from "./quantity";
export const Product = (data: ProductType) => {
  const { id, name, price } = data;
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };
  const { handleAddToCart } = useContext(CartContext);
  return (
    <div >
      <ProductInformation {...data} />
      <>
        <Quantity count={count} setCount={setCount} />
        <div>
          <button
            disabled={count === 0}
            onClick={() => handleAddToCart!(id, count)}
          >
            Add to cart
          </button>
        </div>
      </>
    </div>
  );
};
