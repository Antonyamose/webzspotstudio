
import React from "react";
import { easeOut, motion } from "motion/react";

const Headertext = () => {
  const items = [
    "Capture the Moments",
    "Upload the Photos",
    "Select Favourites",
    "Edit & Enhance",
    "Deliver & Download",
  ];

  return (
    <motion.section
      className="
        container mx-auto max-w-7xl
        w-full
        px-5 sm:px-6 lg:px-8 xl:px-0
        my-10 sm:my-14 md:my-16 lg:my-24
        text-white
      "
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: easeOut }}
    >
      <div
        className="
          flex flex-col
          gap-10 sm:gap-7 md:gap-8 lg:gap-9
        "
      >
        {/* HEADING */}
        <h1
          className="
            font-bold
            leading-[1.1]
            tracking-tight
            text-[clamp(2rem,5vw,5rem)]
            max-w-5xl
          "
        >
          AI Powered Photo Delivery{" "}
          <motion.span
            initial={{ opacity: 0, rotateX: 0 }}
            animate={{ opacity: 1, rotateX: 360 }}
            transition={{
              duration: 2,
              ease: "linear",
            }}
            className="text-orange-300 inline-block"
          >
            Platform
          </motion.span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            font-medium
            leading-relaxed
            text-sm sm:text-base md:text-lg lg:text-xl
            max-w-3xl
          "
        >
          Deliver your photos securely. Let clients
          browse, heart their favourites, and you
          deliver exactly what they love.
        </p>

        {/* FEATURES */}
        <div
          className="
            flex flex-wrap items-center
            gap-x-2 gap-y-2
            sm:gap-x-3
            text-gray-300
            text-xs sm:text-sm md:text-base lg:text-lg
          "
        >
          {items.map((item, index) => (
            <React.Fragment key={item}>
              <span className="whitespace-nowrap">
                {item}
              </span>

              {index !== items.length - 1 && (
                <span className="text-gray-400">
                  |
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* RATING */}
        <div
          className="
            flex flex-wrap items-center
            gap-2
            text-xs sm:text-sm md:text-base
          "
        >
          <span className="text-yellow-400">
            ⭐⭐⭐⭐⭐
          </span>
          <span>500+ Happy Customers</span>
        </div>

        {/* BUTTONS */}
        <div
          className="
            flex flex-wrap items-center
            gap-3 sm:gap-4 md:gap-5
          "
        >
          <motion.button
            whileHover={{ opacity: 0.7 }}
            whileTap={{ scale: 0.9 }}
            className="
              bg-[#D4AF37]
              text-black font-bold
              cursor-pointer
              px-4 sm:px-6 md:px-8
              py-2.5 sm:py-3
              text-xs sm:text-sm md:text-base lg:text-lg
              rounded-xl sm:rounded-2xl
              whitespace-nowrap
            "
          >
            Start your Free Trial
          </motion.button>

          <motion.button
            whileHover={{ opacity: 0.7 }}
            whileTap={{ scale: 0.9 }}
            className="
              bg-[#D4AF37]
              text-black font-bold
              cursor-pointer
              px-4 sm:px-6 md:px-8
              py-2.5 sm:py-3
              text-xs sm:text-sm md:text-base lg:text-lg
              rounded-xl sm:rounded-2xl
              whitespace-nowrap
            "
          >
            Sign Up
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Headertext;
