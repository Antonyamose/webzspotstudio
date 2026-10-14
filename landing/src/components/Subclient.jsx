
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

  const sliderTransition = {
    duration: 25,
    repeat: Infinity,
    ease: "linear",
  };

  const renderItems = (items) =>
    items.map((logo, index) => (
      <div
        key={index}
        className="
          shrink-0
          whitespace-nowrap
          font-bold
          text-sm sm:text-base
          text-gray-500
          bg-[#EDEDED]
          px-4 py-2
          rounded-2xl
        "
      >
        {logo}
      </div>
    ));

  return (
    <section className="w-full overflow-hidden py-10">

      {/* FIRST SLIDER - RIGHT TO LEFT */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-10 w-full overflow-hidden"
      >
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={sliderTransition}
        >
          {/* FIRST COPY */}
          <div className="flex shrink-0 gap-8 pr-8">
            {renderItems(logo1)}
          </div>

          {/* SECOND COPY */}
          <div
            aria-hidden="true"
            className="flex shrink-0 gap-8 pr-8"
          >
            {renderItems(logo1)}
          </div>
        </motion.div>
      </motion.div>

      {/* SECOND SLIDER - LEFT TO RIGHT */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full overflow-hidden"
      >
        <motion.div
          className="flex w-max"
          initial={{ x: "-50%" }}
          animate={{ x: ["-50%", "0%"] }}
          transition={sliderTransition}
        >
          {/* FIRST COPY */}
          <div className="flex shrink-0 gap-8 pr-8">
            {renderItems(logo2)}
          </div>

          {/* SECOND COPY */}
          <div
            aria-hidden="true"
            className="flex shrink-0 gap-8 pr-8"
          >
            {renderItems(logo2)}
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Subclient;
