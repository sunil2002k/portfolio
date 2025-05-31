// src/index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  // NO ScrollRestoration import here, it's used in Layout.jsx
} from "react-router-dom";
import Todos from "./components/Todos.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Aboutus from "./components/Aboutus.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import SparkleCursor from "./components/SparkleCursor.jsx"; // Keep this here for top-level fixed effect


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout now contains ScrollRestoration
    children: [
      { path: "", element: <Home /> },
      {
        path: "todos",
        element: <Todos />,
      },
      { path: "aboutus", element: <Aboutus /> },
      { path: "contact", element: <Contact /> },
      { path: "projects", element: <Projects /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* Keep SparkleCursor here for maximum z-index and fixed positioning robustness */}
    <SparkleCursor/>
  </StrictMode>
);