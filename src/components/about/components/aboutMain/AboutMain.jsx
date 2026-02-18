import "./AboutMain.scss";
import { aboutData } from "../../../../mockData";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export const AboutMain = () => {
  const { t } = useTranslation();
  const container = useRef(null);

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

  const mainData = aboutData.mainItems.map((item) => ({
    id: item.id,
    title: t(item.titleKey),
    description: t(item.descriptionKey),
  }));

  return (
    <div ref={container} className="about-main">
      <div className="about-main-container">
        <div className="about-main-content-header">
          <h1 className="about-main-content-title">
            {t(aboutData.mainConfig.titleKey)}
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </h1>
        </div>
        <div className="about-main-content-section">
          {mainData.map((item) => (
            <div key={item.id} className="about-main-section">
              <div className="content-numbering">
                <div className="numbers">0{item.id}</div>
                <div className="stripe"></div>
              </div>
              <div className="content-skills">
                <h3 className="skills-title">{item.title}</h3>
                <p className="skills-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
