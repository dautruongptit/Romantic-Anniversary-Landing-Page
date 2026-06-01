import { motion } from "motion/react";
import { Heart } from "lucide-react";

const reasons = [
  "Luôn quan tâm em từng chút một 🌸",
  "Luôn làm em cười mỗi ngày ☺️",
  "Luôn ở bên dù khó khăn 💪",
  "Hiểu em mà không cần nói 💭",
  "Yêu em với tất cả trái tim ❤️",
  "Luôn khiến em cảm thấy đặc biệt ✨"
];

export function ReasonsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4">
      {reasons.map((reason, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30, rotate: Math.random() * 6 - 3 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{
            scale: 1.05,
            rotate: 0,
            y: -10
          }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 rounded-2xl shadow-lg border-2 border-pink-200 min-h-[150px] flex flex-col items-center justify-center text-center transform transition-all hover:shadow-2xl">
            <Heart className="text-pink-400 fill-pink-400 mb-3" size={28} />
            <p className="text-gray-700" style={{ fontFamily: 'var(--font-display)' }}>
              {reason}
            </p>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-300 rounded-full shadow-md flex items-center justify-center">
            <Heart className="text-white fill-white" size={16} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
