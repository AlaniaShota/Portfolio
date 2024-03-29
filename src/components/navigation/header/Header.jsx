import { Hamburger } from "./hamburger/Hamburger";

import { Magnetic } from "../../Magnetic";
import { Rounded } from "../../Rounded";

import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import "./Header.scss";

export const Header = () => {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const button = useRef(null);

  const navData = ["Work", "About", "Contact"];

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

  return (
    <>
      <div ref={header} className="header">
        <div className="logo">
          <p className="copyright">©</p>
          <div className="name">
            <p className="codeBy">Code by</p>
            <p className="dennis">Dennis</p>
            <p className="snellenberg">Snellenberg</p>
          </div>
        </div>
        <div className="nav">
          {navData.map((item, index) => (
            <Magnetic key={index}>
              <div className="el">
                <a>{item}</a>
                <div className="indicator"></div>
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
