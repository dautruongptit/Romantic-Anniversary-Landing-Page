import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingHearts() {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    setHearts(Array.from({ length: 15 }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            opacity: 0.3,
            scale: Math.random() * 0.5 + 0.3,
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth,
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          <Heart
            className="fill-pink-300 text-pink-300"
            size={Math.random() * 20 + 15}
          />
        </motion.div>
      ))}
    </div>
  );
}
