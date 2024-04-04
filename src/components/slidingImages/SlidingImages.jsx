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

import "./SlidingImages.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

export const SlidingImages = () => {
  const [isMobScreen, setIsMobScreen] = useState(window.innerWidth > 430);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobScreen(window.innerWidth > 430);
      setIsWideScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMobScreen) {
    return null;
  }

  const slider = [
    {
      id: 1,
      img: georgia1,
      secondImg: georgia2,
      thirdImg: georgia3,
      color: "#e3e5e7",
    },
    {
      id: 2,
      img: vibrant1,
      secondImg: vibrant2,
      thirdImg: vibrant3,
      color: "#d6d7dc",
    },
    {
      id: 3,
      img: marvel1,
      secondImg: marvel2,
      thirdImg: marvel3,
      color: "#e3e3e3",
    },
    {
      id: 4,
      img: namari1,
      secondImg: namari2,
      thirdImg: namari3,
      color: "#21242b",
    },
  ];

  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {slider.map((item) => (
          <SwiperSlide
            key={item.id}
            // className={isWideScreen ? "" : "bg-color"}
            style={isWideScreen ? null : { backgroundColor: item.color }}
          >
            <div className="slider-content">
              <div className="important-img-content">
                <img src={item.img} alt="Img" className="important-img" />
              </div>
              <div className="secondary-img-content">
                <img src={item.secondImg} alt="Img" className="secondary-img" />
                <img src={item.thirdImg} alt="Img" className="secondary-img" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
