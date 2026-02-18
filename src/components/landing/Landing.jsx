import "./Landing.scss";
import { slideUp } from "./index";

import imgUser from "../../assets/img/Gemini_Generated_Image_6qxynw6qxynw6qxy.png";

import { Description } from "../description";

import { Projects } from "../projects";

import { Preloader } from "../preloader";

import { SlidingImages } from "../slidingImages";

import { dataProject } from "../../resources/resources";
import { landingData } from "../../mockData";

import { Contact } from "../contact";

import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { AnimatePresence, motion } from "framer-motion";

export const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  const { preloadData, sliderConfig, heroConfig } = landingData;
  const {
    initialXPercent,
    minXPercent,
    maxXPercent,
    loopStep,
    direction,
    scrollScrub,
    scrollStart,
    scrollEndMultiplier,
    sliderTranslateX,
  } = sliderConfig;
  const xPercentRef = useRef(initialXPercent);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: scrollScrub,
        start: scrollStart,
        end: window.innerHeight * scrollEndMultiplier,
      },
      x: sliderTranslateX,
    });

    let frameId;

    const animate = () => {
      if (xPercentRef.current <= minXPercent) {
        xPercentRef.current = maxXPercent;
      }
      if (xPercentRef.current > maxXPercent) {
        xPercentRef.current = minXPercent;
      }

      gsap.set(firstText.current, { xPercent: xPercentRef.current });
      gsap.set(secondText.current, { xPercent: xPercentRef.current });
      frameId = requestAnimationFrame(animate);
      xPercentRef.current += loopStep * direction;
    };

    xPercentRef.current = initialXPercent;
    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [
    scrollScrub,
    scrollStart,
    scrollEndMultiplier,
    sliderTranslateX,
    minXPercent,
    maxXPercent,
    loopStep,
    direction,
    initialXPercent,
  ]);

  return (
    <>
      <div className="preload-content">
        <AnimatePresence mode="wait">
          {isLoading && (
            <Preloader preloadData={preloadData} setIsLoading={setIsLoading} />
          )}
        </AnimatePresence>
      </div>
      <motion.main
        variants={slideUp}
        initial="initial"
        animate="enter"
        className="main"
      >
        <img
          src={imgUser}
          alt={heroConfig.userImgAlt}
          className="user-img"
        />
        <div className="slider-container">
          <div ref={slider} className="slider">
            <p ref={firstText} className="main-slider-text">
              {heroConfig.sliderText}
            </p>
            <p ref={secondText} className="main-slider-text">
              {heroConfig.sliderText}
            </p>
          </div>
        </div>
        <div
          data-scroll
          data-scroll-speed={heroConfig.descriptionScrollSpeed}
          className="description"
        >
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </svg>
          <p className="user-status">{heroConfig.statusText}</p>
          <h1 className="user">{heroConfig.roleText}</h1>
        </div>
      </motion.main>
      <Description />
      <Projects marginTop="300px" data={dataProject} />
      <SlidingImages />
      <Contact />
    </>
  );
};
