import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import handsImage from "../../imports/image.png";

export default function VideoMemoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-pink-50 via-rose-100 to-pink-50">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent"
        >
          My Special Moments 🎬
        </motion.h2>

        <div className="space-y-12">
          {/* Hand-holding Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative bg-white p-6 rounded-3xl shadow-2xl">
              <img
                src={handsImage}
                alt="Our hands together"
                className="w-full rounded-2xl"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="mt-4 text-center"
              >
                <p className="text-xl text-pink-700 italic">
                  "I wanna hold your hand forever, hold your heart forever"
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Video Placeholders */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-pink-200 to-rose-200">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-pink-700 mb-2">My gng is you :)</h3>
                  <p className="text-pink-500"> </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-rose-200 to-pink-200">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-pink-700 mb-2">The music is perfect for you!</h3>
                  <p className="text-pink-500">Tho you are beautiful from both inside and outside</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-pink-600 text-lg italic">
              "Every second with you is a treasure" 💕
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
