
import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";

import qr from "../assets/qr.png";

const Ai = () => {
  const [active, setActive] = useState(1);
  const stepsRef = useRef(null);

  // Track scroll progress through the steps list
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start center", "end center"],
  });

  // Connecting line fills with scroll progress
  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const steps = [
    {
      id: 1,
      title: "Scan the QR Code",
      description:
        "Scan the QR code using your mobile phone to access the AI photo recognition feature.",
    },
    {
      id: 2,
      title: "Upload Your Selfie",
      description:
        "Your camera will open, allowing you to take a selfie or upload a clear photo of yourself.",
    },
    {
      id: 3,
      title: "AI Recognises Your Face",
      description:
        "AI scans your uploaded photo, recognises your face and searches for matching photos in your event gallery.",
    },
    {
      id: 4,
      title: "Find Your Photos",
      description:
        "All photos containing your face are displayed automatically, so you don't have to manually search through the entire event gallery.",
    },
    {
      id: 5,
      title: "Choose Your Favourites",
      description:
        "Browse your matched photos and add the ones you love to your favourites for the photographer to process.",
    },
  ];

  // Update active step while scrolling
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      steps.length,
      Math.max(1, Math.ceil(latest * steps.length))
    );

    setActive(index);
  });

  return (
    <section className="container mx-auto max-w-7xl px-4 py-20">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="mb-10 mt-10 inline-flex items-center rounded-lg bg-black px-4 py-2 font-medium text-white text-sm">
          ✦ AI Photo Recognition
        </p>

        <h1 className="text-3xl md:text-4xl font-bold">
          Find Your Photos Using AI
        </h1>

        <p className="text-gray-500 mt-3">
          No more searching through hundreds of event photos manually.
        </p>
      </motion.div>

      {/* CONTENT: QR LEFT, STEPS RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 items-start">

        {/* QR CODE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center lg:sticky lg:top-24 bg-gray-100 rounded-3xl p-8"
        >
          <motion.img
            src={qr}
            alt="QR Code"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.08 }}
            className="w-40 h-40 object-contain"
          />

          <p className="font-bold mt-4">
            Scan to get started
          </p>

          <p className="text-gray-500 text-sm mt-2 text-center">
            Point your phone's camera at the code above
          </p>
        </motion.div>

        {/* STEPS */}
        <div ref={stepsRef} className="relative">

          {/* CONNECTING LINE */}
          <div className="hidden md:block absolute left-5 top-5 bottom-5 w-[2px] bg-gray-200">
            <motion.div
              className="w-full bg-orange-300 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-5">
            {steps.map((step, index) => {
              const isActive = step.id === active;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  onClick={() => setActive(step.id)}
                  animate={{
                    scale: isActive ? 1.02 : 1,
                    backgroundColor: isActive
                      ? "#FFEDD5"
                      : "#F3F4F6",
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="relative md:ml-14 flex items-start gap-5 p-5 rounded-2xl cursor-pointer"
                >
                  {/* NUMBER */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.15 : 1,
                      backgroundColor: "#FDBA74",
                    }}
                    transition={{ duration: 0.3 }}
                    className="md:absolute md:-left-14 bg-orange-300 min-w-10 h-10 rounded-full flex justify-center items-center font-bold"
                  >
                    {step.id}
                  </motion.div>

                  {/* TEXT */}
                  <div>
                    <h2 className="font-bold text-lg mb-1">
                      {step.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* RESULT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="bg-orange-100 p-6 rounded-2xl text-center mt-10"
      >
        <p className="font-bold text-xl">
          📸 Your Photos Found!
        </p>

        <p className="text-gray-600 mt-2">
          AI makes it easier to find your photos without manually
          searching through hundreds of images.
        </p>
      </motion.div>

    </section>
  );
};

export default Ai;
