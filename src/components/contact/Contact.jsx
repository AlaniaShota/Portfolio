import { Rounded } from "../Rounded";
import userImg from "../../assets/img/background.jpg";

import { useTransform, useViewportScroll } from "framer-motion";
import "./Contact.scss";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
export const Contact = () => {
  const container = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const { t } = useTranslation();

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [y, setY] = useState([-500, 0]);

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth <= 800;
      if (isMobile) {
        setY([0, 0]);
      } else {
        setY([-500, 0]);
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
  }, []);

  const mail = "alaniashota08@gmail.com";
  const subject = t("subject_email");
  const tel = "+995568820317";
  const formattedTel = tel.replace(
    /(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/,
    "$1 $2 $3 $4 $5",
  );

  return (
    <div style={{ y }} ref={container} className="contact">
      <div className="contact-body">
        <div className="contact-section-title ">
          <span className="contact-span-content-img">
            <div className="img-contact-section">
              <img alt="user" src={userImg} className="img-contact" />
            </div>
            <h2 className="contact-section-description-title">
              {t("subject_first_word")}
            </h2>
          </span>
          <h2 className="contact-section-secondary-description-title">
            {t("subject_second_word")}
          </h2>
          <div style={{ x }} className="contact-btn-content">
            <a href={`mailto:${mail}?subject=${subject}`}>
              <Rounded backgroundColor={"#334BD3"} className="contact-btn">
                <p className="contact-btn-text">{t("connect")}</p>
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
          <a href={`mailto:${mail}?subject=${subject}`}>
            <Rounded>
              <p>{mail}</p>
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
