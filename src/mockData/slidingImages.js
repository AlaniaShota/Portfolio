import georgia1 from "../../assets/img/why-georgia1.png";
import georgia2 from "../../assets/img/why-georgia2.png";
import georgia3 from "../../assets/img/why-georgia3.png";
import expenseTracker3 from "../../assets/img/expenseProject3.png";
import expenseTracker2 from "../../assets/img/expenseProject2.png";
import expenseTracker1 from "../../assets/img/expenseProject1.png";
import vibrant1 from "../../assets/img/vibrant1.png";
import vibrant2 from "../../assets/img/vibrant2.png";
import vibrant3 from "../../assets/img/vibrant3.png";
import anime1 from "../../assets/img/aniProject1.png";
import anime3 from "../../assets/img/aniProject3.png";
import anime4 from "../../assets/img/aniProject4.png";
import marvel1 from "../../assets/img/marvel1.png";
import marvel2 from "../../assets/img/marvel2.png";
import marvel3 from "../../assets/img/marvel3.png";
import namari1 from "../../assets/img/namari1.png";
import namari2 from "../../assets/img/namari2.png";
import namari3 from "../../assets/img/namari3.png";
import mines1 from "../../assets/img/mines1.png";
import mines2 from "../../assets/img/mines2.png";
import mines3 from "../../assets/img/mines3.png";
import sJob1 from "../../assets/img/sJob1.png";
import sJob2 from "../../assets/img/sJob2.png";
import sJob3 from "../../assets/img/sJob3.png";

export const slidingImagesData = {
  thresholds: {
    mobile: 430,
    wide: 1024,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  altKey: "slider_image_alt",
  slides: [
    {
      id: 1,
      images: [mines1, mines2, mines3],
      color: "#21242b",
    },
    {
      id: 2,
      images: [expenseTracker3, expenseTracker2, expenseTracker1],
      color: "#d6d7dc",
    },
    {
      id: 3,
      images: [vibrant1, vibrant2, vibrant3],
      color: "#e3e3e3",
    },
    {
      id: 4,
      images: [namari1, namari2, namari3],
      color: "#e3e5e7",
    },
    {
      id: 5,
      images: [georgia1, georgia2, georgia3],
      color: "#e3e5e7",
    },
    {
      id: 6,
      images: [anime1, anime3, anime4],
      color: "#e3e3e3",
    },
    {
      id: 7,
      images: [marvel1, marvel2, marvel3],
      color: "#21242b",
    },
    {
      id: 8,
      images: [sJob1, sJob2, sJob3],
      color: "#8C8C8C",
    },
  ],
};
