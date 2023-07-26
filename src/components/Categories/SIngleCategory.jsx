import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts/DataContext";

export const SingleCategory = ({ category }) => {
  const { categoryName} = category;
  const navigate = useNavigate();
  const { dispatch } = useData();

  const handleCategoryClick = () => {
    navigate("/products");
    dispatch({ type: "CLEAR_ALL_FILTERS" });
    dispatch({ type: "FILTER_BY_CATEGORIES", payload: category.categoryName });
  };
  return (
    <div
      onClick={handleCategoryClick}
    >
      <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" height={300} width={200} alt="categoryName" className="category-img" />
      <div className="toggle-background">
        <div className="category-info">
          <h3 className="category-name">{categoryName}</h3>
          {/* <p className="category-desc">{description}</p> */}
        </div>
      </div>
    </div>
  );
};
