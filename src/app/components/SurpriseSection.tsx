import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Lock, Unlock } from "lucide-react";

export default function SurpriseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isUnlocked, setIsUnlocked] = useState(false);

  const unlockSurprise = () => {
    setIsUnlocked(true);
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300 text-4xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent"
        >
          A Special Secret 🎁
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {!isUnlocked ? (
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-2 border-pink-300 text-center">
              <motion.div
                animate={{
                  rotate: [0, -10, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <Lock className="mx-auto mb-6 text-pink-500" size={64} />
              </motion.div>

              <h3 className="text-3xl mb-4 text-pink-700">
                Unlock My Heart's Secret
              </h3>
              <p className="text-lg text-pink-600 mb-8">
                Click below to reveal a message that holds the deepest truth of my heart...
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={unlockSurprise}
                className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all text-xl"
              >
                Unlock Secret 🔓
              </motion.button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-pink-100 rounded-3xl p-12 shadow-2xl border-4 border-pink-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-rose-400/20" />

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <Unlock className="mx-auto mb-6 text-pink-600" size={64} />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-3xl md:text-4xl mb-6 text-pink-700 text-center"
                  >
                    My Eternal Promise
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-6 text-center"
                  >
                    <p className="text-2xl text-rose-800 leading-relaxed italic">
                      "Mihiret, you are my forever."
                    </p>

                    <p className="text-xl text-pink-700 leading-relaxed">
                      I want to spend every sunrise and sunset with you.
                      Every laugh, every tear, every moment—
                      I want to share them all with you.
                    </p>

                    <p className="text-xl text-pink-700 leading-relaxed">
                      You are not just my love, you are my home,
                      my peace, my everything.
                    </p>

                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="text-3xl mt-8"
                    >
                      💍 I want to spend forever with you 💍
                    </motion.div>

                    <p className="text-2xl text-rose-700 mt-8">
                      Today, tomorrow, and always. ❤️
                    </p>
                  </motion.div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-400/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-rose-400/30 rounded-full blur-3xl" />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
