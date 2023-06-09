import React from 'react'

export const Filter = ({products}) => {
  console.log("this is filter",products)
  
  return (
    <div>
      <h3>Filter</h3> 
      <label htmlFor="sortHigh">High to low</label>
      <input type="radio" name="sort" id="sortHigh" />
      <label htmlFor="sortLow">Low to High</label>
      <input type="radio" name="sort" id="sortLow" />
      
      
    </div>

  )
}
