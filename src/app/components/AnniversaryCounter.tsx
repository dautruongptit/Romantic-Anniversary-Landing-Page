import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function AnniversaryCounter() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const startDate = new Date("2024-06-02");
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let current = 0;
    const increment = diffDays / 50;

    const timer = setInterval(() => {
      current += increment;
      if (current >= diffDays) {
        setDays(diffDays);
        clearInterval(timer);
      } else {
        setDays(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center gap-4 py-12"
    >
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          textShadow: [
            "0 0 20px rgba(236, 72, 153, 0.3)",
            "0 0 40px rgba(236, 72, 153, 0.5)",
            "0 0 20px rgba(236, 72, 153, 0.3)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-8xl md:text-9xl text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {days}
      </motion.div>
      <p className="text-3xl text-pink-500" style={{ fontFamily: 'var(--font-display)' }}>
        Days Together ❤️
      </p>
      <p className="text-lg text-gray-500" style={{ fontFamily: 'var(--font-body)' }}>
        Và hành trình vẫn tiếp tục...
      </p>
    </motion.div>
  );
}
