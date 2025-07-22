import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout, MdMenu, MdCloseFullscreen } from "react-icons/md";
import { useAuthStore } from "../store/authStore";
import header_img from "../assets/header_img.png";

export default function HeaderComponent({ business }) {
  const navigate = useNavigate();

  const [showNav, setShowNav] = useState(false);
  const [activeClass, setActiveClass] = useState("");

  // const [visible, setVisible] = useState(true);

  const { error, isLoading, logout, user } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="w-full px-5 md:px-20 py-2 sm:py-4 bg-slate-950 shadow fixed left-0 top-0 flex items-center justify-between z-50">
      <Link to="/">
        <div className="text-white flex items-center gap-1">
          <img
            src={header_img}
            alt=""
            className="w-20 md:w-32 lg:w-40 flex-1"
          />

          {/* <p className="hidden sm:inline-block text-3xl ml-3">
            Infonet <span className="italianno-regular text-3xl">Grafix</span>
          </p> */}
        </div>
      </Link>

      <nav className="hidden lg:block">
        <ul className="flex items-center justify-between gap-8">
          <NavLink
            to="/"
            className={`flex flex-col items-center px-5 py-1 rounded-md hover:bg-gray-600/20 hover:border-[1px] hover:border-gray-600`}
          >
            <p>Home</p>
            <hr className="w-full border-none h-[2px] bg-white/80 mt-1 hidden" />
          </NavLink>
          <NavLink
            to="/projects"
            className={`flex flex-col items-center px-5 py-1 rounded-md hover:bg-gray-600/20 hover:border-[1px] hover:border-gray-600`}
          >
            <p>Projects</p>
            <hr className="w-full border-none h-[2px] bg-white/80 mt-1 hidden" />
          </NavLink>
          <NavLink
            to="/blogs"
            className={`flex flex-col items-center px-5 py-1 rounded-md hover:bg-gray-600/20 hover:border-[1px] hover:border-gray-600`}
          >
            <p>Blog</p>
            <hr className="w-full border-none h-[2px] bg-white/80 mt-1 hidden" />
          </NavLink>
          <NavLink
            to="/about"
            className={`flex flex-col items-center px-5 py-1 rounded-md hover:bg-gray-600/20 hover:border-[1px] hover:border-gray-600`}
          >
            <p>About</p>
            <hr className="w-full border-none h-[2px] bg-white/80 mt-1 hidden" />
          </NavLink>
          <NavLink
            to="/contact"
            className={`flex flex-col items-center px-5 py-1 rounded-md hover:bg-gray-600/20 hover:border-[1px] hover:border-gray-600`}
          >
            <p>Contact</p>
            <hr className="w-full border-none h-[2px] bg-white/80 mt-1 hidden" />
          </NavLink>
        </ul>
      </nav>

      <div className="flex items-center gap-8">
        {user ? (
          <div className="bg-transparent md:bg-white px-2 py-1 rounded flex items-center gap-2">
            <Link to={"/user-dashboard?tab=dash"} className="flex items-center">
              <img src={user.avatar} className="rounded-full h-8 w-8" />
            </Link>
            <p className="hidden md:block font-bold text-md text-blue-800 uppercase cursor-pointer underline underline-offset-2 hover:scale-110 transition-all duration-500">
              {user.name.split(" ")[0]}
            </p>
            <div className="hidden md:flex items-center ml-4 bg-red-100 px-2 py-1 rounded">
              <MdLogout
                className="text-lg text-red-600 cursor-pointer hover:scale-110 transition-all duration-300"
                onClick={handleLogout}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 text-md">
            <Link
              to="/user-login"
              className="bg-white/15 backdrop-blur-md px-6 py-1 rounded text-white hover:text-green-950 hover:bg-white"
            >
              Login
            </Link>{" "}
            {/* <Link
            to="/add-new-business"
            className="bg-[#2066a8] px-3 py-1 rounded text-white hover:text-blue-800 hover:bg-white"
          >
            Register
          </Link> */}
          </div>
        )}

        {/* for small screens */}
        <div
          className="block md:hidden z-99"
          onClick={() => setShowNav(!showNav)}
        >
          <MdMenu className="text-white" size={30} />
        </div>
      </div>
      {showNav ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="block md:hidden w-full sm:w-[50%] h-screen bg-black absolute top-12 right-0 opacity-90 p-4"
        >
          <div className="flex flex-col p-4 w-full">
            <div className="flex items-center justify-between w-full gap-4">
              <p className="flex-1 h-[1px] bg-gray-500"></p>
              <MdCloseFullscreen
                className="text-gray-500"
                size={20}
                onClick={() => setShowNav(!showNav)}
              />
            </div>
            <ul className="flex flex-col gap-5 bg-white/10 opacity-55 backdrop-blur-md shadow-lg rounded-xl mt-5 ">
              <li>
                <Link to="/projects">PROJECTS</Link>
              </li>
              <li>
                <Link to="/blogs">BLOG</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
              <li>
                <p onClick={handleLogout} className="text-red-500 font-bold">
                  LOG OUT
                </p>
              </li>
            </ul>
          </div>
        </motion.div>
      ) : (
        <></>
      )}
    </header>
  );
}
