import { slideUp, opacity } from "./animation";

import { Rounded } from "../Rounded";
import "./Description.scss";

import { useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Description = () => {
  const { t } = useTranslation();
  const phrase = t("welcome");

  const description = useRef(null);
  const isInView = useInView(description);

  // useEffect(() => {
  //   const lng = navigator.language;
  //   i18n.changeLanguage(lng);
  // }, []);
  // const lng = navigator.language;

  return (
    <div ref={description} className="description-content">
      {/* <p>{t("translation.welcome")}</p> */}
      {/* <p>{phrase}</p> */}
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
        <Link to="/about">
          <div data-scroll data-scroll-speed={0.1}>
            <Rounded className="button">
              <p className="description-btn-text">About me</p>
            </Rounded>
          </div>
        </Link>
      </div>
    </div>
  );
};
