import React, { useContext, useEffect, useState } from "react";
import { Filter } from "./Filter/Filter";
import { ProductCard } from "./ProductCard/ProductCard";
import { CartContext } from "../../contexts/CartContext";

export const Shop = () => {
  const { cart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data.products);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h3>items in cart: {cart.length}</h3>
      <Filter products={products} />
      {products.map((product) => (
        <ProductCard {...product} products={products} />
      ))}
    </div>
  );
};
