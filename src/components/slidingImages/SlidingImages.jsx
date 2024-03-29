import slideImg from "../../assets/img/locomotive.png";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import "./SlidingImages.scss";

const slider1 = [
  {
    color: "#e3e5e7",
    src: slideImg,
  },
  {
    color: "#d6d7dc",
    src: slideImg,
  },
  {
    color: "#e3e3e3",
    src: slideImg,
  },
  {
    color: "#21242b",
    src: slideImg,
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: slideImg,
  },
  {
    color: "#e5e0e1",
    src: slideImg,
  },
  {
    color: "#d7d4cf",
    src: slideImg,
  },
  {
    color: "#e1dad6",
    src: slideImg,
  },
];

export const SlidingImages = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className="slidingImages">
      <motion.div style={{ x: x1 }} className="slider-img-section">
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className="slider-item"
              style={{ backgroundColor: project.color }}
            >
              <div className="slider-img-content">
                <img alt="image" src={project.src} className="img-slider"/>
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className="slider-img-section">
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className="slider-item"
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className="slider-img-content">
                <img alt="image" src={project.src} className="img-slider"/>
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className="circle-container-section">
        <div className="circle-content"></div>
      </motion.div>
    </div>
  );
};
