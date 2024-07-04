import georgia1 from "../assets/img/why-georgia1.png";
import georgia4 from "../assets/img/why-georgia4.png";
import georgia3 from "../assets/img/why-georgia3.png";
import vibrant1 from "../assets/img/vibrant1.png";
import vibrant4 from "../assets/img/vibrant4.png";
import vibrant3 from "../assets/img/vibrant3.png";
import anime1 from "../assets/img/aniProject1.png";
import anime2 from "../assets/img/aniProject2.png";
import anime3 from "../assets/img/aniProject3.png";
import anime4 from "../assets/img/aniProject4.png";
import marvel1 from "../assets/img/marvel1.png";
import marvel4 from "../assets/img/marvel4.png";
import marvel3 from "../assets/img/marvel3.png";
import namari1 from "../assets/img/namari1.png";
import namari4 from "../assets/img/namari4.png";
import namari3 from "../assets/img/namari3.png";
import skyWeather from "../assets/img/sky-weather.png";
import skyWeather2 from "../assets/img/sky-weather2.png";
import skyWeather3 from "../assets/img/sky-weather3.png";

const __HTTPS = "https://";
const __URL = "github.com/AlaniaShota/";
const __LIVE = ".netlify.app/";

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
    github_link: `${__HTTPS}${__URL}Georgia`,
    live_link: `${__HTTPS}travel-georgia${__LIVE}`,
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
    github_link: `${__HTTPS}${__URL}vibrant`,
    live_link: `${__HTTPS}vibrant-framer-motion${__LIVE}`,
    descriptionKey: "description_vibrant",
  },
  {
    id: 3,
    title: "Anime",
    preloader_title: ["Anime"],
    src: anime1,
    secondary_img: [anime4, anime3],
    color: "#706D63",
    type: "ReactTS",

    liberties: ["React Query", "Redux", "TailwindCSS"],
    github_link: `${__HTTPS}${__URL}Anime`,
    live_link: `${__HTTPS}anistar${__LIVE}`,
    descriptionKey: "description_anime",
  },
  {
    id: 4,
    title: "Marvel",
    preloader_title: ["Marvel"],
    src: marvel1,
    secondary_img: [marvel4, marvel3],
    color: "#EFE8D3",
    type: "ReactJS",
    alert_smg: "alert_marvel",
    liberties: ["SASS", "Zustand"],
    github_link: `${__HTTPS}${__URL}Marvel`,
    descriptionKey: "description_marvel",
  },
  {
    id: 5,
    title: "Namari",
    preloader_title: ["Namari"],
    src: namari1,
    secondary_img: [namari4, namari3],
    color: "#706D63",
    type: "ReactJS",
    liberties: ["SASS", "React Icons", "Framer-Motion"],
    github_link: `${__HTTPS}${__URL}Namari`,
    live_link: `${__HTTPS}namari-vite${__LIVE}`,
    descriptionKey: "description_namari",
  },
  {
    id: 6,
    title: "Sky Weather",
    preloader_title: ["Sky Weather"],
    src: skyWeather,
    secondary_img: [skyWeather3, skyWeather2],
    color: "#000000",
    type: "ReactTS",
    liberties: ["Styled Component"],
    github_link: `${__HTTPS}${__URL}sky-weather`,
    live_link: `${__HTTPS}skyweather24${__LIVE}`,
    descriptionKey: "description_sky_weather",
  },
];
