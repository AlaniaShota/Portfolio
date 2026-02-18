import "./Description.scss";
import { slideUp, opacity } from "./animation";

import { Rounded } from "../Rounded";
import { landingData } from "../../mockData";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Description = () => {
  const { t } = useTranslation();
  const {
    descriptionConfig: {
      skillsText,
      aboutRoute,
      scrollSpeed,
      welcomeKey,
      aboutMeKey,
    },
  } = landingData;
  const phrase = t(welcomeKey);

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
          {skillsText}
        </motion.p>
        <Link to={aboutRoute}>
          <div data-scroll data-scroll-speed={scrollSpeed}>
            <Rounded className="button">
              <p className="description-btn-text">{t(aboutMeKey)}</p>
            </Rounded>
          </div>
        </Link>
      </div>
    </div>
  );
};
