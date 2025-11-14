import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function PolaroidCard() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const photos = [
    "/foto/1.jpg",
    "/foto/2.jpg",
    "/foto/3.jpg",
    "/foto/4.jpg",
    "/foto/5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="relative w-full flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Floating hearts and sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-lg sm:text-xl md:text-2xl"
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
          {i % 2 === 0 ? "💕" : "✨"}
        </motion.div>
      ))}

      {/* Main Polaroid */}
      <motion.div
        className="bg-white p-3 sm:p-4 md:p-5 shadow-2xl w-full max-w-[280px] sm:max-w-sm md:max-w-md"
        style={{
          transform: "rotate(-2deg)",
        }}
        whileHover={{
          rotate: 0,
          scale: 1.05,
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Photo Area with Carousel */}
        <div className="bg-gradient-to-br from-[#F5F5DC] to-[#E8DCC4] aspect-square relative overflow-hidden">
          {/* Carousel Photos */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentPhotoIndex}
              src={photos[currentPhotoIndex]}
              alt={`Birthday Memory ${currentPhotoIndex + 1}`}
              className="w-full h-full object-cover absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-black bg-opacity-20" />

          {/* Carousel Indicators */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
            {photos.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentPhotoIndex
                    ? "bg-white w-4 sm:w-6"
                    : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Caption Area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="pt-3 sm:pt-4 md:pt-5 pb-1 md:pb-2 px-2"
        >
          <p
            className="text-center text-[#6B7F5F] text-sm sm:text-base md:text-lg font-semibold"
            style={{ fontFamily: "cursive" }}
          >
            HEHEHEHEHE
          </p>
          <p
            className="text-center text-[#8FA378] text-xs sm:text-sm md:text-base mt-1 md:mt-2"
            style={{ fontFamily: "serif" }}
          >
            Sekali lagi Happy Birthday yaaa!
          </p>
        </motion.div>
      </motion.div>

      {/* Additional scattered polaroids in background - empty/decorative */}
      <motion.div
        className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-20 h-24 sm:w-24 sm:h-32 md:w-32 md:h-40 bg-white shadow-lg -z-10 p-1.5 md:p-2"
        style={{ rotate: "15deg" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="w-full h-3/4 bg-gradient-to-br from-[#B5C99A] to-[#9CAF88]" />
      </motion.div>

      <motion.div
        className="absolute -top-8 -right-8 md:-top-12 md:-right-12 w-20 h-24 sm:w-24 sm:h-32 md:w-32 md:h-40 bg-white shadow-lg -z-10 p-1.5 md:p-2"
        style={{ rotate: "-12deg" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="w-full h-3/4 bg-gradient-to-br from-[#FFB6C1] to-[#FFC0CB]" />
      </motion.div>
    </div>
  );
}
