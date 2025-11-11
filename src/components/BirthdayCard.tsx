import { motion } from 'motion/react';
import { Heart, Sparkles, Cake } from 'lucide-react';

interface BirthdayCardProps {
  onCakeClick: () => void;
}

export function BirthdayCard({ onCakeClick }: BirthdayCardProps) {
  return (
    <motion.div
      className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-12 max-w-2xl border-4 border-[#B5C99A] mx-4"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Decorative Corners */}
      <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-12 h-12 md:w-16 md:h-16 bg-[#9CAF88] rounded-full flex items-center justify-center">
        <Heart className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
      </div>
      <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-12 h-12 md:w-16 md:h-16 bg-[#B5C99A] rounded-full flex items-center justify-center">
        <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
      </div>
      <motion.button
        onClick={onCakeClick}
        className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-[#8FA378] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#7A8F68] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Cake className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </motion.button>

      {/* Content */}
      <div className="text-center space-y-4 md:space-y-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-6xl text-[#8FA378] mb-2" style={{ fontFamily: 'cursive' }}>
            Selamat Ulang Tahun!
          </h1>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 200 }}
          className="flex justify-center gap-2 text-3xl md:text-5xl"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          >
            🌸
          </motion.span>
          <motion.span
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2, delay: 0.2 }}
          >
            🌺
          </motion.span>
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2, delay: 0.4 }}
          >
            🌼
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-base md:text-xl text-[#6B7F5F] px-4 md:px-8"
          style={{ fontFamily: 'serif' }}
        >
          Semoga hari spesialmu dipenuhi dengan kebahagiaan, cinta, dan bunga-bunga indah yang selalu mekar di taman kehidupanmu 🌷
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="pt-4"
        >
          <motion.div
            className="inline-block px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-[#9CAF88] to-[#B5C99A] rounded-full text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p style={{ fontFamily: 'cursive' }}>Dengan Cinta ❤️</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Flower Pattern */}
      <div className="absolute bottom-4 left-4 opacity-20 text-[#9CAF88] text-4xl md:text-6xl">
        🌿
      </div>
      <div className="absolute top-4 right-4 opacity-20 text-[#B5C99A] text-4xl md:text-6xl">
        🌿
      </div>
    </motion.div>
  );
}