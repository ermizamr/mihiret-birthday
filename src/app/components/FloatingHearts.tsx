import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface HeartParticle {
  id: number;
  x: number;
  y: number;
}

interface FallingHeart {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [fallingHearts, setFallingHearts] = useState<FallingHeart[]>([]);

  useEffect(() => {
    let heartId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      if (Math.random() > 0.85) {
        const newHeart: HeartParticle = {
          id: heartId++,
          x: e.clientX,
          y: e.clientY,
        };

        setHearts((prev) => [...prev, newHeart]);

        setTimeout(() => {
          setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
        }, 2000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const colors = ["#ffc2d1", "#ffb3c6", "#ff9dc2", "#ff8ebf", "#ffa8c4", "#ec4899", "#f43f5e"];
    let fallingId = 0;

    const initialHearts: FallingHeart[] = Array.from({ length: 15 }, () => ({
      id: fallingId++,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 8 + 10,
      size: Math.random() * 12 + 8,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setFallingHearts(initialHearts);

    const interval = setInterval(() => {
      const newHeart: FallingHeart = {
        id: fallingId++,
        x: Math.random() * 100,
        delay: 0,
        duration: Math.random() * 8 + 10,
        size: Math.random() * 12 + 8,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setFallingHearts((prev) => [...prev.slice(-14), newHeart]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: cursorPosition.x - 8,
          top: cursorPosition.y - 8,
          transition: "left 0.1s, top 0.1s",
        }}
      >
        <div className="w-4 h-4 bg-pink-400 rounded-full opacity-70" />
      </div>

      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {fallingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute"
            style={{
              left: `${heart.x}%`,
            }}
            initial={{
              y: -50,
              opacity: 0,
              rotate: 0,
            }}
            animate={{
              y: window.innerHeight + 50,
              opacity: [0, 0.7, 0.7, 0],
              rotate: 360,
              x: [0, 30, -20, 10, 0],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Heart
              size={heart.size}
              fill={heart.color}
              color={heart.color}
              style={{ filter: "blur(0.5px)" }}
            />
          </motion.div>
        ))}
      </div>

      <div className="fixed inset-0 pointer-events-none z-40">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{
              x: heart.x,
              y: heart.y,
              scale: 0,
              opacity: 1,
            }}
            animate={{
              y: heart.y - 100,
              scale: [0, 1, 0.8],
              opacity: 0,
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            className="absolute"
          >
            <Heart className="text-pink-400" size={20} fill="currentColor" />
          </motion.div>
        ))}
      </div>
    </>
  );
}
