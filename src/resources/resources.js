// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// const resources = {
//   en: {
//     translation: {
//       hello: "Hello",
//       welcome:
//         "I'm a beginner front-end developer, i have worked on my personal projects, and my enthusiasm to learn makes me a great fit. I am ready to put in maximum effort and succeed in web development.",
//       // Другие переводы для английского
//     },
//   },
//   geo: {
//     translation: {
//       hello: "გამარჯობა",
//       welcome:
//         "მე ვარ დამწყები ფრონტ-ენდის დეველოპერი, რომელიც მუშაობს პირად პროექტებზე, და სწავლის ენთუზიაზმი მშვენივრად მაქცევს. მე მზად ვარ მაქსიმალური ძალისხმევა დავიხარო და მივაღწიო ვებ დეველოპერს.",
//       // Другие переводы для грузинского
//     },
//   },
// };

// i18n.use(initReactI18next).init({
//   resources,
//   lng: "en", // Язык по умолчанию
//   fallbackLng: "en", // Язык по умолчанию в случае отсутствия перевода
//   interpolation: {
//     escapeValue: false, // React уже защищает от XSS
//   },
// });
import georgia1 from "../assets/img/why-georgia1.png";
import vibrant1 from "../assets/img/vibrant1.png";
import marvel1 from "../assets/img/marvel1.png";
import namari1 from "../assets/img/namari1.png";

export const dataProject = [
  {
    id: 1,
    title: "Georgia",
    preloader_title: ["Georgia"],
    src: georgia1,
    color: "#000000",
    type: "ReactJS",
    liberties: ["TailwindCSS", "Framer-Motion", "GSAP", "Swiper"],
    github_link: "https://github.com/AlaniaShota/Georgia",
    live_link: "https://travel-georgia.netlify.app/",
  },
  {
    id: 2,
    title: "Vibrant",
    preloader_title: ["Vibrant"],
    src: vibrant1,
    color: "#8C8C8C",
    type: "Lending",
    liberties: ["SASS", "Framer-Motion"],
    github_link: "https://github.com/AlaniaShota/vibrant",
    live_link: "https://vibrant-framer-motion.netlify.app/",
  },
  {
    id: 3,
    title: "Marvel",
    preloader_title: ["Marvel"],
    src: marvel1,
    color: "#EFE8D3",
    type: "ReactJS",
    liberties: ["SASS", "Zustand"],
    github_link: "https://github.com/AlaniaShota/Marvel",
    // live_link: "https://vibrant-framer-motion.netlify.app/",
  },
  {
    id: 4,
    title: "Namari",
    preloader_title: ["Namari"],
    src: namari1,
    color: "#706D63",
    type: "Lending",
    liberties: ["SASS", "React Icons", "Framer-Motion"],
    github_link: "https://github.com/AlaniaShota/Namari",
    live_link: "https://namari-vite.netlify.app/",
  },
];
