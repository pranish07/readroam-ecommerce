import React, { useState } from "react";
import "./filter.css";
import { useData } from "../../contexts/DataContext";

export const Filter = ({ products }) => {
  const [slider, setSlider] = useState(0);
  const { productState, productDispatch } = useData();
  const handleChange = (e) => {
    setSlider(e.target.value);
  };
  console.log(productState);
  return (
    <div>
      <h3>Filters</h3>
      <div className="clear-filters">
        <button
          onClick={() =>
            productDispatch({
              type: "CLEAR_FILTERS",
              payload: { products: productState.products },
            })
          }
        >
          Clear Filters
        </button>
      </div>
      <div className="sortby">
        <label htmlFor="sortHigh">High to low</label>
        <input
          type="radio"
          name="sort"
          id="sortHigh"
          onChange={() =>
            productDispatch({ type: "SORT_BY_PRICE", payload: "HIGH_TO_LOW" })
          }
          checked={productState.sortByPrice === "HIGH_TO_LOW"}
        />
        <label htmlFor="sortLow">Low to High</label>
        <input
          type="radio"
          name="sort"
          id="sortLow"
          onChange={() =>
            productDispatch({ type: "SORT_BY_PRICE", payload: "LOW_TO_HIGH" })
          }
          checked={productState.sortByPrice === "LOW_TO_HIGH"}
        />
      </div>

      <div className="genre-category-container">
        <h3>Genre Category</h3>
        <input type="checkbox" id="horror" />
        <label htmlFor="horror">horror</label>

        <input type="checkbox" id="fantasy" />
        <label htmlFor="fantasy">fantasy</label>

        <input type="checkbox" id="sci-fi" />
        <label htmlFor="sci-fi">sci-fi</label>

        <input type="checkbox" id="non-fiction" />
        <label htmlFor="non-fiction">non-fiction</label>

        <input type="checkbox" id="romance" />
        <label htmlFor="romance">romance</label>
      </div>

      <div className="price-slider">
        <h3>Price</h3>
        <input
          type="range"
          min="1"
          max="100"
          value={slider}
          className="slider"
          id="myRange"
          onChange={handleChange}
        />
      </div>

      <div className="rating-container">
        <ul className="rating-list">
          <h3>Rating</h3>
          <li>
            <input type="radio" name="rating" value="2" id="rating-4" />{" "}
            <label htmlFor="rating-4">4 star and above</label>
          </li>
          <li>
            <input type="radio" name="rating" value="3" id="rating-3" />{" "}
            <label htmlFor="rating-3">3 star and above</label>
          </li>
          <li>
            <input type="radio" name="rating" value="4" id="rating-2" />{" "}
            <label htmlFor="rating-2">2 star and above</label>
          </li>
          <li>
            <input type="radio" name="rating" value="5" id="rating-1" />
            <label htmlFor="rating-1">1 star and above</label>
          </li>
        </ul>
      </div>
    </div>
  );
};
