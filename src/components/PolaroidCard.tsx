import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export function PolaroidCard() {
  return (
    <div className="relative">
      {/* Floating hearts and sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-xl md:text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [0, -50],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        >
          {i % 2 === 0 ? '💕' : '✨'}
        </motion.div>
      ))}

      {/* Main Polaroid */}
      <motion.div
        className="bg-white p-3 md:p-4 shadow-2xl max-w-sm md:max-w-md mx-4"
        style={{
          transform: 'rotate(-2deg)',
        }}
        whileHover={{ 
          rotate: 0,
          scale: 1.05,
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Photo Area */}
        <div className="bg-gradient-to-br from-[#F5F5DC] to-[#E8DCC4] aspect-square relative overflow-hidden">
          {/* Decorative content in photo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4 md:space-y-6 p-4 md:p-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className="text-6xl md:text-8xl"
              >
                🎂
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-4xl text-[#8FA378]"
                style={{ fontFamily: 'cursive' }}
              >
                Happy Birthday!
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex justify-center gap-2 md:gap-3 text-3xl md:text-4xl"
              >
                {['🌸', '🌺', '🌼', '🌷'].map((flower, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      rotate: [0, 10, -10, 0],
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    {flower}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex justify-center gap-2 md:gap-3"
              >
                <div className="bg-[#9CAF88] rounded-full p-2 md:p-3">
                  <Heart className="w-4 h-4 md:w-5 md:h-5 text-white fill-white" />
                </div>
                <div className="bg-[#B5C99A] rounded-full p-2 md:p-3">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white fill-white" />
                </div>
                <div className="bg-[#8FA378] rounded-full p-2 md:p-3">
                  <Heart className="w-4 h-4 md:w-5 md:h-5 text-white fill-white" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-2 left-2 text-xl md:text-2xl opacity-30">🌿</div>
          <div className="absolute top-2 right-2 text-xl md:text-2xl opacity-30">🌿</div>
          <div className="absolute bottom-2 left-2 text-xl md:text-2xl opacity-30">🌿</div>
          <div className="absolute bottom-2 right-2 text-xl md:text-2xl opacity-30">🌿</div>
        </div>

        {/* Caption Area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="pt-3 md:pt-4 pb-1 md:pb-2 px-2"
        >
          <p
            className="text-center text-[#6B7F5F] text-sm md:text-base"
            style={{ fontFamily: 'cursive' }}
          >
            Kenangan indah di hari spesialmu ✨
          </p>
          <p
            className="text-center text-[#8FA378] text-xs md:text-sm mt-1 md:mt-2"
            style={{ fontFamily: 'serif' }}
          >
            Semoga selalu bahagia! 💕
          </p>
        </motion.div>
      </motion.div>

      {/* Additional scattered polaroids in background */}
      <motion.div
        className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-20 h-24 md:w-32 md:h-40 bg-white shadow-lg -z-10"
        style={{ rotate: '15deg' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="w-full h-3/4 bg-gradient-to-br from-[#B5C99A] to-[#9CAF88]" />
      </motion.div>

      <motion.div
        className="absolute -top-8 -right-8 md:-top-12 md:-right-12 w-20 h-24 md:w-32 md:h-40 bg-white shadow-lg -z-10"
        style={{ rotate: '-12deg' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="w-full h-3/4 bg-gradient-to-br from-[#FFB6C1] to-[#FFC0CB]" />
      </motion.div>
    </div>
  );
}
