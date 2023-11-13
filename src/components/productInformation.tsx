import ProductType from "../utils/types";

//cart[key] < number * products.price.
export const ProductInformation = (data: ProductType) => {
  const { product_name, price, img} = data;
  return (
    <div className="productInfo">
      <p>{product_name}</p>
      <img src={img} className="productImage"></img>
      <p>Price: {price}</p>
    </div>
  );
};
