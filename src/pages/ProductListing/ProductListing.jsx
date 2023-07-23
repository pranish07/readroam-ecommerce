import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import { DataContext } from "../../contexts/DataContext";
import {Filter} from "../../components/Filter/Filter"
import { ProductCard } from "../../components/ProductCard/ProductCard";
import"./productListing.css"
import { Navbar } from "../../components/Navbar/Navbar";
export const ProductListing = () => {
  const { cart } = useContext(CartContext);
  const {productState} = useContext(DataContext);
  
  return (
    <div>
      <Navbar />
      <h3>items in cart: {cart.length}</h3>
      <div className="products-container">
        <div className="filters-container">
          <Filter />
      {/* <Filter products={products} /> */}
      </div>
      <div className="product-listing-container">
      {/* {products.map((product) => (
        <ProductCard {...product} products={products} />
      ))} */}

      {productState?.products.map((product)=>(
     <div>
        <ProductCard key={product.id} product={product} />
     </div>   
      ))}
      </div>
      </div>
    </div>
  );
};
