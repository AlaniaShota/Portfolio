import { useRef } from "react";
import "./AboutHeader.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { CiGlobe } from "react-icons/ci";

import { Rounded } from "../../../Rounded";

export const AboutHeader = () => {
  return (
    // <div className="about-header-section">
    <div className="about-header-section">
      <div className="about-header-title-content">
        <h1 className="about-header-title">
          Helping brands thrive in the digital world
        </h1>
      </div>
      <div className="glob-animation-content">
        <div className="stripe"></div>
        <div className="digital-ball">
          <div className="overlay"></div>
          <div className="globe">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <CiGlobe className="icon-glob" size='lg' />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
