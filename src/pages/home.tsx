import { useState, useReducer } from "react";
import { PRODUCTS } from "../utils/products";
import { Product } from "../components/product";
import ProductType from "../utils/types";
import { CartContext, CartDispatchContex } from "../utils/cartcontext";
enum CartActionKind {
  ADD = "ADD",
}
interface CartAction {
  type: CartActionKind;
  item: ProductType;
}
interface CartState {
  cart: ProductType[];
}
function cartReducer(state: any, action: any) {
  switch (action.type) {
    case "ADD": {
      console.log(JSON.stringify(action.item))
      console.log(JSON.stringify(state))
      return state ? [...state, action.item] : [action.item];
    }

    default:
      return state.cart;
  }
}
const Home = () => {
  const initialCart: ProductType[] = []
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  return (
    <>
      <CartContext.Provider value={cart}>
        <CartDispatchContex.Provider value={dispatch}>
          {PRODUCTS.map((product) => {
            return (
              <>
                <Product {...product} />
              </>
            );
          })}
        </CartDispatchContex.Provider>
      </CartContext.Provider>
    </>
  );
};

export default Home;
