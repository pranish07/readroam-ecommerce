import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { DataContext } from "../../contexts/DataContext";

import "./productCard.css"
export const ProductCard = ({key,product}) => {
  const { addToCart } = useContext(CartContext);
  const {productState} = useContext(DataContext)
  const navigate = useNavigate();
  const {_id,title,imgSrc,price,inStock,rating,author} = product;
  return (

    <div className="productCard">
      <div className="image-container" onClick={()=>navigate(`/products/${_id}`)}>
        <img src={imgSrc} alt="" height={200} width={100}/>
      </div>
      <div className="info-container">
        <NavLink to={`product/${_id}`}>
          <h3>{title}</h3>
        </NavLink>
        <div className="rating">
          <p>{rating}</p>
        </div>
        <div className="price">
          <div className="prices">
            <p className="old-price">Rs.{price}</p>
          </div>
        </div>
      </div>
      <button onClick={()=>addToCart(title)}>Add to cart</button>
      <button>Add to wishlist</button>
    </div>

    // <div
    //   key={id}
    //   style={{
    //     border: "1px solid #efefef",
    //   }}
    // >

    //   <p>
    //     {id}:{author}: {title}
    //     <span> {<Link to={`/products/${id}`}>View Details</Link>} </span>
    //     <span style={{ marginLeft: ".2rem" }}>
          
    //         <Link to="/cart" onClick={() => addToCart(author)}>
    //           Cart
    //         </Link>
          
    //     </span>
    //   </p>
    // </div>

  );
};
