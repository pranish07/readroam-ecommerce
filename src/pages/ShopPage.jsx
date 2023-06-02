import React from 'react'
import { Navbar } from '../components/Home/Navbar/Navbar'
import { Shop } from '../components/Products/Shop'
import { ProductListing } from '../components/Products/ProductListings/ProductListing'

export const ShopPage = () => {
  return (
    <div>
        <Navbar />
        <Shop />
        <ProductListing />
    </div>
  )
}
