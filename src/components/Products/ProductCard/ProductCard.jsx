import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";

export const ProductCard = ({ id, author, title }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div
      key={id}
      style={{
        border: "1px solid #efefef",
      }}
    >
      <p>
        {id}:{author}: {title}
        <span> {<Link to={`/products/${id}`}>View Details</Link>} </span>
        <span style={{ marginLeft: ".2rem" }}>
          {
            <Link to="/cart" onClick={() => addToCart(author)}>
              Cart
            </Link>
          }
        </span>
      </p>
    </div>
  );
};
