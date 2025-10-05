import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Recruiter from "./pages/Recruiter";
import Downloads from "./pages/Downloads";
import NotFound from "./pages/NotFound";
import "./styles/index.css";

const router = createBrowserRouter([
  { path: "/", element: <App />, children: [
      { index: true, element: <Home /> },
      { path: "skills", element: <Skills /> },
      { path: "projects", element: <Projects /> },
      { path: "resume", element: <Resume /> },
      { path: "contact", element: <Contact /> },
      { path: "recruiter", element: <Recruiter /> },
      { path: "downloads", element: <Downloads /> },
      { path: "*", element: <NotFound /> }
  ] }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
