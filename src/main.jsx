import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import UserPage from "./components/UserPage/userPage";
import "./index.css";   // import style.css

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/u/:id", element: <UserPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
