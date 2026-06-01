import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { FloatingHearts } from "./components/FloatingHearts";
import { FallingHearts } from "./components/FallingHearts";
import { MusicPlayer } from "./components/MusicPlayer";
import { PhotoCarousel } from "./components/PhotoCarousel";
import { Timeline } from "./components/Timeline";
import { ReasonsCards } from "./components/ReasonsCards";
import { AnniversaryCounter } from "./components/AnniversaryCounter";

export default function App() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <FloatingHearts />
      <FallingHearts />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&h=1080&fit=crop&auto=format')",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center relative z-10"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-6"
            >
              <Heart className="w-20 h-20 text-pink-400 fill-pink-400 mx-auto" />
            </motion.div>

            <h1
              className="text-6xl md:text-8xl mb-6 text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              2 Years of Love 💖
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Cảm ơn vì đã cùng nhau đi qua từng khoảnh khắc
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-12"
            >
              <div className="flex gap-3 justify-center">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  >
                    <Heart className="w-6 h-6 text-pink-300 fill-pink-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-pink-400 text-4xl"
            >
              ↓
            </motion.div>
          </motion.div>
        </section>

        {/* Music Player Section */}
        <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl text-center mb-8 text-pink-500"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Song 🎵
          </motion.h2>
          <MusicPlayer />
        </section>

        {/* Photo Carousel Section */}
        <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl text-center mb-16 text-pink-500"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Memories 📷
          </motion.h2>
          <PhotoCarousel />
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl text-center mb-20 text-pink-500"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Love Story 📖
          </motion.h2>
          <Timeline />
        </section>

        {/* Counter Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
          <AnniversaryCounter />
        </section>

        {/* Reasons Section */}
        <section className="py-20 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl text-center mb-16 text-pink-500"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Reasons I Love You 💌
          </motion.h2>
          <ReasonsCards />
        </section>

        {/* Final Message Section */}
        <section className="py-32 px-4 bg-gradient-to-br from-pink-100 via-purple-100 to-pink-100 relative">
          <div
            className="absolute inset-0 opacity-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1920&h=1080&fit=crop&auto=format')",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center relative z-10 bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border-2 border-pink-200"
          >
            <Heart className="w-16 h-16 text-pink-400 fill-pink-400 mx-auto mb-8" />

            <p
              className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              "Hai năm qua là khoảng thời gian tuyệt vời nhất trong đời anh. Mỗi ngày bên em đều là một món quà. Anh hứa sẽ luôn yêu thương, trân trọng và bảo vệ em. Cảm ơn em vì đã đến bên anh và biến cuộc sống này trở nên ý nghĩa hơn bao giờ hết."
            </p>

            <p
              className="text-xl text-pink-500 italic"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Yêu em mãi mãi 💕
            </p>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-white/80 backdrop-blur-sm border-t border-pink-200">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center"
          >
            <p
              className="text-3xl text-pink-500 mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Forever & Always ❤️
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="px-8 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Replay Memories 🎵
            </motion.button>

            <div className="mt-8 flex justify-center gap-2">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                >
                  <Heart className="w-4 h-4 text-pink-300 fill-pink-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </footer>
      </div>
    </div>
  );
}
