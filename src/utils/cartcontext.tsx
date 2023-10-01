import { createContext, useState } from "react";

interface cartContext {
  cart: object;
  handleAddToCart?(id: number, quantity: number): void;
  handleRemove?(id: number): void;
  handleIncreaseCart?(id:number):void
}
const initialCart = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
};

export const CartContext = createContext<cartContext>({ cart: {} });
export const CartContextProvider = (props: any) => {
  const [cart, setCart] = useState(initialCart);

  const handleAddToCart = (id: number, quantity: number) => {
    setCart((curr) => ({
      ...curr,
      [id]: curr[id as keyof typeof curr] + quantity,
    }));
    console.log(JSON.stringify(cart));
  };

  const handleRemove = (id: number) => {
    setCart((curr) => ({ ...curr, [id]: curr[id as keyof typeof curr] - 1 }));
  };

  const handleIncreaseCart = (id: number) => {
    setCart((curr) => ({ ...curr, [id]: curr[id as keyof typeof curr] - 1 }));
  };

  const context = { cart, handleAddToCart, handleRemove, handleIncreaseCart };
  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};
