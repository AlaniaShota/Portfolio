import { Magnetic } from "../Magnetic";
import { Rounded } from "../Rounded";
import userImg from "../../assets/img/background.jpg";

import { useScroll, useTransform, motion } from "framer-motion";
import "./Contact.scss";
import { useRef } from "react";

export const Contact = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const socialMediaData = ["Instagram", "Dribbble", "Linkedin"];

  return (
    <motion.div style={{ y }} ref={container} className="contact">
      <div className="contact-body">
        <div className="contact-section-title">
          <span className="contact-span-content-img">
            <div className="img-contact-section">
              <img alt={"image"} src={userImg} className="img-contact" />
            </div>
            <h2 className="contact-section-description-title">Let's work</h2>
          </span>
          <h2 className="contact-section-secondary-description-title">
            together
          </h2>
          <motion.div style={{ x }} className="contact-btn-content">
            <Rounded backgroundColor={"#334BD3"} className="contact-btn">
              <p className="contact-btn-text">Get in touch</p>
            </Rounded>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
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
          </motion.svg>
        </div>
        <div className="contact-navigation-section">
          <Rounded>
            <p>info@dennissnellenberg.com</p>
          </Rounded>
          <Rounded>
            <p>+31 6 27 84 74 30</p>
          </Rounded>
        </div>
        <div className="contact-information">
          <div>
            <span>
              <h3>Version</h3>
              <p>2022 © Edition</p>
            </span>
            <span>
              <h3>Version</h3>
              <p>11:49 PM GMT+2</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <p>Awwwards</p>
              </Magnetic>
            </span>
            {socialMediaData.map((item, index) => (
              <Magnetic key={index}>
                <p>{item}</p>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
