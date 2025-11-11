import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  emoji: string;
}

export function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const petalEmojis = ['🌸', '🌺', '🌼', '🌷', '🥀', '💐'];
    const initialPetals: Petal[] = [];

    for (let i = 0; i < 20; i++) {
      initialPetals.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4,
        emoji: petalEmojis[Math.floor(Math.random() * petalEmojis.length)],
      });
    }

    setPetals(initialPetals);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute text-2xl"
          style={{
            left: `${petal.left}%`,
            top: '-10%',
          }}
          initial={{ y: -50, opacity: 0, rotate: 0 }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, 30, -30, 0, 20, -20, 0],
            opacity: [0, 1, 1, 1, 0.5, 0],
            rotate: [0, 180, 360, 540, 720],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {petal.emoji}
        </motion.div>
      ))}
    </div>
  );
}
