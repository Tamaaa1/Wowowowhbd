import { useState, useEffect } from 'react';
import { GardenFlowers } from './components/GardenFlowers';
import { FallingPetals } from './components/FallingPetals';
import { DrawingFlower } from './components/DrawingFlower';
import { BirthdayCard } from './components/BirthdayCard';
import { CakePage } from './components/CakePage';
import { motion } from 'motion/react';

export default function App() {
  const [showCard, setShowCard] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'cake'>('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (currentPage === 'cake') {
    return <CakePage onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#F5F5DC] via-[#E8DCC4] to-[#D4C5B0]">
      {/* Falling Petals */}
      <FallingPetals />
      
      {/* Garden Background */}
      <div className="absolute inset-0">
        <GardenFlowers />
      </div>

      {/* Drawing Flowers - responsive positioning */}
      <div className="absolute top-10 left-4 md:left-10">
        <DrawingFlower delay={0} />
      </div>
      <div className="absolute top-20 right-4 md:right-20">
        <DrawingFlower delay={1.5} />
      </div>
      <div className="absolute bottom-32 left-4 md:left-32 hidden sm:block">
        <DrawingFlower delay={3} />
      </div>
      <div className="absolute bottom-20 right-4 md:right-40 hidden sm:block">
        <DrawingFlower delay={2.5} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: showCard ? 1 : 0, scale: showCard ? 1 : 0.8 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <BirthdayCard onCakeClick={() => setCurrentPage('cake')} />
        </motion.div>
      </div>

      {/* Decorative Sparkles */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-[#9CAF88] text-2xl md:text-4xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        ✨
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/4 text-[#B5C99A] text-xl md:text-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 0.5,
        }}
      >
        ✨
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/3 text-[#8FA378] text-2xl md:text-4xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1,
        }}
      >
        ✨
      </motion.div>
    </div>
  );
}