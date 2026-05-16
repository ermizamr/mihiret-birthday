import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function LoveLetterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const letter = [
    "My Dearest Mihiru,",
    "",
    "Words feel inadequate when I try to express how deeply I love you. You are the light that brightens my darkest days, the melody that fills my silence, and the warmth that makes every moment beautiful.",
    "",
    "Every day with you is a gift I treasure. Your smile has the power to heal my soul, your laughter is the sweetest music I've ever heard, and your love is the greatest blessing I could ever receive.",
    "",
    "I am endlessly grateful for having you in my life. You've shown me what true love means, what it feels like to be completely understood, and what it means to have a partner who makes life infinitely better just by being there.",
    "",
    "You are incredibly special—not just to me, but to everyone whose life you touch. Your kindness, your strength, your beautiful heart... they make the world a better place.",
    "",
    "On this special day, I wish you a life filled with endless happiness, boundless love, and dreams that come true. May every year bring you more joy than the last, and may you always know how deeply you are loved.",
    "",
    "I want to spend forever with you, building memories, sharing dreams, and loving you more with each passing day.",
    "",
    "Happy Birthday, my love. You mean everything to me.",
    "",
    "Forever yours,",
    "Your Love ❤️"
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full"
      >
        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-200/50">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-3 rounded-full shadow-lg">
            <span className="text-lg">A Letter to My Love 💌</span>
          </div>

          <div className="mt-8 space-y-4 text-rose-900">
            {letter.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${
                  paragraph === "My Dearest Mihiru," || paragraph === "Forever yours," || paragraph === "Your Love ❤️"
                    ? "italic text-pink-600"
                    : ""
                } ${paragraph === "" ? "h-2" : "text-lg leading-relaxed"}`}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-8 flex justify-center"
          >
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="text-3xl"
                >
                  ❤️
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
