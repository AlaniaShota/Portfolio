import { opacity, slideUp } from "./animation";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Preloader.scss";

export const Preloader = ({ preloadData, setIsLoading }) => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  useEffect(() => {
    setDimension({ width: window.innerWidth });
  }, []);

  useEffect(() => {
    if (index == preloadData.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  // const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
  //   dimension.height
  // } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
  //   dimension.height
  // }  L0 0`;
  // const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
  //   dimension.height
  // } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  // const curve = {
  //   initial: {
  //     d: initialPath,
  //     transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  //   },
  //   exit: {
  //     d: targetPath,
  //     transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
  //   },
  // };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="preloader"
    >
      {dimension.width > 0 && (
        // <>
        <motion.p
          variants={opacity}
          initial="initial"
          animate="enter"
          className="preloader-text"
        >
          {preloadData[index]}
        </motion.p>
        // {/* </> */}
      )}
    </motion.div>
  );
};
