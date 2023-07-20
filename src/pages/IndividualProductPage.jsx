import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard/ProductCard";

export const IndividualProduct = () => {
  const { productId } = useParams();

  return (
    <div>
      hello individual Product
      {/* <ProductCard {...product} /> */}
      {/* <ProductCard key={productId} product={product}/> */}
      <Link to="/products">See all</Link>
    </div>
  );
};
