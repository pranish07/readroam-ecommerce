import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Header } from '../components/Header/Header'
import { Categories } from '../components/Categories/Categories'
import { TopPicks } from '../components/TopPicks/TopPicks'

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
