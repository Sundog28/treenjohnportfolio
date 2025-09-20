import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { RecruiterProvider } from "./context/RecruiterContext";
import { router } from "./router";
import "./styles/index.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RecruiterProvider>
        <RouterProvider router={router} />
      </RecruiterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
