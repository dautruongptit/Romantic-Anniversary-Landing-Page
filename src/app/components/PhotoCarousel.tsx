import Slider from "react-slick";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Photo {
  url: string;
  caption: string;
}

const photos: Photo[] = [
  {
    url: "/images/1.jpg",
    caption: "Khoảnh khắc đầu tiên bên nhau ❤️"
  },
  {
     url: "/images/2.JPG",
    caption: "Chuyến du lịch đáng nhớ 🌅"
  },
  {
     url: "/images/3.jpg",
    caption: "Những buổi tối bên nhau ✨"
  },
  {
    url: "/images/4.jpg",
    caption: "Mỗi ngày bên em đều đặc biệt 💕"
  },
  {
    url: "/images/6.jpg",
    caption: "Yêu em từng giây phút 💖"
  },
  {
    url: "/images/7.JPG",
    caption: "Yêu em từng giây phút 💖"
  },
  {
    url: "/images/5.JPG",
    caption: "Yêu em từng giây phút 💖"
  }
];

export function PhotoCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    fade: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-4xl mx-auto px-4"
    >
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} className="outline-none">
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-3xl shadow-2xl bg-pink-50"
              >
                <ImageWithFallback
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mt-6 text-pink-600"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {photo.caption}
              </motion.p>
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
}
