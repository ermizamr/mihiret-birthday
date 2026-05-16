import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Play } from "lucide-react";
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
          Our Special Moments 🎬
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
                  "Forever holding your hand, forever holding your heart"
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
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-pink-200 to-rose-200 flex items-center justify-center">
                  {/* VIDEO PLACEHOLDER 1 - Replace src with your video URL */}
                  <video
                    className="w-full h-full object-cover hidden"
                    controls
                    poster="https://via.placeholder.com/800x450/ffc2d1/ffffff?text=Video+1"
                  >
                    <source src="/videos/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Placeholder when no video */}
                  <div className="text-center">
                    <Play className="mx-auto mb-4 text-pink-500" size={64} />
                    <p className="text-pink-600 text-lg">Video 1 Coming Soon</p>
                    <p className="text-pink-400 text-sm mt-2">Upload your video to /public/videos/video1.mp4</p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-pink-700 mb-2">Our First Adventure</h3>
                  <p className="text-pink-500">A special moment captured in time</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center">
                  {/* VIDEO PLACEHOLDER 2 - Replace src with your video URL */}
                  <video
                    className="w-full h-full object-cover hidden"
                    controls
                    poster="https://via.placeholder.com/800x450/ffb3c6/ffffff?text=Video+2"
                  >
                    <source src="/videos/video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Placeholder when no video */}
                  <div className="text-center">
                    <Play className="mx-auto mb-4 text-rose-500" size={64} />
                    <p className="text-rose-600 text-lg">Video 2 Coming Soon</p>
                    <p className="text-rose-400 text-sm mt-2">Upload your video to /public/videos/video2.mp4</p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-pink-700 mb-2">Our Beautiful Journey</h3>
                  <p className="text-pink-500">Every moment with you is precious</p>
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
              "These moments remind me why every second with you is a treasure" 💕
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
