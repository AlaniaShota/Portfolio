import georgia1 from "../assets/img/why-georgia1.png";
import georgia4 from "../assets/img/why-georgia4.png";
import georgia3 from "../assets/img/why-georgia3.png";
import vibrant1 from "../assets/img/vibrant1.png";
import vibrant4 from "../assets/img/vibrant4.png";
import vibrant3 from "../assets/img/vibrant3.png";

import marvel1 from "../assets/img/marvel1.png";
import marvel4 from "../assets/img/marvel4.png";
import marvel3 from "../assets/img/marvel3.png";
import namari1 from "../assets/img/namari1.png";
import namari4 from "../assets/img/namari4.png";
import namari3 from "../assets/img/namari3.png";

export const dataProject = [
  {
    id: 1,
    title: "Georgia",
    preloader_title: ["Georgia"],
    src: georgia1,
    secondary_img: [georgia4, georgia3],
    color: "#000000",
    type: "ReactJS",
    liberties: ["TailwindCSS", "Framer-Motion", "GSAP", "Swiper"],
    github_link: "https://github.com/AlaniaShota/Georgia",
    live_link: "https://travel-georgia.netlify.app/",
    description:
      "Developed a project which showcases Georgia and it characteristics for tourists. Built using Vite + ReactJS.Implemented a design system using TailwindCSS and enhanced the user interface with features like framer-motion, gsap, and swiper. Data management was handled efficiently using Zustand.",
  },
  {
    id: 2,
    title: "Vibrant",
    preloader_title: ["Vibrant"],
    src: vibrant1,
    secondary_img: [vibrant4, vibrant3],
    color: "#8C8C8C",
    type: "Lending",
    liberties: ["SASS", "Framer-Motion"],
    github_link: "https://github.com/AlaniaShota/vibrant",
    live_link: "https://vibrant-framer-motion.netlify.app/",
    description:
      "The vibrant project is a landing page. It was built using Vite + ReactJS. Designed the project's UI system using SCSS and enhanced with libraries like a framer-motion.",
  },
  {
    id: 3,
    title: "Marvel",
    preloader_title: ["Marvel"],
    src: marvel1,
    secondary_img: [marvel4, marvel3],
    color: "#EFE8D3",
    type: "ReactJS",
    alert_smg:
      "There is'n demo version of the site, Marvel Api data is'n displayed for live versions",
    liberties: ["SASS", "Zustand"],
    github_link: "https://github.com/AlaniaShota/Marvel",
    // live_link: "https://vibrant-framer-motion.netlify.app/",
    description:
      "The Marvel project, as utilized the Marvel API, which is one of the largest mock data available. It was built using Vite + ReactJS. Designed the project's UI system using SCSS. Data management was efficiently handled through Zustand",
  },
  {
    id: 4,
    title: "Namari",
    preloader_title: ["Namari"],
    src: namari1,
    secondary_img: [namari4, namari3],
    color: "#706D63",
    type: "Lending",
    liberties: ["SASS", "React Icons", "Framer-Motion"],
    github_link: "https://github.com/AlaniaShota/Namari",
    live_link: "https://namari-vite.netlify.app/",
    description: "test",
  },
];
