import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Todos from "./components/Todos.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Aboutus from "./components/Aboutus.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element:  (
      <>
        <Layout />
        <ScrollRestoration /> 
      </>
    ),
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
  </StrictMode>
);
