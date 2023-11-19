import { useEffect, useState } from "react";
import { Product } from "../components/product";
import ProductType from "../utils/types";
import axios from 'axios';
const Products = () => {
  const [products, setProducts] = useState<ProductType[] | []>([])

  //fetching all the products
  useEffect(() => {
    axios.get<ProductType[]>('http://localhost:8000/items/').then((resp)=>{
      console.log(resp.data);
      setProducts(resp.data);
    })
    
  },[])
  
  return (
    <div className="productContainer">
      <h1 style={{gridColumn:"1/4", textAlign:"center"}}>Products</h1>
      {products.map(product => {return(
        <Product {...product}/>
      )})}
    </div>
  );
};

export default Products;
