import "./main.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/About/AboutPage.jsx";
import ContactPage from "./Pages/ContactUs/ContactPage.jsx";
import ProductPage from "./Pages/Product/ProductPage.jsx";
import Layout from "./Pages/Layout.jsx";
import OrderDelivery from "./Pages/OrderDelivery.jsx";

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
    path: "/OrderDelivery",
    element: (
      <Layout>
        <OrderDelivery />
      </Layout>
    ),
  },
  {
    path: "/Product",
    element: (
      <Layout>
        <ProductPage />
      </Layout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
