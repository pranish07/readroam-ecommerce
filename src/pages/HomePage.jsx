import React from 'react'
import { Navbar } from '../components/Home/Navbar/Navbar'
import { Header } from '../components/Home/Header/Header'
import { Categories } from '../components/Home/Categories/Categories'
import { TopPicks } from '../components/Home/TopPicks/TopPicks'

export const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Categories />
        <TopPicks />
    </div>
  )
}
