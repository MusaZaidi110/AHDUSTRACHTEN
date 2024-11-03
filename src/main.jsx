import "./main.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ContactPage from "./Pages/ContactUs/ContactPage.jsx";
import GalleryPage from "./Pages/GalleryPage.jsx";
import Layout from "./Pages/Layout.jsx";
import ProductDetail from "./Pages/ProductDetails/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/Products/:id",
    element: (
      <Layout>
        <ProductDetail />
      </Layout>
    ),
  },
  {
    path: "/Contact",
    element: (
      <Layout>
        <ContactPage />
      </Layout>
    ),
  },
  {
    path: "/Gallery",
    element: (
      <Layout>
        <GalleryPage />
      </Layout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
