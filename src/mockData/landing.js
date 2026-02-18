import { i18nKeys } from "./i18nKeys";

export const landingData = {
  preloadData: [
    "გამარჯობა",
    "Hello",
    "Bonjour",
    "Ciao",
    "Olà",
    "やあ",
    "Hallå",
    "Guten tag",
    "Hallo",
  ],
  sliderConfig: {
    initialXPercent: 0,
    minXPercent: -100,
    maxXPercent: 0,
    direction: -1,
    loopStep: 0.1,
    scrollScrub: 0.25,
    scrollStart: 0,
    scrollEndMultiplier: 1,
    sliderTranslateX: "-500px",
  },
  descriptionConfig: {
    skillsText:
      "HTML, CSS, JavaScript, React, Vite, React Router, SCSS, Formik, " +
      "Zustand, TailwindCSS, Material-UI (MUI), Yup, React Hook Form, " +
      "Framer-motion, GSAP, Swiper, Redux, Redux Toolkit",
    aboutRoute: "/about",
    scrollSpeed: 0.1,
    welcomeKey: i18nKeys.landing.welcome,
    aboutMeKey: i18nKeys.landing.aboutMe,
  },
  heroConfig: {
    sliderText: "Shota Alania -",
    statusText: "Developer",
    roleText: "React Developer",
    userImgAlt: "Shota Alania",
    descriptionScrollSpeed: 0.1,
  },
};
