
import { Button } from "./button";
export const Quantity = (props:any) => {
  //const { cart, handleIncreaseCart, handleRemove } = useContext(CartContext);
  const {count, setCount} = props
  return (
    <div className="quantityContainer">
      <Button height={50} width={50} text="+" onClick={()=>setCount(count+1)} />
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
  );
};
