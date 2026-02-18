import "./SinglePageMain.scss";
import { workData } from "../../../../../mockData";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(TextPlugin);

export const SinglePageMain = ({ project }) => {
  const { t } = useTranslation();
  const descriptionTextRef = useRef(null);
  const descriptionAnimation = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: workData.singlePageMainConfig.inViewTriggerOnce,
    threshold: workData.singlePageMainConfig.inViewThreshold,
  });

  useEffect(() => {
    const firstTextElement = descriptionTextRef.current;

    if (inView) {
      descriptionAnimation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: workData.singlePageMainConfig.descriptionRevealDuration,
        },
      });

      gsap.to(firstTextElement, {
        stagger: workData.singlePageMainConfig.descriptionTextStagger,
        duration: workData.singlePageMainConfig.descriptionTextDuration,
        delay: workData.singlePageMainConfig.descriptionTextDelay,
        text: { value: t(project.descriptionKey) },
        ease: workData.singlePageMainConfig.descriptionTextEase,
      });
    }
  }, [inView, descriptionAnimation, project, t]);

  return (
    <AnimatePresence>
      <div className="main-content" key={project.id}>
        <div className="single-page-main-section">
          <motion.h3 className="section-title">
            {t(workData.singlePageMainConfig.descriptionTitleKey)}
          </motion.h3>
          <div ref={ref} className="stripe"></div>
          <motion.p
            className="section-text"
            ref={descriptionTextRef}
            initial={{ opacity: 0 }}
            animate={descriptionAnimation}
          >
            {workData.singlePageMainConfig.loadingText}
          </motion.p>
        </div>
        <div className="single-page-main-img-section">
          {project.secondary_img.length > 0 && (
            <motion.div className="single-page-main-img-first-content">
              <img
                src={project.secondary_img[0]}
                alt={workData.singlePageMainConfig.imgAlt}
              />
            </motion.div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};
