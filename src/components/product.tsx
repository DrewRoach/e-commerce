import{ useContext, useState } from "react";
import ProductType from "../utils/types";
import { CartContext } from "../utils/cartcontext";
import { ProductInformation } from "./productInformation";
import { Quantity } from "./quantity";
import "./productsLayout.scss"
export const Product = (data: ProductType) => {
  const [count, setCount] = useState(0);
  const { handleAddToCart } = useContext(CartContext);
  return (
    <div className="product-grid2__product-wrapper">
      <ProductInformation {...data} />
      {/* {data.quantity > 0 ? (
        <>
          <Quantity count={count} setCount={setCount} quantity={data.quantity}/>
          <>
            <button
              disabled={count === 0}
              onClick={() => handleAddToCart!(data, count)}
              className="cartButton"
            >
              Add to cart
            </button>
          </>
        </>
      ) : (
        <>
          <p>Sold out</p>
        </>
      )} */}
    </div>
  );
};
