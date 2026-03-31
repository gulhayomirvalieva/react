import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ShopContextProvider from "./context/ShopContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);
