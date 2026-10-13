
import React from "react";
import { motion } from "motion/react";

const Subclient = () => {
  const logo1 = [
    "Capture Every Moment",
    "Timeless Visual Stories",
    "Professional Portrait Studio",
    "Cinematic Wedding Photography",
    "Authentic Emotion Captured",
    "Frame Your Memories",
    "Artistic Event Coverage",
    "Stunning Landscape Prints",
    "Editorial Style Imagery",
    "High-Impact Visuals",
  ];

  const logo2 = [
    "Creative Direction Portfolio",
    "Creative Direction Portfolio",
    "Book Your Session",
    "Tailored Photo Packages",
    "Browse My Work",
    "Natural Light Portraits",
    "Natural Light Portraits",
    "Commercial Brand Shots",
    "Preserve Precious Moments",
    "Preserve Precious Moments",
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 py-10">

      {/* FIRST SLIDER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-10"
      >
        <div className="overflow-hidden mx-auto">
          <motion.div
            className="flex gap-8 justify-center whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {logo1.map((logo, index) => (
              <div
                key={index}
                className="font-bold text-gray-500 bg-[#EDEDED] px-4 py-2 rounded-2xl"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* SECOND SLIDER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="overflow-hidden mx-auto">
          <motion.div
            className="flex gap-8 justify-center whitespace-nowrap"
            animate={{
              x: ["0%", "50%"],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {logo2.map((logo, index) => (
              <div
                key={index}
                className="font-bold text-gray-500 bg-[#EDEDED] px-4 py-2 rounded-2xl"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
};

export default Subclient;
