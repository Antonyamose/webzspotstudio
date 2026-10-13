// 
import React from "react";
import { motion } from "motion/react";

const WhyWebzpot = () => {
  const comparisons = [
    {
      feature: "Photo Delivery",
      manual:
        "Photos are shared manually through drives, links, or other platforms.",
      webzpot:
        "All event photos are delivered through one organized online gallery.",
    },
    {
      feature: "Photo Selection",
      manual:
        "Clients send photo numbers, filenames, screenshots, or messages to select favourites.",
      webzpot:
        "Clients simply browse the gallery and mark their favourite photos directly.",
    },
    {
      feature: "Managing Favourites",
      manual:
        "Photographers have to manually track and organize the client's selections.",
      webzpot:
        "Selected favourites are automatically organized and available to the photographer.",
    },
    {
      feature: "Large Photo Collections",
      manual:
        "Managing hundreds or thousands of event photos manually can become difficult and confusing.",
      webzpot:
        "Photos are organized in a dedicated event gallery for easier browsing and management.",
    },
    {
      feature: "Client Experience",
      manual:
        "Clients may need to download files or switch between multiple apps to review photos.",
      webzpot:
        "Clients can view, select, and download photos from one simple platform.",
    },
    {
      feature: "Photographer Workflow",
      manual:
        "Photographers spend extra time communicating, collecting selections, and organizing files.",
      webzpot:
        "A simple workflow makes the process easier: Upload → Select → Edit → Deliver.",
    },
    {
      feature: "Photo Organization",
      manual:
        "Files and folders can become difficult to manage across different events and clients.",
      webzpot:
        "Each event has its own organized gallery and photo collection.",
    },
    {
      feature: "Final Delivery",
      manual:
        "Final edited photos need to be uploaded and shared again manually.",
      webzpot:
        "Photographers can deliver completed photos directly through the platform.",
    },
    {
      feature: "Time & Effort",
      manual:
        "Repetitive manual tasks make the overall process slower.",
      webzpot:
        "A centralized workflow reduces repetitive work for photographers and clients.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const rowVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="container mx-auto max-w-7xl px-4 py-12 md:py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.05,
        }}
      >
        {/* DESKTOP HEADER */}
        <div className="hidden md:grid md:grid-cols-[0.7fr_1.4fr_1.4fr]">
          <div className="rounded-tl-2xl bg-gray-100 p-5 font-bold lg:p-6">
            FEATURE
          </div>

          <div className="bg-gray-100 p-5 font-bold text-gray-500 lg:p-6">
            <span className="mr-2 text-red-500">✕</span>
            MANUAL METHOD
          </div>

          <div className="rounded-tr-2xl bg-black p-5 font-bold text-white lg:p-6">
            <span className="mr-2 text-green-400">✓</span>
            WEBZPOT STUDIOS
          </div>
        </div>

        {/* COMPARISONS */}
        <div className="space-y-5 md:space-y-0">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              variants={rowVariants}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm

                md:grid
                md:grid-cols-[0.7fr_1.4fr_1.4fr]
                md:rounded-none
                md:border-x
                md:border-t
                md:border-b-0
                md:shadow-none

                md:last:rounded-b-2xl
                md:last:border-b
              "
            >
              {/* FEATURE */}
              <div className="bg-gray-100 p-5 md:bg-gray-50 lg:p-6">
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-400 md:hidden">
                  Feature
                </p>

                <p className="text-base font-bold text-black lg:text-lg">
                  {item.feature}
                </p>
              </div>

              {/* MANUAL */}
              <div className="border-t border-gray-200 p-5 md:border-t-0 lg:p-6">
                <p className="mb-2 text-xs font-bold text-red-500 md:hidden">
                  ✕ MANUAL METHOD
                </p>

                <p className="text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
                  {item.manual}
                </p>
              </div>

              {/* WEBZPOT */}
              <div
                className="
                  border-t
                  border-gray-200
                  bg-gray-50
                  p-5

                  md:border-l-2
                  md:border-t-0
                  md:border-black

                  lg:p-6
                "
              >
                <p className="mb-2 text-xs font-bold text-green-600 md:hidden">
                  ✓ WEBZPOT STUDIOS
                </p>

                <p className="text-sm font-medium leading-6 text-black sm:text-base sm:leading-7">
                  {item.webzpot}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyWebzpot;
