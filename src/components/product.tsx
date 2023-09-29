import React, { useContext, useState } from "react";
import { Button } from "./button";
import ProductType from "../utils/types";
import { CartDispatchContex } from "../utils/cartcontext";

export const Product = (data: ProductType) => {
  const { id, name, price } = data;
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState({});
  const dispatch = useContext(CartDispatchContex)
  const handleAdd = () => {
    setCount(count + 1);
  };

  const addToCart = () => {
    dispatch({
      type:'ADD',
      item: {...data, quantity: count}
    })
  };
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{price}</p>
      <>
        <div>
          <Button height={50} width={50} text="+" onClick={handleAdd} />
          <p>{count}</p>
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
          <button disabled={count === 0} onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </>
    </div>
  );
};
