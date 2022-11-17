import { useState } from "react";
import ViewBlog from "./pages/ViewBlog";
import MentalHack from "./dir/img/MentalHack.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Link, Route, Routes } from "react-router-dom";
import Video from "./pages/Video";
import ItemBlog from "./components/ItemBlog";
import Blog from "./pages/Blog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App ">
      {/* <Navbar /> */}
      <nav className="bg-bgPrimary w-full shadow-xl">
        {/* Desktop Menu */}
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="" className="flex items-center py-4 lg:px-2 px-0">
                  <img src={MentalHack} alt="logo" />
                </a>
              </div>
              {/* Primary Navbar Items */}
              <div className="hidden md:flex flex-nowrap justify-around items-center py-1 px-2 text-[12px] sm:text-[16px] w-full sm:w-auto sm:mx-8 font-semibold text-textWhite">
                <Link
                  to={"/"}
                  className="mx-2 mt-4 sm:mt-0 sm:mr-6 hover:font-bold"
                >
                  Beranda
                </Link>
                <Link
                  to={"/blog"}
                  className="mx-2 mt-4 sm:mt-0 sm:mr-6 hover:font-bold"
                >
                  Blogs
                </Link>
                <Link
                  to={"/video"}
                  className="mx-2 mt-4 sm:mt-0 sm:mr-6 hover:font-bold"
                >
                  Videos
                </Link>
                <Link
                  to={"/team"}
                  className="mx-2 mt-4 sm:mt-0 sm:mr-6 hover:font-bold"
                >
                  Our Team
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}

            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                  className="mr-4 w-6 h-6 text-textWhite hover:text-[#fff] scale-[1.2]"
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="hidden mobile-menu bg-textSecondary">
          <ul className="text-textWhite font-semibold">
            <li className="active">
              <Link
                to={"/"}
                className="block text-sm px-4 py-4 hover:bg-bgSekunder hover:text-textPrimary hover:font-bold transition duration-300 "
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to={"/blog"}
                className="block text-sm px-4 py-4 hover:bg-bgSekunder hover:text-textPrimary hover:font-bold transition duration-300"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to={"/video"}
                className="block text-sm px-4 py-4 hover:bg-bgSekunder hover:text-textPrimary hover:font-bold transition duration-300"
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                to={"/team"}
                className="block text-sm px-4 py-4 hover:bg-bgSekunder hover:text-textPrimary hover:font-bold transition duration-300"
              >
                Our Team
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <ViewBlog /> */}
      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<ViewBlog />}></Route>
        <Route path="/blog/:id" element={<Blog />}></Route>
        <Route path="/video" element={<Video />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
