import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import "./SinglePageMain.scss";
import { useEffect, useRef } from "react";

gsap.registerPlugin(TextPlugin);

export const SinglePageMain = ({ project }) => {
  const descriptionTextRef = useRef(null);
  const descriptionAnimation = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

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
        text: project.description,
        ease: "power1.inOut",
      });
    }
  }, [inView, descriptionAnimation, project]);

  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      <div className="main-content">
        <div className="single-page-main-section">
          <motion.h3 className="section-title">DESCRIPTION</motion.h3>
          <div ref={ref} className="stripe"></div>
          <motion.p
            className="section-text"
            ref={descriptionTextRef}
            initial={{ opacity: 0 }}
            animate={descriptionAnimation}
          ></motion.p>
        </div>
        <div className="single-page-main-img-section">
          {project.secondary_img.length > 0 && (
            <motion.div
              className="single-page-main-img-first-content"
              variants={fadeInVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <img src={project.secondary_img[0]} alt="" />
            </motion.div>
          )}
          {project.secondary_img.length > 1 && (
            <motion.div
              className="single-page-main-img-second-content"
              variants={fadeInVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <img src={project.secondary_img[1]} alt="" />
            </motion.div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};
