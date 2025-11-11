import { motion } from 'motion/react';
import { useState } from 'react';

interface DrawingCakeProps {
  onCandlesBlown: () => void;
  candlesBlown: boolean;
}

export function DrawingCake({ onCandlesBlown, candlesBlown }: DrawingCakeProps) {
  const [candle1Blown, setCandle1Blown] = useState(false);
  const [candle2Blown, setCandle2Blown] = useState(false);
  const [candle3Blown, setCandle3Blown] = useState(false);

  const handleCandleClick = (candleNum: number) => {
    if (candleNum === 1) setCandle1Blown(true);
    if (candleNum === 2) setCandle2Blown(true);
    if (candleNum === 3) setCandle3Blown(true);

    if (
      (candleNum === 1 && candle2Blown && candle3Blown) ||
      (candleNum === 2 && candle1Blown && candle3Blown) ||
      (candleNum === 3 && candle1Blown && candle2Blown)
    ) {
      setTimeout(() => onCandlesBlown(), 500);
    }
  };

  const drawDuration = 3;

  return (
    <div className="flex justify-center items-center">
      <svg
        width="280"
        height="320"
        viewBox="0 0 280 320"
        className="drop-shadow-2xl w-full max-w-[280px] md:max-w-none"
      >
        {/* Cake Base - Bottom Layer */}
        <motion.rect
          x="40"
          y="240"
          width="200"
          height="60"
          fill="#FFB6C1"
          stroke="#FF69B4"
          strokeWidth="3"
          rx="5"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: drawDuration * 0.2,
            delay: 0,
            ease: 'easeOut',
          }}
          style={{ transformOrigin: '140px 270px' }}
        />

        {/* Decorative dots on bottom layer */}
        {[60, 100, 140, 180, 220].map((x, i) => (
          <motion.circle
            key={`dot-bottom-${i}`}
            cx={x}
            cy="270"
            r="4"
            fill="#FF1493"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: drawDuration * 0.2 + i * 0.1,
              type: 'spring',
              stiffness: 300,
            }}
          />
        ))}

        {/* Cake Middle Layer */}
        <motion.rect
          x="60"
          y="180"
          width="160"
          height="60"
          fill="#FFC0CB"
          stroke="#FF69B4"
          strokeWidth="3"
          rx="5"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: drawDuration * 0.2,
            delay: drawDuration * 0.3,
            ease: 'easeOut',
          }}
          style={{ transformOrigin: '140px 210px' }}
        />

        {/* Decorative wavy line on middle layer */}
        <motion.path
          d="M 70 210 Q 90 200 110 210 T 150 210 T 190 210 T 210 210"
          stroke="#FF1493"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: drawDuration * 0.15,
            delay: drawDuration * 0.5,
            ease: 'easeInOut',
          }}
        />

        {/* Cake Top Layer */}
        <motion.rect
          x="80"
          y="120"
          width="120"
          height="60"
          fill="#FFD1DC"
          stroke="#FF69B4"
          strokeWidth="3"
          rx="5"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: drawDuration * 0.2,
            delay: drawDuration * 0.6,
            ease: 'easeOut',
          }}
          style={{ transformOrigin: '140px 150px' }}
        />

        {/* Frosting drips */}
        {[90, 130, 170].map((x, i) => (
          <motion.path
            key={`drip-${i}`}
            d={`M ${x} 120 Q ${x + 5} 130 ${x} 135 L ${x - 5} 135 Q ${x} 130 ${x - 5} 120 Z`}
            fill="#FFB6C1"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              delay: drawDuration * 0.8 + i * 0.1,
              duration: 0.3,
              ease: 'easeOut',
            }}
            style={{ transformOrigin: `${x}px 120px` }}
          />
        ))}

        {/* Candle 1 */}
        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: drawDuration * 0.15,
            delay: drawDuration * 0.85,
            ease: 'easeOut',
          }}
          style={{ transformOrigin: '100px 120px' }}
        >
          <rect
            x="95"
            y="80"
            width="10"
            height="40"
            fill="#9CAF88"
            stroke="#8FA378"
            strokeWidth="2"
            rx="2"
          />
          {!candle1Blown && (
            <motion.g
              className="cursor-pointer"
              onClick={() => handleCandleClick(1)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <motion.ellipse
                cx="100"
                cy="75"
                rx="8"
                ry="12"
                fill="#FFD700"
                animate={{
                  opacity: [1, 0.6, 1],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              <motion.ellipse
                cx="100"
                cy="73"
                rx="6"
                ry="10"
                fill="#FFA500"
                animate={{
                  opacity: [1, 0.7, 1],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 0.1,
                }}
              />
            </motion.g>
          )}
        </motion.g>

        {/* Candle 2 */}
        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: drawDuration * 0.15,
            delay: drawDuration * 0.9,
            ease: 'easeOut',
          }}
          style={{ transformOrigin: '140px 120px' }}
        >
          <rect
            x="135"
            y="80"
            width="10"
            height="40"
            fill="#B5C99A"
            stroke="#9CAF88"
            strokeWidth="2"
            rx="2"
          />
          {!candle2Blown && (
            <motion.g
              className="cursor-pointer"
              onClick={() => handleCandleClick(2)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <motion.ellipse
                cx="140"
                cy="75"
                rx="8"
                ry="12"
                fill="#FFD700"
                animate={{
                  opacity: [1, 0.6, 1],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 0.2,
                }}
              />
              <motion.ellipse
                cx="140"
                cy="73"
                rx="6"
                ry="10"
                fill="#FFA500"
                animate={{
                  opacity: [1, 0.7, 1],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 0.3,
                }}
              />
            </motion.g>
          )}
        </motion.g>

        {/* Candle 3 */}
        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: drawDuration * 0.15,
            delay: drawDuration * 0.95,
            ease: 'easeOut',
          }}
          style={{ transformOrigin: '180px 120px' }}
        >
          <rect
            x="175"
            y="80"
            width="10"
            height="40"
            fill="#9CAF88"
            stroke="#8FA378"
            strokeWidth="2"
            rx="2"
          />
          {!candle3Blown && (
            <motion.g
              className="cursor-pointer"
              onClick={() => handleCandleClick(3)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <motion.ellipse
                cx="180"
                cy="75"
                rx="8"
                ry="12"
                fill="#FFD700"
                animate={{
                  opacity: [1, 0.6, 1],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 0.4,
                }}
              />
              <motion.ellipse
                cx="180"
                cy="73"
                rx="6"
                ry="10"
                fill="#FFA500"
                animate={{
                  opacity: [1, 0.7, 1],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 0.5,
                }}
              />
            </motion.g>
          )}
        </motion.g>

        {/* Smoke effects when candles are blown */}
        {candle1Blown && (
          <motion.g>
            <motion.circle
              cx="100"
              cy="75"
              r="3"
              fill="#A9A9A9"
              initial={{ opacity: 0.8, y: 0 }}
              animate={{ opacity: 0, y: -30 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </motion.g>
        )}
        {candle2Blown && (
          <motion.g>
            <motion.circle
              cx="140"
              cy="75"
              r="3"
              fill="#A9A9A9"
              initial={{ opacity: 0.8, y: 0 }}
              animate={{ opacity: 0, y: -30 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </motion.g>
        )}
        {candle3Blown && (
          <motion.g>
            <motion.circle
              cx="180"
              cy="75"
              r="3"
              fill="#A9A9A9"
              initial={{ opacity: 0.8, y: 0 }}
              animate={{ opacity: 0, y: -30 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </motion.g>
        )}
      </svg>
    </div>
  );
}
