import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const slideContent = [
  {
    img: img1,
    title: "Premium Gym Gear",
    desc: "Elevate your fitness journey with top-tier gym equipment designed for performance and durability.",
  },
  {
    img: img2,
    title: "Outdoor Adventure Kits",
    desc: "Explore the wild with our rugged and reliable camping & trekking essentials.",
  },
  {
    img: img3,
    title: "High-Performance Sportswear",
    desc: "Engineered for movement. Experience comfort and style like never before.",
  },
  {
    img: img4,
    title: "Smart Fitness Accessories",
    desc: "From smartwatches to resistance bands, upgrade your workout with our latest tech.",
  },
];

const Slider = () => {
  return (
    <div className="w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-lg">
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slideContent.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[400px] sm:h-[500px] ">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 dark:bg-black/60 bg-black/30 flex flex-col justify-center items-center text-center px-4 sm:px-10">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 animate-fade-in-up drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-lg md:text-xl text-gray-200 max-w-2xl animate-fade-in delay-200">
                  {slide.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
