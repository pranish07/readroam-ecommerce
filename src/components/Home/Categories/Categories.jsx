import React, { useEffect, useState } from "react";
import "./categories.css";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setCategories(data.categories);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <h2>Now,get your books delivered within 24 hours to your desktop</h2>
      <section className="category-container">
        {categories.map(({ _id, id, categoryName, description }) => (
          <a href="/shop" key={id}>
            <img
              src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
              alt=""
              width={300}
              height={300}
            />
            <article>{categoryName}</article>
          </a>
        ))}
      </section>
    </div>
  );
};
