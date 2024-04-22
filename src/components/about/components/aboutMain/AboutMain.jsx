import gsap from "gsap";
import "./AboutMain.scss";
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

  const mainData = [
    {
      id: 1,
      title: t("learn_grow"),
      description: t("learn_grow_description"),
    },
    {
      id: 2,
      title: t("hardworking_reliable"),
      description: t("hardworking_reliable_description"),
    },
    {
      id: 3,
      title: t("driven_succeed"),
      description: t("driven_succeed_description"),
    },
  ];

  return (
    <div ref={container} className="about-main">
      <div className="about-main-container">
        <div className="about-main-content-header">
          <h1 className="about-main-content-title">
            {t("how_i_can_help")}
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
