import React, { useState } from "react";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { BsCartCheck, BsCartPlus } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
// import "./SingleProduct.css";
import { loginTocontinue, remove, success } from "../../services/ToastService";
// import { addToCart } from "../../services/CartService";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { addToCart } from "../../services/cartService";
import { useData } from "../../contexts/DataContext";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../services/wishlistService";
export const ProductCard = ({ product, deleteIcon }) => {
  const token = localStorage.getItem("token");
  console.log("token",token)
  const navigate = useNavigate();
  let location = useLocation();
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    state: { wishlist },
    dispatch,
  } = useData();
  const { _id, imgSrc, rating, title, author, price, inStock } = product;
  const {
    state: { cart },
  } = useData();

  const handleProductClick = async (_id) => {
    navigate(`/product/${_id}`);
  };
  const handleAddToCart = () => {
    setIsDisabled(true);
    //token instead of product
    if (product) {
      console.log(product, dispatch, location);
      addToCart(product, dispatch, token, navigate, location);
      success("Added To Cart!");
      setTimeout(() => setIsDisabled(false), 1500);
    } else {
      navigate("/login", { state: { from: location } });
      loginTocontinue("Login To Continue");
    }
  };
  const handleAddToWishlist = () => {
    setIsDisabled(true);
    //token instead of product
    if (product) {
      addToWishlist(product, dispatch, token);
      success("Added To Wishlist!");
      setTimeout(() => setIsDisabled(false), 1500);
    } else {
      navigate("/login", { state: { from: location } });
      loginTocontinue("Login To Continue");
    }
  };

  const handleRemoveFromWishlist = () => {
    setIsDisabled(true);
    if (token) {
      removeFromWishlist(_id, dispatch, token);
      remove("Removed from Wishlist!");
      setTimeout(() => setIsDisabled(false), 1500);
    }
  };

  return (
    <div className="product-card">
      <div className="card-header image-container">
        <img
          src={imgSrc}
          alt={title}
          className="product-image "
          onClick={() => handleProductClick(_id)}
          height={300}
          width={200}
        />
      </div>
      <div className="name-rating-like">
        <p className="product-name">{title}</p>
        <p>{author}</p>
        <div className="rating-like">
          <div className="rating-and-size">
            <p className="ratings-info">
              <span className="rating-star">
                <span className="star-color-card">
                  <AiFillStar />
                </span>
                <span className="rating">{rating}</span>
              </span>
            </p>
          </div>

          <div>
            {token && wishlist?.some((data) => data._id === _id) ? (
              <span
                className="cart-like-btn liked"
                onClick={handleRemoveFromWishlist}
              >
                {!deleteIcon && <AiFillHeart />}
                {deleteIcon && <RiDeleteBin5Line />}
              </span>
            ) : (
              <button
                className="cart-like-btn like wislist-like"
                onClick={handleAddToWishlist}
                disabled={isDisabled}
              >
                <AiFillHeart />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="price-and-discount">
        <div className="prices">
          <span className="new-price">₹{price}</span>
        </div>
      </div>

      {token && cart?.some((data) => data._id === product._id) ? (
        <NavLink to="/cart">
          <button className="go-to-cart">
            Go To Cart <BsCartCheck className="icon-size" />
          </button>
        </NavLink>
      ) : inStock ? (
        <button
          // className={inStock ? "add-to-cart" : "go-to-cart"}
          onClick={handleAddToCart}
          disabled={isDisabled}
        >
          Add To Cart <BsCartPlus />
        </button>
      ) : (
        <button disabled>Out Of Stock</button>
      )}
    </div>
  );
};
