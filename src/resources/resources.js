import georgia1 from "../assets/img/why-georgia1.png";
import georgia4 from "../assets/img/why-georgia4.png";
import georgia3 from "../assets/img/why-georgia3.png";
import expenseTracker3 from "../assets/img/expenseProject3.png";
import expenseTracker2 from "../assets/img/expenseProject2.png";
import expenseTracker1 from "../assets/img/expenseProject1.png";
import vibrant1 from "../assets/img/vibrant1.png";
import vibrant4 from "../assets/img/vibrant4.png";
import vibrant3 from "../assets/img/vibrant3.png";
import anime1 from "../assets/img/aniProject1.png";
// import anime2 from "../assets/img/aniProject2.png";
import anime3 from "../assets/img/aniProject3.png";
import anime4 from "../assets/img/aniProject4.png";
import marvel1 from "../assets/img/marvel1.png";
import marvel4 from "../assets/img/marvel4.png";
import marvel3 from "../assets/img/marvel3.png";
import namari1 from "../assets/img/namari1.png";
import namari4 from "../assets/img/namari4.png";
import namari3 from "../assets/img/namari3.png";
import mines1 from "../assets/img/mines1.png";
import mines2 from "../assets/img/mines2.png";
import mines3 from "../assets/img/mines3.png";
import sJob1 from "../assets/img/sJob1.png";
import sJob2 from "../assets/img/sJob2.png";
import sJob3 from "../assets/img/sJob3.png";
const __HTTPS = "https://";
const __URL = "github.com/AlaniaShota/";
const __LIVE = ".netlify.app/";

export const dataProject = [
  {
    id: 1,
    title: "Mines",
    preloader_title: ["Mines"],
    src: mines1,
    secondary_img: [mines3, mines2],
    color: "#000000",
    type: "ReactTS",
    liberties: ["CSS"],
    github_link: `${__HTTPS}${__URL}mines`,
    live_link: `${__HTTPS}cmines${__LIVE}`,
    descriptionKey: "description_mines",
  },
  {
    id: 2,
    title: "Expense Tracker",
    preloader_title: ["Expense Tracker"],
    src: expenseTracker3,
    secondary_img: [expenseTracker1, expenseTracker2],
    color: "#8C8C8C",
    type: "ReactTS",
    liberties: ["SASS", "chart.js", "formik", "react-toastify", "yup"],
    github_link: `${__HTTPS}${__URL}ExpenseTracker`,
    live_link: `${__HTTPS}money24tracker${__LIVE}`,
    descriptionKey: "description_expense_tracker",
  },
  {
    id: 3,
    title: "Vibrant",
    preloader_title: ["Vibrant"],
    src: vibrant1,
    secondary_img: [vibrant4, vibrant3],
    color: "#706D63",
    type: "ReactJS",
    liberties: ["SASS", "Framer-Motion"],
    github_link: `${__HTTPS}${__URL}vibrant`,
    live_link: `${__HTTPS}vibrant-framer-motion${__LIVE}`,
    descriptionKey: "description_vibrant",
  },
  {
    id: 4,
    title: "Namari",
    preloader_title: ["Namari"],
    src: namari1,
    secondary_img: [namari4, namari3],
    color: "#000000",
    type: "ReactJS",
    liberties: ["SASS", "React Icons", "Framer-Motion"],
    github_link: `${__HTTPS}${__URL}Namari`,
    live_link: `${__HTTPS}namari-vite${__LIVE}`,
    descriptionKey: "description_namari",
  },
  {
    id: 5,
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
    id: 6,
    title: "Anime",
    preloader_title: ["Anime"],
    src: anime1,
    secondary_img: [anime4, anime3],
    color: "#EFE8D3",
    type: "ReactTS",

    liberties: ["React Query", "Redux", "TailwindCSS"],
    github_link: `${__HTTPS}${__URL}Anime`,
    live_link: `${__HTTPS}anistar${__LIVE}`,
    descriptionKey: "description_anime",
  },
  {
    id: 7,
    title: "Marvel",
    preloader_title: ["Marvel"],
    src: marvel1,
    secondary_img: [marvel4, marvel3],
    color: "#706D63",
    type: "ReactJS",
    alert_smg: "alert_marvel",
    liberties: ["SASS", "Zustand"],
    github_link: `${__HTTPS}${__URL}Marvel`,
    descriptionKey: "description_marvel",
  },

  {
    id: 8,
    title: "SJob",
    preloader_title: ["SJob"],
    src: sJob1,
    secondary_img: [sJob3, sJob2],
    color: "#8C8C8C",
    type: "ReactTS",
    liberties: ["Yup", "Zustand", "Framer Motion", "Axios", "TailwindCSS"],
    github_link: `${__HTTPS}${__URL}career`,
    live_link: `${__HTTPS}sjob${__LIVE}`,
    descriptionKey: "description_sjob",
  },
];
