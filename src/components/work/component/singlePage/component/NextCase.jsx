import "./NextCase.scss";
import { Rounded } from "../../../../Rounded";
import { workData } from "../../../../../mockData";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { t } from "i18next";

const scaleAnimation = workData.nextCaseScaleAnimation;

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

  if (!nextProject) return null;

  return (
    <div className="next-case-container">
      <div className="next-case-section">
        <div className="next-case-header-section">
          {t(workData.nextCaseTextKeys.nextCaseKey)}
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
        {t(workData.nextCaseTextKeys.viewKey)}
      </motion.div>
      <div className="back-all-link">
        <Link to={workData.nextCaseConfig.backRoute}>
          <Rounded className="roundedButton btn-back">
            <p className="btn-back-text">
              {t(workData.nextCaseTextKeys.backKey)}
            </p>
          </Rounded>
        </Link>
      </div>
    </div>
  );
};
