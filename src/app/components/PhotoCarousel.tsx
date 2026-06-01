import Slider from "react-slick";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Photo {
  url: string;
  caption: string;
}

const photos: Photo[] = [
  {
    url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=600&fit=crop&auto=format",
    caption: "Khoảnh khắc đầu tiên bên nhau ❤️"
  },
  {
    url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop&auto=format",
    caption: "Chuyến du lịch đáng nhớ 🌅"
  },
  {
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop&auto=format",
    caption: "Những buổi tối bên nhau ✨"
  },
  {
    url: "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?w=800&h=600&fit=crop&auto=format",
    caption: "Mỗi ngày bên em đều đặc biệt 💕"
  },
  {
    url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=600&fit=crop&auto=format",
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
