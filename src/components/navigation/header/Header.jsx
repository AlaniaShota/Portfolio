import { Hamburger } from "./hamburger/Hamburger";

import { MultiLanguage } from "./multiLanguage";

import { Magnetic } from "../../Magnetic";
import { Rounded } from "../../Rounded";

import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.scss";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const button = useRef(null);

  const navData = [
    { id: 1, title: t("link_work"), href: "/work" },
    { id: 2, title: t("link_about"), href: "/about" },
    { id: 3, title: t("link_contact"), href: "#contact" },
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
            setIsActive(false)
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
          {navData.map((item) => (
            <Magnetic key={item.id}>
              <div className="el">
                {item.href === "#contact" ? (
                  // Для "contact" использовать прокрутку по id
                  <a
                    href={item.href}
                    className={`nav-link-main ${determineTextColorClass()}`}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    to={item.href} // использовать "to" вместо "href"
                    className={`nav-link-main ${determineTextColorClass()}`}
                  >
                    {item.title}
                  </Link>
                )}
                <div
                  className={`indicator ${
                    isDarkBackground() ? "light-bg " : "dark-bg"
                  }`}
                ></div>
              </div>
            </Magnetic>
          ))}

          <MultiLanguage />
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
