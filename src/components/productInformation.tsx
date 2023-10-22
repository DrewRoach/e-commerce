import ProductType from "../utils/types";

//cart[key] < number * products.price.
export const ProductInformation = (data: ProductType) => {
  const { name, price, img } = data;
  return (
    <div className="productInfo">
      <p>{name}</p>
      <img src={img} className="productImage"></img>
      <p>Price: {price}</p>
    </div>
  );
};
