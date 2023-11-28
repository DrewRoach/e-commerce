import { useEffect, useState } from "react";
import { Product } from "../components/product";
import ProductType from "../utils/types";
import axios from 'axios';
import "./productsPage.css"
import FilterForm from './filterProducts';

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
    // <main className="container-fluid mb-3">
    //   <div className="row p-2">
    //     {/* Items Filter */}
    //     <div className="col-12 col-sm-4 col-lg-3">
    //       <FilterForm />
    //     </div>
    //     {/* End Items Filter */}

    //     {/* Items Container */}
    //     <div className="col-12 col-sm-8 col-lg-9">
    //       <div className="col-12 d-flex justify-content-between align-items-center">
    //         <div>
    //           <span>10 of 32 items</span>
    //         </div>
    //         <div>
    //           <span className="mr-1">Sort by</span>
    //           <select className="custom-select">
    //             <option>Ascending - Price</option>
    //             <option>Descending - Price</option>
    //             <option>Ascending - Ratings</option>
    //             <option>Descending - Ratings</option>
    //           </select>
    //         </div>
    //       </div>

    //       {/* Items */}
    //       <div className="row mt-3">
    //         <div className="col-sm-6 col-md-4 card">
    //           <figure>
    //           {products.map(product => {return(
    //     <Product {...product}/>
    //   )})}
    //           </figure>
    //         </div>
    //       </div>
    //       {/* End Items */}
    //     </div>
    //     {/* End Items Container */}

    //     {/* Pagination */}
    //     <div className="col-12">
    //       {/* ... (Pagination component or logic can be included here) */}
    //     </div>
    //     {/* End Pagination */}
    //   </div>
    // </main>
    <div>
      <h1 style={{textAlign:"center"}}>All Products</h1>
      {products.map(product => {return(
        <Product {...product}/>
      )})}
    </div>
  );
};

export default Products;
