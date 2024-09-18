import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar";
import Hero from "./hero";
import Footer from "./footer";
import Articles from "./articles";
import About from "./about";
import Home from "./home";
import Contact from "./contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./Detail";
import ArticleDetail from "./Detail";

const data = {
  name: "Shubam"
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About data={data} />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/articles/:title",
    element: <ArticleDetail/>
  }
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
