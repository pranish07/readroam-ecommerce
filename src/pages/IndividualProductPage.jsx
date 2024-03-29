import React, { useEffect, useState } from "react";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../services/cartService";
import {
  addToWishlist,
  removeFromWishlist,
} from "../services/wishlistService";

import {
  loginTocontinue,
  remove,
  success,
} from "../services/ToastService";
import { useData } from "../contexts/DataContext";
import { Navbar } from "../components/Navbar/Navbar";

export const IndividualProduct = () => {
  const { productId } = useParams();
  const {
    state: { cart, wishlist, products },
    dispatch,
  } = useData();

  let location = useLocation();
  const [isDisabled, setISDisabled] = useState(false);
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const product = products?.find((prod) => prod?._id === productId) || {};

  const{author,title,categoryName,description,_id,id,rating,price,inStock,imgSrc} = product;

  const handleAddToCart = () => {
    setISDisabled(true);
    if (token) {
      addToCart(product, dispatch, token, navigate, location);
      success("Added To Cart!");
      setTimeout(() => setISDisabled(false), 1500);
    } else {
      navigate("/login", { state: { from: location } });
      loginTocontinue("Login To Continue");
    }
  };
  const handleAddToWishlist = () => {
    setISDisabled(true);
    if (token) {
      addToWishlist(product, dispatch, token);
      success("Added To Wishlist!");
      setTimeout(() => setISDisabled(false), 1500);
    } else {
      navigate("/login", { state: { from: location } });
      loginTocontinue("Login To Continue");
    }
  };

  const handleRemoveFromWishlist = () => {
    setISDisabled(true);
    if (token) {
      removeFromWishlist(product._id, dispatch, token);
      remove("Removed from Wishlist!");
      setTimeout(() => setISDisabled(false), 1500);
    }
  };
  console.log(product)
  return (
    <>
    <Navbar />
      {product && (
        <div className="product-detail-main-container">
          <div className="product-detail-container flex justify-center align-center wrap">
            <div className="detail-img-box image-container">
              {product.isTrending && (
                <span className="product-details-trending">Trending</span>
              )}
              <img
                src={imgSrc}
                alt={title}
                className="detail-img"
                height={300} width={200}
              />
              <div className="detail-star-rating rating-star ">
                <AiFillStar className="star-color-productDetail" />
                <span>{rating}</span>
              </div>
            </div>

            <div className="product-details flex direction-column justify-between">
              <div className="flex justify-between ">
                <h2 className="font-1-3 header-md">{title}</h2>
                {token && wishlist.some((prod) => prod._id === product._id) ? (
                  <span
                    className="cart-like-btn liked"
                    onClick={handleRemoveFromWishlist}
                    disabled={isDisabled}
                  >
                    <AiFillHeart />
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
              <div>
                <span >
                  ₹{price}
                </span>
             
              </div>
              <div>
                <span className="right-margin font-bold font-sm font-md">
                  Availability :{" "}
                </span>{" "}
                <span className="in-stock font-md sm-fontsize">
                  {inStock ? (
                    "In Stock"
                  ) : (
                    <span className="font-sm font-md" style={{ color: "red" }}>
                      Out Of Stock
                    </span>
                  )}
                </span>
              </div>
              <div>
                <span className="right-margin font-sm font-bold font-md">
                  Description :{" "}
                </span>
                <span className="sm-fontsize line-height">
                  {description}
                </span>
              </div>

              <div className="top-margin">
                {token && cart.some((data) => data._id === product._id) ? (
                  <NavLink to="/cart">
                    <button className="go-to-cart">
                      Go To Cart <BsCartCheck className="icon-size" />
                    </button>
                  </NavLink>
                ) : product.inStock ? (
                  <button
                    className="add-to-cart sm-fontsize"
                    onClick={handleAddToCart}
                    disabled={isDisabled}
                  >
                    Add To Cart
                  </button>
                ) : (
                  <button className="go-to-cart disabled-element" disabled>
                    Out Of Stock
                  </button>
                )}
              </div>
              <div className="top-margin margin-bottom-1">
                {token && wishlist.some((data) => data._id === product._id) ? (
                  <NavLink to={"/wishlist"}>
                    <button className="go-to-cart liked">
                      Go To Wishlist <AiFillHeart />
                    </button>
                  </NavLink>
                ) : (
                  <button
                    onClick={handleAddToWishlist}
                    className="add-to-cart sm-fontsize "
                    disabled={isDisabled}
                  >
                    Add To Wishlist <AiFillHeart />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
