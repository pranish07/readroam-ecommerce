import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
// import { Cart } from '../components/Cart/Cart'
import { useData } from '../contexts/DataContext';

export const CartPage = () => {
  const {
    state: { cart },
  } = useData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Navbar />
        {cart?.length > 0 ? (
        <div>
          <h2 className="text-center top-margin">My Cart({cart?.length})</h2>
          <div className="cart-main">
            <div className="cart-container">
              {cart?.map((product) => (
                // <SingleCartProduct key={product._id} product={product} />
                <p>Another cart product</p>
              ))}
            </div>
            {/* <PriceDetails /> */}
          </div>
        </div>
      ) : (
        <div className="text-center">
          {/* <img src={empty_cart} alt="empty_cart" height={250} width={250} /> */}
          <h2 className="text-center top-margin">Your Cart is Empty ☹️</h2>
        </div>
      )}
    </div>
  )
}
