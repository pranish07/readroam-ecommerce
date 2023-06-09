import React, { useEffect, useState } from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import { useParams, Link } from 'react-router-dom';

export const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data.products);
  };
  useEffect(() => {
    getData();
  }, []);
  const {productId} = useParams(); 
  
  function getProductDetails(products, productId) {
    return products.find((product) => product.id === productId);
  }

  const product = getProductDetails(products, productId);
  return (
    <div>
      <ProductCard {...product} />
      <Link to ="/products">See all</Link>
    </div>
  )
}
