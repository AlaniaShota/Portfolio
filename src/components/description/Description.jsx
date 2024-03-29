import { slideUp, opacity } from "./animation";

import { Rounded } from "../Rounded";
import "./Description.scss";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export const Description = () => {
  const phrase =
    "I'm a beginner front-end developer, i have worked on my personal projects, and my enthusiasm to learn makes me a great fit. I am ready to put in maximum effort and succeed in web development.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className="description-content">
      <div className="description-body">
        <p className="description-section">
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className="mask">
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p
          className="description-secondary-text"
          variants={opacity}
          animate={isInView ? "open" : "closed"}
        >
          HTML, CSS, JavaScript, React, Vite, React Router, SCSS, Formik,
          Zustand, TailwindCSS, Material-UI (MUI), Yup, React Hook Form,
          Framer-motion, GSAP, Swiper, Redux, Redux Toolkit
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className="button">
            <p className="description-btn-text">About me</p>
          </Rounded>
        </div>
      </div>
    </div>
  );
};
