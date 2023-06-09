import React from 'react'
import { Navbar } from '../components/Home/Navbar/Navbar'
import { Shop } from '../components/Products/Shop'
import { ProductCard } from '../components/Products/ProductCard/ProductCard'

export const ShopPage = () => {
  return (
    <div>
        <Navbar />
        
        <Shop />
        <ProductCard />
    </div>
  )
}
