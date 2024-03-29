import { slideUp, opacity } from "./animation";

import { Rounded } from "../Rounded";
import "./Description.scss";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export const Description = () => {
  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
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
        <motion.p className="description-secondary-text" variants={opacity} animate={isInView ? "open" : "closed"}>
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
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
