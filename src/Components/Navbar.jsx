import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../Images/logo.webp";
import resume from "../Taqi's Resume.pdf"
import { pageLinks } from "../data";
import { motion } from "framer-motion";
import {
  liVariants,
  navVariants,
  logoVariants,
  btnVariants,
  headerVariants,
} from "../variants";
import "./navbar.scss";

const Navbar = () => {
  // Functions Start
  // const [theme, setTheme] = useState(0);
  // const [themeClass, setThemeClass] = useState("light");
  const [menuStatus, setMenuStatus] = useState("");
  const [showNav, setShowNav] = useState("");
  let lastScroll = window.scrollY;
  // const toggleTheme = () => {
  //   setTheme((curr) => {
  //     if (curr === 0) {
  //       setThemeClass("dark");
  //       return 1;
  //     } else {
  //       setThemeClass("light");
  //       return 0;
  //     }
  //   });
  //   return { theme, themeClass };
  // };
  const active = () => {
    setMenuStatus((curr) => (curr === "" ? "isActive" : ""));
    if (menuStatus === "") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  };
  const hideNav = () => {
    setShowNav(lastScroll < window.scrollY ? "show" : "");
    lastScroll = window.scrollY;
  };
  window.addEventListener("scroll", hideNav);
  const removeActive = () => {
    setMenuStatus((curr) => (curr === "" ? "isActive" : ""));
    document.querySelectorAll(".container").forEach((e) => {
      e.style.filter = "blur(0px)";
      window.scrollTo(0, 0);
    });
    document.body.style.overflowY = "visible";
  };
  // Functions End

  // Main Navbar Start
  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="show"
      className={`menu ${menuStatus} ${showNav}`}
    >
      <nav>
        <div className="leftNav">
          <Link to="/">
            <motion.img
              variants={logoVariants}
              whileHover="hover"
              initial="hidden"
              animate="show"
              className="navLogo"
              src={Logo}
              alt="Taqi's Logo"
            />
          </Link>
        </div>
        <div className="rightNav">
          <motion.ul
            variants={navVariants}
            initial="hidden"
            animate="show"
            className="navLinks"
          >
            {pageLinks.map(({ name, url }) => {
              return (
                <NavLink
                  onClick={removeActive}
                  className="fw-regular ff-neutral fs-nav text-neutral-100"
                  to={url}
                  key={name}
                >
                  <motion.li variants={liVariants} key={name}>
                    {name}
                  </motion.li>
                </NavLink>
              );
            })}
          </motion.ul>
          {/* <motion.button
              className={`themeBtn cta fill ${themeClass}`}
          variants={themeVariants}
            onClick={toggleTheme}
          >
            {darkMode[theme]}
          </motion.button> */}
          <motion.div variants={btnVariants} className="resume">
            <button className={`cta resume small hollow`}>
              <a
                rel="noreferrer"
                className={`ff-neutral fs-button`}
                href={resume}
                download={resume}
                target={"_blank"}
              >
                Resume
              </a>
            </button>
          </motion.div>
        </div>
        <motion.button
          variants={logoVariants}
          className={`hamburger ${menuStatus}`}
          onClick={active}
        >
          <div className="bar"></div>
        </motion.button>
      </nav>
    </motion.header>
  );
  // Main Navbar End
};

export default Navbar;
