import React, { Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import OpenMenu from "./images/icon-menu.svg";
import Close from "./images/icon-close.svg";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [navShadow, setNavShadow] = useState("");

  // Change Nav Background OnScroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setNavbarBackground("rgb(250, 248, 248)");
      setNavShadow(
        "0px -2px 2px rgba(30, 30, 30, 0.07),0px 2px 2px rgba(30, 30, 30, 0.1)"
      );
    } else {
      setNavbarBackground("transparent");
      setNavShadow("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <nav
        className="fixed top-0 w-full z-[40]"
        style={{ backgroundColor: navbarBackground, boxShadow: navShadow }}
      >
        <div className="flex justify-between items-center w-[95%] md:w-[90%] mx-auto h-16 md:h-20">
          <div className="z-[100]">
            <p>Logo</p>
          </div>

          <img
            src={open ? Close : OpenMenu}
            className="lg:hidden z-[42]"
            onClick={() => setOpen(!open)}
          />
          <div
            className={`flex flex-col lg:justify-between lg:w-[75%] xl:w-[50%] items-start lg:items-center  lg:flex-row lg:space-x-8 bg-white lg:bg-transparent space-y-5 lg:space-y-0 lg:static fixed top-0 z-[32] lg:h-auto h-screen w-screen duration-500 ease-linear px-11 py-12 lg:py-0 lg:px-0 ${
              !open ? "right-[-100%]" : "right-0"
            }`}
          >
            <ul className="flex flex-col lg:flex-row text-base md:text-lg justify-between lg:items-center space-y-8 lg:space-y-0  lg:space-x-12 absolute top-20 left-4 lg:relative lg:top-0">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/what-we-do">What We Do</NavLink>
              <NavLink to="/media">Media</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink
                to="/donate"
                className="bg-black text-white px-4 py-2 rounded-md"
              >
                Donate
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
