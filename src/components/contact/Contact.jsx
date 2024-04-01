import { Magnetic } from "../Magnetic";
import { Rounded } from "../Rounded";
import userImg from "../../assets/img/background.jpg";

import { useScroll, useTransform, motion, useViewportScroll } from "framer-motion";
import "./Contact.scss";
import { useEffect, useRef, useState } from "react";

export const Contact = () => {
  // const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "end end"],
  // });

  // const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  // const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  // const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  // // const mediaQuery = window.matchMedia("(max-width: 800px)");

  // const socialMediaData = [
  //   { id: 1, title: "Instagram", link: "https://www.instagram.com/alania126/" },
  //   {
  //     id: 2,
  //     title: "Linkedin",
  //     link: "https://www.linkedin.com/in/shota-alania-0a705820b/",
  //   },
  //   {
  //     id: 3,
  //     title: "GitHub",
  //     link: "https://github.com/AlaniaShota",
  //   },
  // ];

  // useEffect(() => {
  //   function handleResize() {
  //     const mediaQuery = window.matchMedia("(max-width: 800px)");
  //     if (mediaQuery.matches) {
  //       y.set(scrollYProgress, [0, 0], [0, 0]); // Изменение значения переменной y в зависимости от условия
  //     }
  //   }

  //   handleResize();

  //   const resizeListener = () => {
  //     handleResize();
  //   };

  //   window.addEventListener("resize", resizeListener);

  //   return () => {
  //     window.removeEventListener("resize", resizeListener);
  //   };
  // }, [y]);

  // const mail = "alaniashota08@gmail.com";
  // const subject = "Lest's work together";
  // const tel = "+995568820317";
  // const formattedTel = tel.replace(
  //   /(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/,
  //   "$1 $2 $3 $4 $5",
  // );

  // return (
  //   <motion.div style={{ y }} ref={container} className="contact">
  //     <div className="contact-body">
  //       <div className="contact-section-title">
  //         <span className="contact-span-content-img">
  //           <div className="img-contact-section">
  //             <img alt={"image"} src={userImg} className="img-contact" />
  //           </div>
  //           <h2 className="contact-section-description-title">Let's work</h2>
  //         </span>
  //         <h2 className="contact-section-secondary-description-title">
  //           together
  //         </h2>
  //         <motion.div style={{ x }} className="contact-btn-content">
  //           <a href={`mailto:${mail}?subject=${subject}`}>
  //             <Rounded backgroundColor={"#334BD3"} className="contact-btn">
  //               <p className="contact-btn-text">Get in touch</p>
  //             </Rounded>
  //           </a>
  //         </motion.div>
  //         <motion.svg
  //           style={{ rotate, scale: 2 }}
  //           width="9"
  //           height="9"
  //           viewBox="0 0 9 9"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
  //             fill="white"
  //           />
  //         </motion.svg>
  //       </div>
  //       <div className="contact-navigation-section" id="contact">
  //         <a href={`mailto:${mail}?subject=${subject}`}>
  //           <Rounded>
  //             <p>{mail}</p>
  //           </Rounded>
  //         </a>
  //         <a href={`tel:${tel}`}>
  //           <Rounded>
  //             <p>{formattedTel}</p>
  //           </Rounded>
  //         </a>
  //       </div>
  //       <div className="contact-information">
  //         <div>
  //           <span>
  //             <h3>Version</h3>
  //             <p>2022 © Edition</p>
  //           </span>
  //           <span>
  //             <h3>Code</h3>
  //             <a href="https://dennissnellenberg.com/" target="_blank">
  //               <p>Dennis Snellenberg</p>
  //             </a>
  //           </span>
  //         </div>
  //         <div>
  //           <span>
  //             <h3>socials</h3>
  //             <a
  //               href="https://www.facebook.com/profile.php?id=100006923223734"
  //               target="_blank"
  //             >
  //               <Magnetic>
  //                 <p>FaceBook</p>
  //               </Magnetic>
  //             </a>
  //           </span>
  //           {socialMediaData.map((item) => (
  //             <a href={item.link} target="_blank" key={item.id}>
  //               <Magnetic>
  //                 <p>{item.title}</p>
  //               </Magnetic>
  //             </a>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </motion.div>
  // );
  const container = useRef(null);
  const { scrollYProgress } = useViewportScroll();

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [y, setY] = useState([-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth <= 800;
      if (isMobile) {
        setY([0, 0]); // Изменяем значение переменной y в зависимости от условия
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
  const subject = "Let's work together";
  const tel = "+995568820317";
  const formattedTel = tel.replace(
    /(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/,
    "$1 $2 $3 $4 $5"
  );

  const socialMediaData = [
    {
      id: 1,
      title: "Instagram",
      link: "https://www.instagram.com/alania126/",
    },
    {
      id: 2,
      title: "Linkedin",
      link: "https://www.linkedin.com/in/shota-alania-0a705820b/",
    },
    {
      id: 3,
      title: "GitHub",
      link: "https://github.com/AlaniaShota",
    },
  ];

  return (
    <div style={{ y }} ref={container} className="contact">
      <div className="contact-body">
        <div className="contact-section-title">
          <span className="contact-span-content-img">
            <div className="img-contact-section">
              <img alt="user" src={userImg} className="img-contact" />
            </div>
            <h2 className="contact-section-description-title">Let's work</h2>
          </span>
          <h2 className="contact-section-secondary-description-title">
            together
          </h2>
          <div style={{ x }} className="contact-btn-content">
            <a href={`mailto:${mail}?subject=${subject}`}>
              <Rounded backgroundColor={"#334BD3"} className="contact-btn">
                <p className="contact-btn-text">Get in touch</p>
              </Rounded>
            </a>
          </div>
          <svg
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
        <div className="contact-information">
          <div>
            <span>
              <h3>Version</h3>
              <p>2022 © Edition</p>
            </span>
            <span>
              <h3>Code</h3>
              <a href="https://dennissnellenberg.com/" target="_blank">
                <p>Dennis Snellenberg</p>
              </a>
            </span>
          </div>
          <div>
            <span>
              <h3>Socials</h3>
              <a
                href="https://www.facebook.com/profile.php?id=100006923223734"
                target="_blank"
              >
                <Magnetic>
                  <p>Facebook</p>
                </Magnetic>
              </a>
            </span>
            {socialMediaData.map((item) => (
              <a href={item.link} target="_blank" key={item.id}>
                <Magnetic>
                  <p>{item.title}</p>
                </Magnetic>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
