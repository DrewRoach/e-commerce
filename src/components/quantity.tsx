import { Button } from "./button";
export const Quantity = (props: any) => {
  //const { cart, handleIncreaseCart, handleRemove } = useContext(CartContext);

  const handleInputQuantiy = (val: number) => {
    if (!val) {
      setCount(0);
    } else {
      val >= quantity ? setCount(quantity) : setCount(val);
    }
  };
  const { count, setCount, quantity } = props;
  return (
    <div className="quantityContainer">
      <Button
        disabled={count >= quantity}
        height={50}
        width={50}
        text="+"
        onClick={() => setCount(count + 1)}
      />
      <input
        type="number"
        value={count}
        onChange={(e) => {
          handleInputQuantiy(e.target.valueAsNumber);
        }}
        defaultValue={0}
        style={{ textAlign: "center", width: "50%" }}
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
