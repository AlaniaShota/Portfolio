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
import skyWeather from "../assets/img/sky-weather.png";
import skyWeather2 from "../assets/img/sky-weather2.png";
import skyWeather3 from "../assets/img/sky-weather3.png";

const __URL = "https://github.com/AlaniaShota/";

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
    github_link: `${__URL}Georgia`,
    live_link: "https://travel-georgia.netlify.app/",
    descriptionKey: "description_georgia",
  },
  {
    id: 2,
    title: "Vibrant",
    preloader_title: ["Vibrant"],
    src: vibrant1,
    secondary_img: [vibrant4, vibrant3],
    color: "#8C8C8C",
    type: "ReactJS",
    liberties: ["SASS", "Framer-Motion"],
    github_link: `${__URL}vibrant`,
    live_link: "https://vibrant-framer-motion.netlify.app/",
    descriptionKey: "description_vibrant",
  },
  {
    id: 3,
    title: "Marvel",
    preloader_title: ["Marvel"],
    src: marvel1,
    secondary_img: [marvel4, marvel3],
    color: "#EFE8D3",
    type: "ReactJS",
    alert_smg: "alert_marvel",
    liberties: ["SASS", "Zustand"],
    github_link: `${__URL}Marvel`,
    descriptionKey: "description_marvel",
  },
  {
    id: 4,
    title: "Namari",
    preloader_title: ["Namari"],
    src: namari1,
    secondary_img: [namari4, namari3],
    color: "#706D63",
    type: "ReactJS",
    liberties: ["SASS", "React Icons", "Framer-Motion"],
    github_link: `${__URL}Namari`,
    live_link: "https://namari-vite.netlify.app/",
    descriptionKey: "description_namari",
  },
  {
    id: 5,
    title: "Sky Weather",
    preloader_title: ["Sky Weather"],
    src: skyWeather,
    secondary_img: [skyWeather3, skyWeather2],
    color: "#000000",
    type: "ReactTS",
    liberties: ["Styled Component"],
    github_link: `${__URL}sky-weather`,
    live_link: "https://skyweather24.netlify.app/",
    descriptionKey: "description_sky_weather",
  },
];
