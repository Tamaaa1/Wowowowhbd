import { motion } from 'motion/react';

export function GardenFlowers() {
  const flowers = [
    { emoji: '🌸', left: '10%', bottom: '10%', delay: 0, size: '3rem' },
    { emoji: '🌺', left: '20%', bottom: '15%', delay: 0.5, size: '2.5rem' },
    { emoji: '🌼', left: '15%', bottom: '25%', delay: 1, size: '2rem' },
    { emoji: '🌷', left: '5%', bottom: '35%', delay: 1.5, size: '2.8rem' },
    { emoji: '🌻', left: '25%', bottom: '5%', delay: 2, size: '3.5rem' },
    { emoji: '🌸', right: '10%', bottom: '12%', delay: 0.3, size: '2.7rem' },
    { emoji: '🌺', right: '20%', bottom: '20%', delay: 0.8, size: '3rem' },
    { emoji: '🌼', right: '15%', bottom: '8%', delay: 1.3, size: '2.3rem' },
    { emoji: '🌷', right: '5%', bottom: '30%', delay: 1.8, size: '3.2rem' },
    { emoji: '🌻', right: '25%', bottom: '15%', delay: 2.3, size: '2.5rem' },
    { emoji: '🌸', left: '35%', bottom: '10%', delay: 0.7, size: '2.8rem' },
    { emoji: '🌺', left: '45%', bottom: '18%', delay: 1.2, size: '3.3rem' },
    { emoji: '🌼', right: '35%', bottom: '12%', delay: 1.7, size: '2.6rem' },
    { emoji: '🌷', right: '45%', bottom: '22%', delay: 2.2, size: '3rem' },
    { emoji: '🌻', left: '50%', bottom: '5%', delay: 0.4, size: '3.8rem' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {flowers.map((flower, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: flower.left,
            right: flower.right,
            bottom: flower.bottom,
            fontSize: flower.size,
          }}
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ 
            scale: 1, 
            rotate: 0, 
            opacity: 1,
          }}
          transition={{
            delay: flower.delay,
            duration: 1,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <motion.div
            animate={{
              rotate: [-3, 3, -3],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3 + (index % 3),
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: flower.delay,
            }}
          >
            {flower.emoji}
          </motion.div>
        </motion.div>
      ))}

      {/* Grass and leaves */}
      <div className="absolute bottom-0 left-0 right-0 text-[#9CAF88] text-5xl flex justify-around pb-2">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i * 0.1,
            }}
          >
            🌿
          </motion.span>
        ))}
      </div>
    </div>
  );
}
