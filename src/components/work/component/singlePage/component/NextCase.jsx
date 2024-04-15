import { motion } from "framer-motion";
import "./NextCase.scss";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

import { Rounded } from "../../../../Rounded";

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

export const NextCase = ({ nextProject, onNextProject }) => {
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
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
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

  if (!nextProject) return null;

  return (
    <div className="next-case-container">
      <div className="next-case-section">
        <div className="next-case-header-section">
          <h4>NEXT CASE</h4>
          <h1>{nextProject.title}</h1>
        </div>
        <div
          onMouseMove={(e) => {
            manageModal(true, index, e.clientX, e.clientY);
          }}
          onMouseLeave={() => {
            manageModal(false, index, 0, 0);
          }}
          className="next-case-image"
        >
          <img
            onClick={onNextProject}
            src={nextProject.src}
            alt={nextProject.title}
          />
        </div>
        <div className="stripe"></div>
      </div>
      <motion.div
        ref={cursor}
        className="cursor"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      />
      <motion.div
        ref={cursorLabel}
        className="cursorLabel"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        NEXT CASE
      </motion.div>
      <div className="link">
        <Link to="/work">
          <Rounded className="btn-back" backgroundColor={"#334BD3"}>
            <p className="btn-back-text">BACK TO ALL</p>
          </Rounded>
        </Link>
      </div>
    </div>
  );
};
