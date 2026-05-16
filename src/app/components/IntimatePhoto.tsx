import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Heart } from "lucide-react";
import intimateImg from "../../imports/IMG_20260427_211144_507.jpg";

export default function IntimatePhoto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-rose-900 via-pink-900 to-rose-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-1 h-1 bg-pink-200/30 rounded-full" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              In Every Quiet Moment
            </h2>
            <p className="text-xl text-pink-200 max-w-2xl mx-auto">
              It's just you and me against the world, my love
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative max-w-md mx-auto"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 rounded-3xl blur-2xl opacity-50" />

            <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-3xl border-2 border-pink-300/30 shadow-2xl">
              <img
                src={intimateImg}
                alt="Our intimate moment"
                className="w-full rounded-2xl shadow-xl"
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
                className="mt-6 text-white"
              >
                <p className="text-lg italic">
                  "In the silence of the night, your love speaks the loudest."
                </p>
              </motion.div>
            </div>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -top-6 -right-6"
            >
              <Heart className="text-pink-300" size={48} fill="currentColor" />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
            className="mt-12 text-2xl text-pink-200 max-w-3xl mx-auto leading-relaxed"
          >
            Every stolen glance, every whispered word, every tender touch—
            they all remind me that you're my forever.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
