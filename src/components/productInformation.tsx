import React from "react";
import ProductType from "../utils/types";

//cart[key] < number * products.price.
export const ProductInformation = (data: ProductType) => {
  const { id, name, price } = data;
  return (
    <div>
      <p>{name}</p>
      <p>Price: {price}</p>
    </div>
  );
};
