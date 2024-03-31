import gsap from "gsap";
import "./AboutMain.scss";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const AboutMain = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

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
      title: "Design",
      description:
        "With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.",
    },
    {
      id: 2,
      title: "Development",
      description:
        "I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction.",
    },
    {
      id: 3,
      title: "The full package",
      description:
        "A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.",
    },
  ];

  return (
    // <div ref={container} className="main">
    <div ref={container} className="about-main">
      <div className="about-main-container">
        <div className="about-main-content-header">
          <h1 className="about-main-content-title">
            I can help you with<span className="dot">.</span>
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
      <motion.div style={{ height }} className="circle-container-section-test">
        <div className="circle-content-test"></div>
      </motion.div>
    </div>

    //  </div>
  );
};
