import React from "react";
import ReactDOM from "react-dom";

import { makeServer } from "./server";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
// import { CartProvider, CartContext } from "./contexts/CartContext";
import { DataProvider } from "./contexts/DataContext";
import { AuthProvider } from "./contexts/AuthContext";
import { OrderProvider } from "./contexts/OrderContext";
import { AddressProvider } from "./contexts/AddressContext";
// Call make Server
makeServer();

// export { CartContext };

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <AuthProvider>
          <OrderProvider>
            <AddressProvider>
              <App />
            </AddressProvider>
          </OrderProvider>
        </AuthProvider>
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
