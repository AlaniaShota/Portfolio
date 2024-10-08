import { Project } from "./project/Project";

import "./Projects.scss";

import { ImgProject } from "./ImgProject";

import gsap from "gsap";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { t } from "i18next";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export const Projects = ({ marginTop, data, categoryFilter }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 430);
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const xMoveContainer = useRef(null);
  const yMoveContainer = useRef(null);
  const xMoveCursor = useRef(null);
  const yMoveCursor = useRef(null);
  const xMoveCursorLabel = useRef(null);
  const yMoveCursorLabel = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 430);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  const displayedProject = categoryFilter
    ? data.filter((item) => item.type === categoryFilter)
    : data;

  if (isSmallScreen) {
    return (
      <div className="mob-projects-container">
        <ImgProject data={displayedProject} />
      </div>
    );
  } else {
    return (
      <main
        onMouseMove={(e) => {
          moveItems(e.clientX, e.clientY);
        }}
        className="projects"
        style={{ marginTop: marginTop }}
      >
        <div className="projects-body">
          {displayedProject.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                manageModal={manageModal}
                key={index}
                imgSrc={project.src}
              />
            );
          })}
        </div>
        <>
          <motion.div
            ref={modalContainer}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
            className="modalContainer"
          >
            <div style={{ top: index * -100 + "%" }} className="modalSlider">
              {displayedProject.map((project, index) => {
                const { src, color } = project;
                return (
                  <div
                    className="modal"
                    style={{ backgroundColor: color }}
                    key={`modal_${index}`}
                  >
                    <img src={src} width={300} height={0} alt="image" />
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            ref={cursor}
            className="cursor"
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
          ></motion.div>
          <Link>
            <motion.div
              ref={cursorLabel}
              className="cursorLabel"
              variants={scaleAnimation}
              initial="initial"
              animate={active ? "enter" : "closed"}
            >
              {t("view")}
            </motion.div>
          </Link>
        </>
      </main>
    );
  }
};
