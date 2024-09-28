import { NextCase } from "./NextCase";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import "./SinglePageMain.scss";
import { useEffect, useRef } from "react";

import { useTranslation } from "react-i18next";

gsap.registerPlugin(TextPlugin);

export const SinglePageMain = ({ project, onNextProject, dataProject }) => {
  const { t } = useTranslation();
  const descriptionTextRef = useRef(null);
  const descriptionAnimation = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  // const { t } = useTranslation();

  useEffect(() => {
    const firstTextElement = descriptionTextRef.current;

    if (inView) {
      descriptionAnimation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });

      gsap.to(firstTextElement, {
        stagger: 0.02,
        duration: 5,
        delay: 1,
        text: { value: t(project.descriptionKey) },
        ease: "power1.inOut",
      });
    }
  }, [inView, descriptionAnimation, project]);

  return (
    <AnimatePresence>
      <div className="main-content" key={project.id}>
        <div className="single-page-main-section">
          <motion.h3 className="section-title">
            {t("description_title")}
          </motion.h3>
          <div ref={ref} className="stripe"></div>
          <motion.p
            className="section-text"
            ref={descriptionTextRef}
            initial={{ opacity: 0 }}
            animate={descriptionAnimation}
          >
            Loading...
          </motion.p>
        </div>
        <div className="single-page-main-img-section">
          {project.secondary_img.length > 0 && (
            <motion.div
              className="single-page-main-img-first-content"
            >
              <img src={project.secondary_img[0]} alt="ERROR" />
            </motion.div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};
