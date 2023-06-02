import React from "react";
import ReactDOM from "react-dom";
import { makeServer } from "./server";
import {App} from "./App"
import {BrowserRouter} from "react-router-dom"
import "./index.css"
// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
