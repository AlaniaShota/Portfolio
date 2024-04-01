import georgia1 from "../../assets/img/why-georgia1.png";
import georgia2 from "../../assets/img/why-georgia2.png";
import georgia3 from "../../assets/img/why-georgia3.png";
import vibrant1 from "../../assets/img/vibrant1.png";
import vibrant2 from "../../assets/img/vibrant2.png";
import vibrant3 from "../../assets/img/vibrant3.png";
import marvel1 from "../../assets/img/marvel1.png";
import marvel2 from "../../assets/img/marvel2.png";
import marvel3 from "../../assets/img/marvel3.png";
import namari1 from "../../assets/img/namari1.png";
import namari2 from "../../assets/img/namari2.png";
import namari3 from "../../assets/img/namari3.png";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import "./SlidingImages.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const slider1 = [
  {
    color: "#e3e5e7",
    src: georgia1,
  },
  {
    color: "#d6d7dc",
    src: georgia2,
  },
  {
    color: "#e3e3e3",
    src: vibrant1,
  },
  // {
  //   color: "#21242b",
  //   src: vibrant2,
  // },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: marvel1,
  },
  {
    color: "#e5e0e1",
    src: marvel2,
  },
  {
    color: "#d7d4cf",
    src: namari1,
  },
  // {
  //   color: "#e1dad6",
  //   src: namari2,
  // },
];

export const SlidingImages = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className="slidingImages">
      <motion.div style={{ x: x1 }} className="slider-img-section">
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className="slider-item"
              style={{ backgroundColor: project.color }}
            >
              <div className="slider-img-content">
                <img alt="image" src={project.src} className="img-slider" />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className="slider-img-section">
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className="slider-item"
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className="slider-img-content">
                <img alt="image" src={project.src} className="img-slider" />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className="circle-container-section">
        <div className="circle-content"></div>
      </motion.div>
    </div>
  );

  // return (
  //   <>
  //     <Swiper
  //       className="mySwiper swiper-h"
  //       spaceBetween={50}
  //       pagination={{
  //         clickable: true,
  //       }}
  //       modules={[Pagination]}
  //     >
  //       <SwiperSlide>Horizontal Slide 1</SwiperSlide>
  //       <SwiperSlide>
  //         <Swiper
  //           className="mySwiper2 swiper-v"
  //           direction={"vertical"}
  //           spaceBetween={50}
  //           pagination={{
  //             clickable: true,
  //           }}
  //           modules={[Pagination]}
  //         >
  //           {slider1.map((item) => (
  //             <SwiperSlide key={item.color}>{item.src}</SwiperSlide>
  //           ))}

  //           {/* <SwiperSlide>Vertical Slide 2</SwiperSlide>
  //           <SwiperSlide>Vertical Slide 3</SwiperSlide>
  //           <SwiperSlide>Vertical Slide 4</SwiperSlide>
  //           <SwiperSlide>Vertical Slide 5</SwiperSlide> */}
  //         </Swiper>
  //       </SwiperSlide>
  //       <SwiperSlide>Horizontal Slide 3</SwiperSlide>
  //       <SwiperSlide>Horizontal Slide 4</SwiperSlide>
  //     </Swiper>
  //   </>
  // );
};
