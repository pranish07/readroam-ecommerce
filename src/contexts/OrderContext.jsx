import React, { createContext, useContext, useReducer, useState } from "react";
import { OrderReducer, initialState } from "../reducers/OrderReducer";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(OrderReducer, initialState);
  const [couponInfo, setCouponInfo] = useState({ name: "", value: 0 });

  return (
    <OrderContext.Provider
      value={{ orderState, orderDispatch, couponInfo, setCouponInfo }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
