import "./main.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/About/AboutPage.jsx";
import ContactPage from "./Pages/ContactUs/ContactPage.jsx";
import GalleryPage from "./Pages/Gallery/GalleryPage.jsx";
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
    path: "/About",
    element: (
      <Layout>
        <AboutPage />
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
