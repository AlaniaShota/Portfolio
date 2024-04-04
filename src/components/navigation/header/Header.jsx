import { Hamburger } from "./hamburger/Hamburger";

import { Magnetic } from "../../Magnetic";
import { Rounded } from "../../Rounded";

import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.scss";

export const Header = () => {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const button = useRef(null);
  const { i18n } = useTranslation();
  const lng = [
    { id: 1, code: "en", name: "English" },
    { id: 2, code: "ka", name: "ქართული" },
  ];

  const navData = [
    { id: 1, title: "Work", href: "/work" },
    { id: 2, title: "About", href: "/about" },
    { id: 3, title: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false),
          );
        },
      },
    });
  }, []);

  const determineTextColorClass = () => {
    const isDarkBackground =
      header.current && header.current.classList.contains("white");
    return isDarkBackground ? "light-text" : "dark-text";
  };

  const isDarkBackground = () => {
    const headerElement = header.current;
    return headerElement && headerElement.classList.contains("dark");
  };

  return (
    <>
      <div ref={header} className="header dark white">
        <Link to="/">
          <div className="logo">
            <p className={`copyright ${determineTextColorClass()}`}>©</p>
            <div className="name">
              <p className={`codeBy ${determineTextColorClass()}`}>Code by</p>
              <p className={`shota ${determineTextColorClass()}`}>Shota</p>
              <p className={`alania ${determineTextColorClass()}`}>Alania</p>
            </div>
          </div>
        </Link>
        <div className="nav">
          {lng.map((item) => (
            <button
              key={item.id}
              onClick={() => i18n.changeLanguage(item.code)}
            >
              {item.name}
            </button>
          ))}
          {navData.map((item) => (
            <Magnetic key={item.id}>
              <div className="el">
                <a
                  href={item.href}
                  className={`nav-link-main ${determineTextColorClass()}`}
                >
                  {item.title}
                </a>
                <div
                  className={`indicator ${
                    isDarkBackground() ? "light-bg " : "dark-bg"
                  }`}
                ></div>
              </div>
            </Magnetic>
          ))}
        </div>
      </div>
      <div ref={button} className="headerButtonContainer">
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="button"
        >
          <div className={`burger ${isActive ? " burgerActive" : ""}`}></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Hamburger />}</AnimatePresence>
    </>
  );
};
