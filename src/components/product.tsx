import React, { useContext, useState } from "react";
import { Button } from "./button";
import ProductType from "../utils/types";
import { CartContext } from "../utils/cartcontext";
export const Product = (data: ProductType) => {
  const { id, name, price } = data;
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };
  const {handleAddToCart} = useContext(CartContext)
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{price}</p>
      <>
        <div>
          <Button height={50} width={50} text="+" onClick={handleAdd} />
          <input
            type="number"
            value={count}
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
          <button
            style={{ height: 50, width: 50 }}
            disabled={count == 0}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </button>
        </div>
        <div>
          <button disabled={count === 0} onClick={()=>handleAddToCart!(id, count)}>
            Add to cart
          </button>
        </div>
      </>
    </div>
  );
};
