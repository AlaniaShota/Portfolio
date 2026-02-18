// import { Hamburger } from "./hamburger/Hamburger";

// import { MultiLanguage } from "./multiLanguage";

// import { Magnetic } from "../../Magnetic";
// import { Rounded } from "../../Rounded";

// import { AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// import "./Header.scss";
// import { useTranslation } from "react-i18next";

// export const Header = () => {
//   const { t } = useTranslation();
//   const header = useRef(null);
//   const [isActive, setIsActive] = useState(false);
//   const location = useLocation();
//   const { pathname } = location;
//   const button = useRef(null);

//   const navData = [
//     { id: 1, title: t("link_work"), href: "/work" },
//     { id: 2, title: t("link_about"), href: "/about" },
//     { id: 3, title: t("link_contact"), href: "#contact" },
//   ];

//   useEffect(() => {
//     if (isActive) setIsActive(false);
//   }, [pathname]);

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.to(button.current, {
//       scrollTrigger: {
//         trigger: document.documentElement,
//         start: 0,
//         end: window.innerHeight,
//         onLeave: () => {
//           gsap.to(button.current, {
//             scale: 1,
//             duration: 0.25,
//             ease: "power1.out",
//           });
//         },
//         onEnterBack: () => {
//           gsap.to(
//             button.current,
//             { scale: 0, duration: 0.25, ease: "power1.out" },
//             setIsActive(false)
//           );
//         },
//       },
//     });
//   }, []);

//   const determineTextColorClass = () => {
//     const isDarkBackground =
//       header.current && header.current.classList.contains("white");
//     return isDarkBackground ? "light-text" : "dark-text";
//   };

//   const isDarkBackground = () => {
//     const headerElement = header.current;
//     return headerElement && headerElement.classList.contains("dark");
//   };

//   return (
//     <>
//       <div ref={header} className="header dark white">
//         <Link to="/">
//           <div className="logo">
//             <p className={`copyright ${determineTextColorClass()}`}>©</p>
//             <div className="name">
//               <p className={`codeBy ${determineTextColorClass()}`}>Code by</p>
//               <p className={`shota ${determineTextColorClass()}`}>Shota</p>
//               <p className={`alania ${determineTextColorClass()}`}>Alania</p>
//             </div>
//           </div>
//         </Link>
//         <div className="nav">
//           {navData.map((item) => (
//             <Magnetic key={item.id}>
//               <div className="el">
//                 {item.href === "#contact" ? (
//                   <a
//                     href={item.href}
//                     className={`nav-link-main ${determineTextColorClass()}`}
//                   >
//                     {item.title}
//                   </a>
//                 ) : (
//                   <Link
//                     to={item.href}
//                     className={`nav-link-main ${determineTextColorClass()}`}
//                   >
//                     {item.title}
//                   </Link>
//                 )}
//                 <div
//                   className={`indicator ${
//                     isDarkBackground() ? "light-bg " : "dark-bg"
//                   }`}
//                 ></div>
//               </div>
//             </Magnetic>
//           ))}

//           <MultiLanguage />
//         </div>
//       </div>
//       <div ref={button} className="headerButtonContainer">
//         <Rounded
//           onClick={() => {
//             setIsActive(!isActive);
//           }}
//           className="button"
//         >
//           <div className={`burger ${isActive ? " burgerActive" : ""}`}></div>
//         </Rounded>
//       </div>
//       <AnimatePresence mode="wait">{isActive && <Hamburger />}</AnimatePresence>
//     </>
//   );
// };
import "./Header.scss";
import { Hamburger } from "./hamburger/Hamburger";
import { MultiLanguage } from "./multiLanguage";

import { Magnetic } from "../../Magnetic";
import { Rounded } from "../../Rounded";
import { navigationData } from "../../../mockData";

import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isWhite, setIsWhite] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const button = useRef(null);

  const {
    header: {
      items,
      contactHash,
      logo: {
        codeByKey,
        firstNameKey,
        lastNameKey,
        copyright,
      },
    },
  } = navigationData;

  const navData = items.map((item) => ({
    ...item,
    title: t(item.titleKey),
  }));

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname, isActive]);

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

  useEffect(() => {
    const sections = document.querySelectorAll(
      ".section-dark, .section-light, .main, .description, .about, .contact",
    );
    const darkClasses = ["section-dark", "main", "description", "contact"];
    const intersecting = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersecting.set(entry.target, entry.isIntersecting);
        });

        const isDarkInView = Array.from(intersecting.entries()).some(
          ([el, isInView]) =>
            isInView &&
            darkClasses.some((className) => el.classList.contains(className)),
        );

        setIsWhite(isDarkInView);
      },
      { threshold: 0.3 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <div
        ref={header}
        className={`header ${isWhite ? "header-white" : "header-black"}`}
      >
        <Link to="/">
          <div className="logo">
            <p className="copyright">{copyright}</p>
            <div className="name">
              <p className="codeBy">{t(codeByKey)}</p>
              <p className="shota">{t(firstNameKey)}</p>
              <p className="alania">{t(lastNameKey)}</p>
            </div>
          </div>
        </Link>
        <div className="nav">
          {navData.map((item) => (
            <Magnetic key={item.id}>
              <div className="el">
                {item.href === contactHash ? (
                  <a href={item.href} className="nav-link-main">
                    {item.title}
                  </a>
                ) : (
                  <Link to={item.href} className="nav-link-main">
                    {item.title}
                  </Link>
                )}
                <div className="indicator"></div>
              </div>
            </Magnetic>
          ))}
          <MultiLanguage />
        </div>
      </div>
      <div ref={button} className="headerButtonContainer">
        <Rounded onClick={() => setIsActive(!isActive)} className="button">
          <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Hamburger />}</AnimatePresence>
    </>
  );
};
