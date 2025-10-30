import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import BackgroundBlob from "./BackgroundBlob.jsx";
import Navbar from "./Navbar.jsx";
import Firstpage from "./FirstPage.jsx";
import Background from "./Background.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import Layout from "./Layout.jsx";
import About from "./About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [{ path: "/random", element: <App /> }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
