import React, { useEffect, useState } from "react";
import "./topPicks.css";

export const TopPicks = () => {
  const [topPicks, setTopPicks] = useState([]);

  const getData = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    const fourDataForTopPicks = data.products.slice(0, 4);
    setTopPicks(fourDataForTopPicks);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2>TopPicks</h2>
      {topPicks.map(({ author, categoryName, id, price, title, _id }) => (
        <div key={id}>
          <p>
            Author:{author},categoryName: {categoryName},id:{id},price:{price}
            ,title:{title},_id:{_id}
          </p>
        </div>
      ))}
    </div>
  );
};
