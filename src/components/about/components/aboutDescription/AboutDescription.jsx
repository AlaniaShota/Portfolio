import "./AboutDescription.scss";
import { aboutData } from "../../../../mockData";

import { HiArrowNarrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

export const AboutDescription = () => {
  const {
    descriptionConfig,
    descriptionTextKeys: { descriptionKey, spanKey },
  } = aboutData;
  const {
    scrollDirectionDefault,
    scrollDirectionDown,
    mediaQuery,
    smallScreenY,
    scrollDownY,
    scrollUpY,
    arrowRotateDown,
    arrowRotateUp,
    dotFadeInDuration,
    dotFadeOutDuration,
    dotDelay,
    dotStagger,
  } = descriptionConfig;
  const [scrollDirection, setScrollDirection] = useState(
    scrollDirectionDefault,
  );
  const controls = useAnimation();
  const arrowControls = useAnimation();
  const { scrollY } = useViewportScroll();
  const { t } = useTranslation();

  useEffect(() => {
    return scrollY.onChange(() => {
      setScrollDirection(
        scrollY.getPrevious() < scrollY.get()
          ? scrollDirectionDown
          : scrollDirectionDefault,
      );
    });
  }, [scrollY, scrollDirectionDown, scrollDirectionDefault]);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    function handleResize() {
      if (mediaQueryList.matches) {
        controls.start({ y: smallScreenY });
      } else {
        if (scrollDirection === scrollDirectionDown) {
          controls.start({ y: scrollDownY });
          arrowControls.start({ rotate: arrowRotateDown });
        } else {
          controls.start({ y: scrollUpY });
          arrowControls.start({ rotate: arrowRotateUp });
        }
      }
    }

    handleResize();

    const resizeListener = () => {
      handleResize();
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [
    scrollDirection,
    controls,
    arrowControls,
    mediaQuery,
    smallScreenY,
    scrollDirectionDown,
    scrollDownY,
    scrollUpY,
    arrowRotateDown,
    arrowRotateUp,
  ]);

  useEffect(() => {
    const tl = gsap.timeline();

    function animateDots() {
      tl.to(".dot", {
        opacity: 1,
        duration: dotFadeInDuration,
        stagger: dotStagger,
        onComplete: function () {
          tl.to(".dot", {
            opacity: 0,
            duration: dotFadeOutDuration,
            delay: dotDelay,
            onComplete: animateDots,
          });
        },
      });
    }

    animateDots();
  }, [
    dotDelay,
    dotFadeInDuration,
    dotFadeOutDuration,
    dotStagger,
  ]);

  return (
    <div className="about-description">
      <div className="about-description-content">
        <div className="icon-arrow">
          <motion.div animate={arrowControls} className="arrow-rotation">
            <HiArrowNarrowRight size={25} />
          </motion.div>
        </div>
        <motion.div
          className="about-description-section"
          animate={controls}
          transition={{ duration: 0.9 }}
        >
          <p className="about-description-section-text">
            {t(descriptionKey)}
          </p>
          <span className="about-description-section-span-text">
            {t(spanKey)}
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span>
        </motion.div>
        <div className="about-description-img-content" />
      </div>
    </div>
  );
};
