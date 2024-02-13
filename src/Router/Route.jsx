
import {
  createBrowserRouter,

} from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";
import Contact from "../Pages/contact";
import Projects from "../Pages/Projects";
import Skill from "../Pages/Skill";
import Main from "../Layout/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      },
      {
        path: "/skill",
        element: <Skill></Skill>
      }]
  },
]);


export default router;