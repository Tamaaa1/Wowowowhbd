import { useState, useEffect, useRef } from "react";
import { GardenFlowers } from "./components/GardenFlowers";
import { FallingPetals } from "./components/FallingPetals";
import { DrawingFlower } from "./components/DrawingFlower";
import { BirthdayCard } from "./components/BirthdayCard";
import { CakePage } from "./components/CakePage";
import { motion } from "motion/react";

export default function App() {
  const [showCard, setShowCard] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMusicNotification, setShowMusicNotification] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      console.log("❌ Audio ref not found");
      return;
    }

    console.log("🎵 Audio element found, src:", audio.src);
    audio.volume = 0.25;

    // Restore music position from localStorage if available
    const savedTime = localStorage.getItem("musicCurrentTime");
    if (savedTime) {
      audio.currentTime = parseFloat(savedTime);
      localStorage.removeItem("musicCurrentTime");
      console.log("⏩ Restored music position:", savedTime);
    }

    const playAudio = () => {
      console.log("▶️ Attempting to play music...");
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          console.log("✅ Music playing successfully!");
        })
        .catch((error) => {
          console.log("⚠️ Autoplay blocked:", error.message);
          console.log("👆 Click anywhere to start music");
          setShowMusicNotification(true);
          // Autoplay blocked, try on user interaction
          const handleInteraction = () => {
            console.log("🖱️ User interaction detected, playing music...");
            setShowMusicNotification(false);
            audio
              .play()
              .then(() => {
                setIsPlaying(true);
                console.log("✅ Music playing after interaction!");
              })
              .catch((err) => {
                console.error("❌ Failed to play music:", err);
              });
            document.removeEventListener("click", handleInteraction);
            document.removeEventListener("touchstart", handleInteraction);
            document.removeEventListener("keydown", handleInteraction);
          };

          document.addEventListener("click", handleInteraction, { once: true });
          document.addEventListener("touchstart", handleInteraction, {
            once: true,
          });
          document.addEventListener("keydown", handleInteraction, {
            once: true,
          });
        });
    };

    // Check if audio can load
    audio.addEventListener("loadeddata", () => {
      console.log("✅ Audio file loaded successfully");
    });

    audio.addEventListener("error", (e) => {
      console.error("❌ Audio loading error:", e);
      console.error("Audio src:", audio.src);
    });

    playAudio();

    // Save music position periodically
    const saveInterval = setInterval(() => {
      if (audio.currentTime) {
        localStorage.setItem("musicCurrentTime", audio.currentTime.toString());
      }
    }, 1000);

    return () => {
      clearInterval(saveInterval);
      // Save final position before unmount
      if (audio.currentTime) {
        localStorage.setItem("musicCurrentTime", audio.currentTime.toString());
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    }
  };

  return (
    <>
      {/* Audio Element - Always rendered, never unmounted */}
      <audio ref={audioRef} src="/music/Sempurna.mp3" loop playsInline />
      <MusicToggleButton isPlaying={isPlaying} onClick={toggleMusic} />

      {/* Music Notification */}
      {showMusicNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-24 right-6 z-50 bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 py-4 rounded-2xl shadow-2xl max-w-xs"
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.play().then(() => {
                setIsPlaying(true);
                setShowMusicNotification(false);
              });
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <div className="flex items-center gap-3">
            <div className="text-2xl">🎵</div>
            <div>
              <p className="font-semibold text-sm">Klik untuk putar musik</p>
              <p className="text-xs opacity-90">Tap anywhere to play</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Conditional Page Rendering */}
      {currentPage === "cake" ? (
        <CakePage onBack={() => setCurrentPage("home")} />
      ) : (
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
              <BirthdayCard onCakeClick={() => setCurrentPage("cake")} />
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
              repeatType: "reverse",
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
              repeatType: "reverse",
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
              repeatType: "reverse",
              delay: 1,
            }}
          >
            ✨
          </motion.div>
        </div>
      )}
    </>
  );
}

// Music Toggle Button Component
function MusicToggleButton({
  isPlaying,
  onClick,
}: {
  isPlaying: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-pink-400 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
      title={isPlaying ? "Pause Music" : "Play Music"}
    >
      <motion.div
        animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0 }}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
}
