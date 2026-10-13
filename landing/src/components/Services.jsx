
import React from "react";
import { motion } from "motion/react";

import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import a4 from "../assets/a4.png";
import a5 from "../assets/a5.png";
import a6 from "../assets/a6.png";
import a7 from "../assets/a7.png";
import a8 from "../assets/a8.png";
import a9 from "../assets/a9.png";

const Services = () => {
  const service = [
    {
      id: 1,
      name: "School Events",
      img: a1,
    },
    {
      id: 2,
      name: "College Events",
      img: a2,
    },
    {
      id: 3,
      name: "Wedding Events",
      img: a3,
    },
    {
      id: 4,
      name: "Corporate Events",
      img: a4,
    },
    {
      id: 5,
      name: "Birthday Events",
      img: a5,
    },
    {
      id: 6,
      name: "Sports Events",
      img: a6,
    },
    {
      id: 7,
      name: "Government & Political Events",
      img: a7,
    },
    {
      id: 8,
      name: "Musical Events",
      img: a8,
    },
    {
      id: 9,
      name: "Personal Photography",
      img: a9,
    },
  ];

  // Parent animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // Each card animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="container mx-auto max-w-7xl px-4 my-20 text-center md:my-8">

      {/* TITLE */}
      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
        className="mb-10 mt-10 inline-block rounded-lg bg-black px-4 py-2 font-medium text-white"
      >
        ✦ Services
      </motion.p>

      {/* GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="grid grid-cols-1 gap-8 text-left text-black sm:grid-cols-2 lg:grid-cols-3"
      >
        {service.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{
              y: -8,
            }}
            transition={{
              duration: 0.3,
            }}
            className="group cursor-pointer"
          >
            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl">
              <motion.img
                src={item.img}
                alt={item.name}
                className="h-[250px] w-full object-cover opacity-80 brightness-75 sm:h-[280px] lg:h-[300px]"
                whileHover={{
                  scale: 1.07,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              />
            </div>

            {/* NAME */}
            <p className="mt-4 text-xl font-semibold">
              {item.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
