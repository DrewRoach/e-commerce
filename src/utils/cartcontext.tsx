import { createContext, useState } from "react";


interface cartContext {
  cart: number[];
  handleAddToCart?(id: number, quantity: number): void;
  handleRemove?(id: number): void;
  handleIncreaseCart?(id:number):void
  handleDelete?(id: number): void
}

const initCart = [0,0,0,0,0,0];

export const CartContext = createContext<cartContext>({ cart: [] });
export const CartContextProvider = (props: any) => {
  const [cart, setCart] = useState(initCart);

  const handleAddToCart = (id: number, quantity: number) => {
    const updatedCart = cart.map((c:number,i:number)=>{
      if(i === id){
        return c + quantity
      }else return c
    })
    setCart(updatedCart);
    console.log(JSON.stringify(cart));
  };

  const handleRemove = (id: number) => {
    const updatedCart = cart.map((c:number,i:number)=>{
      if(i === id){
        return c -1;
      }else return c
    })
    setCart(updatedCart);
  };

  const handleDelete = (id: number) => {
    const updatedCart = cart.map((c:number,i:number)=>{
      if(i === id){
        return c = 0
      }else return c
    })
    setCart(updatedCart);
  };

  const context = { cart, handleAddToCart, handleRemove, handleDelete };
  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};
