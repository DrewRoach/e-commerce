import { createContext, useState } from "react";
import CartType from "./types";
import ProductType from "./types";


interface cartContext {
  cart: CartType[];
  handleAddToCart?(product: ProductType, quantity: number): void;
  handleRemove?(id: number): void;
  handleIncreaseCart?(id:number):void
  handleDelete?(id: number): void
  clearCart?(): void
}

const initCart: CartType[] = [];

export const CartContext = createContext<cartContext>({ cart: [] });
export const CartContextProvider = (props: any) => {
  const [cart, setCart] = useState(initCart);

  const handleAddToCart = (product: ProductType, quantity: number) => {
    const productIndex = cart.findIndex((p:ProductType)=> p.item_id == product.item_id);
    if(productIndex === -1){
      setCart([...cart, {...product, quantity:quantity}])
    }else{
      const updatedCart = [...cart]
      updatedCart[productIndex].quantity += quantity;
      setCart(updatedCart)
    }
    console.log(JSON.stringify(cart));
  };

  const handleRemove = (index: number) => {
    const updatedCart = [...cart]
    updatedCart[index].quantity -=1;
    if(updatedCart[index].quantity <=0){
      handleDelete(index);
    }else setCart(updatedCart);
  };

  const handleDelete = (index: number) => {
    const updatedCart = cart.filter((_, i:number)=> i !== index)
    setCart(updatedCart);
  };

  const clearCart = ()=>{
    setCart([])
  }

  const context = { cart, handleAddToCart, handleRemove, handleDelete, clearCart };
  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};
