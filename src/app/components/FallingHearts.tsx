import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export function FallingHearts() {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    setHearts(Array.from({ length: 20 }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -50,
            opacity: 0.4,
            scale: Math.random() * 0.4 + 0.4,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: window.innerHeight + 50,
            x: Math.random() * window.innerWidth,
            rotate: Math.random() * 360 + 180,
            opacity: [0.4, 0.7, 0.4, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 10,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "linear",
          }}
        >
          <Heart
            className="fill-pink-200 text-pink-200"
            size={Math.random() * 25 + 12}
          />
        </motion.div>
      ))}
    </div>
  );
}
