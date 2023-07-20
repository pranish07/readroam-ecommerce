import React, { createContext, useContext, useEffect, useReducer, useState } from "react";

export const DataContext = createContext();

const initialState = {
  products: [],
  allCategories: [],
  searchInput: "",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "INITIAL_DATA":
      return { ...state, products: payload };
    default:
      return state;
  }
};

export function DataProvider({ children }) {

  const [productState,productDispatch] = useReducer(reducer,initialState)
// const [products,setProducts] = useState({})

const getProducts = async()=>{
  try{
    const response = await fetch(`api/products`);
    const {products} = await response.json();
    productDispatch({type:"INITIAL_DATA",payload: products })
  }catch(err){
    console.error(err);
  }
}
  useEffect(()=>{
    getProducts();
  },[])


  return <DataContext.Provider value={{productState,productDispatch}}>{children}</DataContext.Provider>;
}

export const useData = () => useContext(DataContext);
