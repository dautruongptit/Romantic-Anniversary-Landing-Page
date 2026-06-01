import { useState, useRef, useEffect } from "react";
import { Play, Pause, Music2 } from "lucide-react";
import { motion } from "motion/react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-4 py-12"
    >
      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        {isPlaying ? (
          <Pause className="text-white" size={24} />
        ) : (
          <Play className="text-white" size={24} />
        )}
        <span className="text-white" style={{ fontFamily: 'var(--font-display)' }}>
          {isPlaying ? "Pause Our Song" : "▶ Play Our Song ❤️"}
        </span>
        <Music2 className="text-white" size={20} />
      </motion.button>

      {isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-pink-400"
        >
          <Music2 size={16} className="animate-pulse" />
          <span className="text-sm" style={{ fontFamily: 'var(--font-body)' }}>Now Playing...</span>
        </motion.div>
      )}
    </motion.div>
  );
}
