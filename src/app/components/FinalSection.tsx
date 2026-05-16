import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Heart, Sparkles } from "lucide-react";

export default function FinalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-rose-100 via-pink-100 to-rose-50 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative w-32 h-32 mx-auto mb-8"
          >
            <Sparkles className="absolute inset-0 m-auto text-pink-400" size={64} />
            <Heart className="absolute inset-0 m-auto text-rose-500" size={48} fill="currentColor" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-2 border-pink-300"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl mb-8 bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 bg-clip-text text-transparent"
          >
            Happy Birthday, Mihiru
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="space-y-6 text-lg md:text-xl text-pink-800"
          >
            <p className="leading-relaxed">
              May this year bring you all the happiness your heart can hold.
              May your dreams come true, your smile never fade,
              and your days be filled with endless love and joy.
            </p>

            <p className="leading-relaxed">
              I promise to love you more deeply with every passing day,
              to stand by your side through every season of life,
              and to cherish you for all eternity.
            </p>

            <p className="text-2xl text-rose-700 italic mt-8">
              You are my greatest blessing, my deepest love, my forever.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1, type: "spring" }}
            className="mt-12 pt-8 border-t-2 border-pink-200"
          >
            <p className="text-3xl md:text-4xl text-pink-600 mb-4">
              Forever yours ❤️
            </p>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="flex justify-center gap-2 text-4xl"
            >
              <span>💖</span>
              <span>✨</span>
              <span>💕</span>
              <span>🌹</span>
              <span>💖</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.3 }}
          className="mt-8 text-pink-600 text-sm"
        >
          Made with endless love, just for you 💝
        </motion.p>
      </div>
    </section>
  );
}
