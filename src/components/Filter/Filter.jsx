import React, { useState } from "react";
import "./filter.css";
import { useData } from "../../contexts/DataContext";

export const Filter = () => {
  const {
    dispatch,
    state: {
      filters: { sort, selectedCategories, selectedSizes, byStock, rating },
      products,
    },
  } = useData();
  const [slider, setSlider] = useState(0);
  // const [priceRange, setPriceRange] = useState(1500);

  // const { productState, productDispatch } = useData();
  const [isFilters, setIsFilters] = useState(false);

  const handleChange = (e) => {
    setSlider(e.target.value);
  };
  const genreFilter = products.reduce(
    (acc, { categoryName }) =>
      acc.includes(categoryName) ? [...acc] : [...acc, categoryName],
    []
  );
  const handleRangeChange = (value) => {
    dispatch({ type: "FILTER_BY_RATING", payload: value });
  };

  // const handlePriceRangeChange = (e) => {
  //   setPriceRange(e.target.value);
  //   dispatch({ type: "FILTER_BY_PRICE_RANGE", payload: e.target.value });
  // };

  return (
    <div>
      <h3>Filters</h3>
      <div className="clear-filters">
        <button onClick={() => dispatch({ type: "CLEAR_ALL_FILTERS" })}>
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
            dispatch({ type: "SORT_BY_PRICE", payload: "HIGH_TO_LOW" })
          }
          checked={sort === "HIGH_TO_LOW"}
        />
        <label htmlFor="sortLow">Low to High</label>
        <input
          type="radio"
          name="sort"
          id="sortLow"
          onChange={() =>
            dispatch({ type: "SORT_BY_PRICE", payload: "LOW_TO_HIGH" })
          }
          checked={sort === "LOW_TO_HIGH"}
        />
      </div>

      <div className="genre-category-container">
        <h3>Genre Category</h3>
        {genreFilter?.map((category, index) => (
          <label key={index}>
            <input
              type="checkbox"
              value={category}
              onChange={(e) =>
                dispatch({ type: "FILTER_BY_CATEGORIES", payload: category })
              }
              checked={selectedCategories.includes(category)}
            />
            {category}
          </label>
        ))}
      </div>
      {/* 
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
      </div> */}

      <div className="rating-container">
        <ul className="rating-list">
          <h3>Rating</h3>
          {[1, 2, 3, 4].map((num,index) => (
            <li key={index}>
              <input
                type="radio"
                name="rating"
                value={num}
                id="rating"
                onChange={() => handleRangeChange(num)}
                checked={rating === num}
              />{" "}
              <label htmlFor="rating">{num} star and above</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
