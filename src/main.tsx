import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page.tsx";
import { App } from "./App.tsx";
import Home from "./pages/home.tsx";
import { CartContextProvider } from "./utils/cartcontext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);
