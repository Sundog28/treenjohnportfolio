import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Recruiter from "./pages/Recruiter";
import Downloads from "./pages/Downloads";
import NotFound from "./pages/NotFound";
export const router=createBrowserRouter([{
  path:"/", element:<App/>, errorElement:<NotFound/>, children:[
    {index:true, element:<Home/>},
    {path:"skills", element:<Skills/>},
    {path:"projects", element:<Projects/>},
    {path:"resume", element:<Resume/>},
    {path:"contact", element:<Contact/>},
    {path:"recruiter", element:<Recruiter/>},
    {path:"downloads", element:<Downloads/>}
  ]
}]);
