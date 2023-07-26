import React, { createContext, useContext, useReducer, useState } from "react";
import { AddressReducer,initialState } from "../reducers/AddressReducer";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
const [addressState,addressDispatch]=useReducer(AddressReducer,initialState)

const [values, setValues] = useState({
  id:"",
  name: "",
  street: "",
  city: "",
  state: "",
  country: "",
  postalCode: "",
  MobileNum: "",
});
const [isHideBox,setisHideBox]=useState(false)

    return (
    <AddressContext.Provider value={{setisHideBox,isHideBox,addressState,addressDispatch,setValues,values,}}>{children}</AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
