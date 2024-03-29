import { scale, slide } from "../animation";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Link.scss";

export const LinkNav = ({ data, isActive, setSelectedIndicator }) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className="link"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="indicator"
      ></motion.div>
      <Link className="link-style" to={href}>{title}</Link>
    </motion.div>
  );
};
