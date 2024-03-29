import userImg from "../../../../assets/img/background.jpg";

import { HiArrowNarrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import "./AboutDescription.scss";

export const AboutDescription = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const controls = useAnimation();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    return scrollY.onChange(() => {
      setScrollDirection(scrollY.getPrevious() < scrollY.get() ? "down" : "up");
    });
  }, [scrollY]);

  useEffect(() => {
    if (scrollDirection === "down") {
      controls.start({ y: 100 });
    } else {
      controls.start({ y: 0 });
    }
  }, [scrollDirection, controls]);

  const arrowVariants = {
    up: { rotate: 0 },
    down: { rotate: 15 },
  };

  return (
    <div className="about-description">
      <div className="about-description-content">
        <div className="icon-arrow">
          <motion.div
            animate={scrollDirection}
            variants={arrowVariants}
            className="arrow-rotation"
          >
            <HiArrowNarrowRight />
          </motion.div>
        </div>
        <motion.div
          className="about-description-section"
          animate={controls}
          transition={{ duration: 0.9 }}
        >
          <p>
            I help companies from all over the world with tailor-made solutions.
            With each project, I push my work to new horizons, always putting
            quality first.
          </p>
          <span>Always exploring...</span>
        </motion.div>
        <div className="about-description-img-content">
          <img src={userImg} alt="User" />
        </div>
      </div>
    </div>
  );
};
