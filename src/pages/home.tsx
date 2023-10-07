import { PRODUCTS } from "../utils/products";
import { Product } from "../components/product";
const Home = () => {
  return (
    <div className="productContainer">
      <h1 style={{gridColumn:"1/4", textAlign:"center"}}>Products</h1>
      {PRODUCTS.map((product) => {
        return (
            <Product {...product} />
        );
      })}
    </div>
  );
};

export default Home;
