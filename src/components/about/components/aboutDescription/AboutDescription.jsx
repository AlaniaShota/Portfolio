import { HiArrowNarrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import gsap from "gsap";
import "./AboutDescription.scss";

export const AboutDescription = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const controls = useAnimation();
  const arrowControls = useAnimation();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    return scrollY.onChange(() => {
      setScrollDirection(scrollY.getPrevious() < scrollY.get() ? "down" : "up");
    });
  }, [scrollY]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");

    function handleResize() {
      if (mediaQuery.matches) {
        controls.start({ y: 10 });
      } else {
        if (scrollDirection === "down") {
          controls.start({ y: 100 });
          arrowControls.start({ rotate: 30 });
        } else {
          controls.start({ y: 0 });
          arrowControls.start({ rotate: 0 });
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
  }, [scrollDirection, controls, arrowControls]);

  useEffect(() => {
    const tl = gsap.timeline();

    function animateDots() {
      tl.to(".dot", {
        opacity: 1,
        duration: 0.5,
        stagger: 1,
        onComplete: function () {
          tl.to(".dot", {
            opacity: 0,
            duration: 0.2,
            delay: 1,
            onComplete: animateDots,
          });
        },
      });
    }

    animateDots();
  }, []);

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
            I help companies from all over the world with tailor-made solutions.
            With each project, I push my work to new horizons, always putting
            quality first.
          </p>
          <span className="about-description-section-span-text">
            Always exploring
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
