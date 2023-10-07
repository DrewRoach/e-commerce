import{ useContext, useState } from "react";
import ProductType from "../utils/types";
import { CartContext } from "../utils/cartcontext";
import { ProductInformation } from "./productInformation";
import { Quantity } from "./quantity";
export const Product = (data: ProductType) => {
  const { id} = data;
  const [count, setCount] = useState(0);
  const { handleAddToCart } = useContext(CartContext);
  return (
    <div className="product">
      <ProductInformation {...data} />
      <>
        <Quantity count={count} setCount={setCount} />
        <div className="">
          <button
            disabled={count === 0}
            onClick={() => handleAddToCart!(id-1, count)}
          >
            Add to cart
          </button>
        </div>
      </>
    </div>
  );
};
