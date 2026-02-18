import "./Contact.scss";

import { Rounded } from "../Rounded";
import userImg from "../../assets/img/Gemini_Generated_Image_6qxynw6qxynw6qxy.png";
import { contactData } from "../../mockData";

import { useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const container = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const { t } = useTranslation();

  const { config, mailBase, email, tel } = contactData;
  const {
    xTransformRange,
    xTransformOutput,
    mobileMaxWidth,
    yDesktop,
    yMobile,
    subjectKey,
    subjectFirstWordKey,
    subjectSecondWordKey,
    connectKey,
    telFormatPattern,
    telFormatTemplate,
  } = config;
  const x = useTransform(scrollYProgress, xTransformRange, xTransformOutput);
  const [y, setY] = useState(yDesktop);

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth <= mobileMaxWidth;
      if (isMobile) {
        setY(yMobile);
      } else {
        setY(yDesktop);
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
  }, [mobileMaxWidth, yDesktop, yMobile]);

  const subject = encodeURIComponent(t(subjectKey));
  const formattedTel = tel.replace(telFormatPattern, telFormatTemplate);

  return (
    <div style={{ y }} ref={container} className="contact">
      <div className="contact-body">
        <div className="contact-section-title ">
          <span className="contact-span-content-img">
            <div className="img-contact-section">
              <img alt="user" src={userImg} className="img-contact" />
            </div>
            <h2 className="contact-section-description-title">
              {t(subjectFirstWordKey)}
            </h2>
          </span>
          <h2 className="contact-section-secondary-description-title">
            {t(subjectSecondWordKey)}
          </h2>
          <div style={{ x }} className="contact-btn-content">
            <a href={`${mailBase}${email}&su=${subject}`}>
              <Rounded backgroundColor={"#334BD3"} className="contact-btn">
                <p className="contact-btn-text">{t(connectKey)}</p>
            </Rounded>
            </a>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="contact-navigation-section" id="contact">
          <a href={`${mailBase}${email}&su=${subject}`}>
            <Rounded>
              <p>{email}</p>
            </Rounded>
          </a>
          <a href={`tel:${tel}`}>
            <Rounded>
              <p>{formattedTel}</p>
            </Rounded>
          </a>
        </div>
      </div>
    </div>
  );
};
