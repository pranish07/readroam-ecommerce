import React, { useEffect, useState } from "react";

export const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data.products);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>
    {products.map(({author,id,price,title})=>(
      <div key={id}>
        {id}:{author}: {title}
      </div>
    ))}

  </div>;
};
