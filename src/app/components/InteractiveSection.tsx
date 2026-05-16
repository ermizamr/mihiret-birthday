import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Heart, Sparkles } from "lucide-react";

export default function InteractiveSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showMessage, setShowMessage] = useState(false);
  const [currentReason, setCurrentReason] = useState(0);

  const loveReasons = [
    "Your smile lights up my entire world 🌟",
    "The way you laugh makes everything better 😊",
    "Your kindness touches everyone around you 💝",
    "You understand me like no one else does 🫶",
    "Your strength inspires me every day 💪",
    "The way you care for others is beautiful 🌸",
    "Your dreams and ambitions amaze me ✨",
    "You make ordinary moments extraordinary 🎨",
    "Your love makes me a better person 💖",
    "Simply because you're you, and that's perfect 🌹",
  ];

  const generateNewReason = () => {
    setCurrentReason((prev) => (prev + 1) % loveReasons.length);
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-rose-50 via-pink-100 to-rose-50">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent"
        >
          Feel My Love 💕
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-200/50 hover:shadow-2xl transition-shadow">
              <div className="text-center">
                <Sparkles className="mx-auto mb-4 text-pink-500" size={48} />
                <h3 className="text-2xl mb-4 text-pink-700">Surprise Message</h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowMessage(!showMessage)}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  {showMessage ? "Hide Message 💌" : "Click to Feel My Love 💌"}
                </motion.button>

                {showMessage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="mt-6 p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl border-2 border-pink-300"
                  >
                    <p className="text-lg text-pink-800 leading-relaxed">
                      Every heartbeat whispers your name, Mihiru. You are my
                      yesterday, my today, and all my tomorrows. I love you
                      more than words could ever express. 💖✨
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-200/50 hover:shadow-2xl transition-shadow">
              <div className="text-center">
                <Heart className="mx-auto mb-4 text-rose-500" size={48} fill="currentColor" />
                <h3 className="text-2xl mb-4 text-pink-700">Why I Love You</h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={generateNewReason}
                  className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Generate Reason ❤️
                </motion.button>

                <motion.div
                  key={currentReason}
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6 p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border-2 border-rose-300 min-h-[100px] flex items-center justify-center"
                >
                  <p className="text-lg text-rose-800">
                    {loveReasons[currentReason]}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-200/50 text-center"
        >
          <h3 className="text-2xl mb-6 text-pink-700">Our Love Journey Timeline 📍</h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              { label: "The Day We Met", desc: "When my world changed forever" },
              { label: "Our First Date", desc: "The beginning of something beautiful" },
              { label: "Falling Deeper", desc: "Every moment with you is magic" },
              { label: "Today & Forever", desc: "Loving you more each day" },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-4 bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-xl"
              >
                <div className="w-3 h-3 bg-pink-500 rounded-full flex-shrink-0" />
                <div className="text-left flex-1">
                  <div className="text-pink-700">{milestone.label}</div>
                  <div className="text-sm text-pink-500">{milestone.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
