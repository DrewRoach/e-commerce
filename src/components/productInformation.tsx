import{ useContext, useState } from "react";
import './products.scss';
import { CartContext } from "../utils/cartcontext";
import { Link} from 'react-router-dom';
import { Quantity } from "./quantity";

// Assuming ProductType has properties like product_name, price, img, etc.
import ProductType from '../utils/types';

export const ProductInformation = (data: ProductType) => {
  const { product_name, price, img} = data;
  const [count, setCount] = useState(0);
  const { handleAddToCart } = useContext(CartContext);

  return (
    <div className="wrapper">
      <div className="content">
        <div className="product-grid product-grid--flexbox">
          <div className="product-grid__wrapper">
            <div className="product-grid__product-wrapper">
              <div className="product-grid__product">
                <div className="product-grid__img-wrapper">
                  <img src={img} className="productImage" alt={product_name} />
                </div>
                <span className="product-grid__title">{product_name}</span>
                <span className="product-grid__price">${price}</span>
                <div className="product-grid__extend-wrapper">
                  <div className="product-grid__extend">
                    <p className="product-grid__description">
                      Elevate your style with our modern {product_name} frames. Sleek design, comfortable fit, and crafted for durability. Make a statement wherever you go.
                    </p>
                    {data.quantity > 0 ? (
                        <>
                          <>
                          <span className="product-grid__btn product-grid__add-to-cart" onClick={() => handleAddToCart!(data, 1)}>
                            <i className="fa fa-cart-arrow-down" ></i> Add to cart
                          </span>
                          </>
                        </>
                      ) : (
                        <>
                          <p>Sold out</p>
                        </>
                      )}
                    <Link to={`/productDetails`} state={{ data }}>
                    <span className="product-grid__btn product-grid__view">
                      <i className="fa fa-eye"></i> View more
                    </span>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
