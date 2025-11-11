import { motion } from 'motion/react';

interface DrawingFlowerProps {
  delay?: number;
}

export function DrawingFlower({ delay = 0 }: DrawingFlowerProps) {
  const drawDuration = 3;

  return (
    <svg
      width="120"
      height="150"
      viewBox="0 0 120 150"
      className="drop-shadow-lg"
    >
      {/* Stem */}
      <motion.path
        d="M 60 150 Q 55 100 60 50"
        stroke="#8FA378"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: drawDuration * 0.3,
          delay: delay,
          ease: 'easeInOut',
        }}
      />

      {/* Leaf 1 */}
      <motion.path
        d="M 60 100 Q 40 95 35 85 Q 40 95 60 100"
        fill="#9CAF88"
        stroke="#8FA378"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: drawDuration * 0.2,
          delay: delay + drawDuration * 0.3,
          ease: 'easeInOut',
        }}
      />

      {/* Leaf 2 */}
      <motion.path
        d="M 60 80 Q 80 75 85 65 Q 80 75 60 80"
        fill="#9CAF88"
        stroke="#8FA378"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: drawDuration * 0.2,
          delay: delay + drawDuration * 0.4,
          ease: 'easeInOut',
        }}
      />

      {/* Flower Center */}
      <motion.circle
        cx="60"
        cy="35"
        r="8"
        fill="#F4D03F"
        stroke="#E8B923"
        strokeWidth="2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: drawDuration * 0.15,
          delay: delay + drawDuration * 0.5,
          type: 'spring',
          stiffness: 200,
        }}
      />

      {/* Petals */}
      {[0, 60, 120, 180, 240, 300].map((angle, index) => {
        const radian = (angle * Math.PI) / 180;
        const petalX = 60 + Math.cos(radian) * 15;
        const petalY = 35 + Math.sin(radian) * 15;

        return (
          <motion.ellipse
            key={angle}
            cx={petalX}
            cy={petalY}
            rx="8"
            ry="12"
            fill="#FFB6C1"
            stroke="#FF69B4"
            strokeWidth="1.5"
            transform={`rotate(${angle} ${petalX} ${petalY})`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: drawDuration * 0.1,
              delay: delay + drawDuration * 0.55 + index * 0.1,
              type: 'spring',
              stiffness: 300,
            }}
          />
        );
      })}

      {/* Gentle swaying animation after drawing */}
      <motion.g
        animate={{
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: delay + drawDuration,
        }}
        style={{ transformOrigin: '60px 150px' }}
      >
        <rect width="0" height="0" />
      </motion.g>
    </svg>
  );
}
