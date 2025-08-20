import React from 'react'
import ReactDOM from 'react-dom/client'
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS from node module folder
import "./index.css"
import App from "./App.tsx"
import HomePage from "./pages/Homepage.tsx"
import ProductPage from "./pages/ProductPage.tsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="product/:slug" element={<ProductPage />} />
      {/* Define other routes here if needed */}
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
    </Route>
  )
);

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)