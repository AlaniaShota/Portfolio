import "./AboutHeader.scss";
import { HeaderSection } from "../../../HeaderSection";

import { motion } from "framer-motion";
import { CiGlobe } from "react-icons/ci";

export const AboutHeader = () => {
  return (
    <div className="about-header-section">
      <HeaderSection title="Helping brands thrive in the digital world" />
      <div className="glob-animation-content">
        <div className="stripe"></div>
        <div className="digital-ball">
          <div className="overlay"></div>
          <div className="globe">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <CiGlobe className="icon-glob" size={80} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
