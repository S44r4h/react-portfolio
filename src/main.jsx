import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  { path: "/firstpage", element: <Firstpage /> },
  { path: "/About", element: <About /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </StrictMode>
);
