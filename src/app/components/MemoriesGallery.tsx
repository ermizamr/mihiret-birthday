import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../../imports/6015035259658898426_119.jpg";
import img2 from "../../imports/6015035259658898427_119.jpg";
import img3 from "../../imports/6015035259658898425_119.jpg";
import img4 from "../../imports/6015035259658898429_119.jpg";

export default function MemoriesGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const memories = [
    {
      caption: "Our Cozy Moments",
      date: "When home is wherever you are",
      image: img1
    },
    {
      caption: "Adventures Together",
      date: "Exploring the world with you",
      image: img2
    },
    {
      caption: "That Beautiful Smile",
      date: "The moment I fell deeper in love",
      image: img3
    },
    {
      caption: "Our Perfect Date",
      date: "Every moment with you is special",
      image: img4
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-pink-100 via-rose-100 to-pink-50">
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent"
        >
          Our Beautiful Memories 📸
        </motion.h2>

        <div className="relative">
          <div className="relative aspect-[4/3] max-w-3xl mx-auto">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white p-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="relative bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg overflow-hidden aspect-[4/3]">
                  <img
                    src={memories[currentIndex].image}
                    alt={memories[currentIndex].caption}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl mb-2"
                    >
                      {memories[currentIndex].caption}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-pink-200"
                    >
                      {memories[currentIndex].date}
                    </motion.p>
                  </div>
                </div>

              </div>
            </motion.div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            >
              <ChevronLeft className="text-pink-600" size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            >
              <ChevronRight className="text-pink-600" size={24} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {memories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-pink-600 w-8"
                    : "bg-pink-300 hover:bg-pink-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
