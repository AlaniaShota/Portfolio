import "./Hamburger.scss";
import { menuSlide } from "../animation";
import { Footer } from "../../footer/Footer";

import { Curve } from "../curve/Curve";

import { LinkNav } from "../link/Link";

import { useState } from "react";

import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const Hamburger = () => {
  const pathname = useLocation();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="hamburger-menu"
    >
      <div className="hamburger-body">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="hamburger-nav"
        >
          <div className="hamburger-header">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <LinkNav
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
};
