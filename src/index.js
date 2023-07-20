import React from "react";
import ReactDOM from "react-dom";

import { makeServer } from "./server";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { CartProvider, CartContext } from "./contexts/CartContext";
import {DataProvider} from "./contexts/DataContext";
// Call make Server
makeServer();

export { CartContext };

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
