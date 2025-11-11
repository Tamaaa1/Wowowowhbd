import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DrawingCake } from './DrawingCake';
import { PolaroidCard } from './PolaroidCard';
import { ArrowLeft } from 'lucide-react';

interface CakePageProps {
  onBack: () => void;
}

export function CakePage({ onBack }: CakePageProps) {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showPolaroid, setShowPolaroid] = useState(false);

  const handleCandlesBlown = () => {
    setCandlesBlown(true);
    setTimeout(() => {
      setShowPolaroid(true);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#F5F5DC] via-[#E8DCC4] to-[#D4C5B0]">
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="absolute top-4 left-4 md:top-8 md:left-8 z-50 bg-white/80 backdrop-blur-md p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-[#8FA378]" />
      </motion.button>

      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl md:text-6xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            {['🎂', '🎉', '🎊', '🎈'][i % 4]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
        <AnimatePresence mode="wait">
          {!showPolaroid ? (
            <motion.div
              key="cake"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-col items-center gap-6 md:gap-8"
            >
              {/* Instruction Text */}
              {!candlesBlown && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4 }}
                  className="text-center space-y-2 md:space-y-3"
                >
                  <h2 className="text-2xl md:text-4xl text-[#8FA378]" style={{ fontFamily: 'cursive' }}>
                    Tiup Lilinnya! 🎂
                  </h2>
                  <p className="text-base md:text-xl text-[#6B7F5F]" style={{ fontFamily: 'serif' }}>
                    Klik atau sentuh lilin untuk meniupnya
                  </p>
                </motion.div>
              )}

              {/* Drawing Cake Component */}
              <DrawingCake onCandlesBlown={handleCandlesBlown} candlesBlown={candlesBlown} />

              {candlesBlown && !showPolaroid && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-2 md:space-y-3"
                >
                  <p className="text-xl md:text-3xl text-[#8FA378]" style={{ fontFamily: 'cursive' }}>
                    Yay! 🎉
                  </p>
                  <p className="text-base md:text-lg text-[#6B7F5F]">
                    Semoga semua harapanmu terkabul!
                  </p>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="polaroid"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <PolaroidCard />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
