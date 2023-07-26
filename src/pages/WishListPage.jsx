import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { useData } from '../contexts/DataContext';
import { IndividualProduct } from './IndividualProductPage';

export const WishListPage = () => {
  const {
    state: { wishlist },
  } = useData();

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  console.log(wishlist)
  return (
    <div>
        <Navbar />
        {wishlist?.length > 0 ? (
        <div>
          <h2 className="text-center top-margin">
            My Wishlist({wishlist?.length})
          </h2>
          <div className="wishlist-container">
            {wishlist?.map((product) => (
              <IndividualProduct key={product._id} product={product} deleteIcon />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          {/* <img src={empty_wishlist} alt="empty_cart" height={250} width={250} /> */}
          <h2 className="text-center top-margin">Your Wishlist is Empty ☹️</h2>
        </div>
      )}
    </div>
  )
}
