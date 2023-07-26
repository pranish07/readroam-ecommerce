import React, { useEffect, useState } from "react";
import "./categories.css";
import { useData } from "../../contexts/DataContext";
import { SingleCategory } from "./SIngleCategory";

export const Categories = () => {
const{state:{categories}} = useData()
console.log(categories)
  return (
    <div>
      <h2>Categories</h2>
      <h2>Now,get your books delivered within 24 hours to your desktop</h2>
      <section className="category-container">
        {categories.map((category) => (
          <SingleCategory category={category} key={category.id} />
        ))}
      </section>
    </div>
  );
};
