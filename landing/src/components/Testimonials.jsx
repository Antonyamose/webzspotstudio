
import React, { useEffect, useRef } from "react";

import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const stats = [
  { value: 1000, suffix: "+", label: "Photos Managed" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 25, suffix: "+", label: "Events Covered" },
];

/* =========================
   COUNT UP
========================= */

function CountUp({ end, suffix = "", delay = 0 }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const reduceMotion = useReducedMotion();
  const count = useMotionValue(0);

  const text = useTransform(
    count,
    (v) => `${Math.round(v).toLocaleString("en-US")}${suffix}`
  );

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      count.set(end);
      return;
    }

    const controls = animate(count, end, {
      duration: 1.6,
      delay,
      ease: EASE,
    });

    return () => controls.stop();
  }, [inView, reduceMotion, end, delay, count]);

  return <motion.span ref={ref}>{text}</motion.span>;
}

/* =========================
   TESTIMONIALS
========================= */

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  const testimonials = [
    {
      name: "Lucas Brown",
      role: "Head of Product, NovaTech",
      text: "“Consultra helped us bring clarity to our product strategy and improve internal workflows. Their structured approach and collaborative mindset made a real difference for our team and accelerated several important initiatives.”",
      rating: 5.0,
      photo: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Sarah Wilson",
      role: "CEO, BrightLabs",
      text: "“Their structured approach helped our team move from scattered ideas to a focused plan in weeks, not quarters. One of the best consulting engagements we've had, hands down.”",
      rating: 5.0,
      photo: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "Daniel Smith",
      role: "Product Manager, TechCorp",
      text: "“The collaboration made a real difference to how we ship. Communication was clear throughout, and the results showed up in our metrics within the first month.”",
      rating: 4.5,
      photo: "https://i.pravatar.cc/150?img=33",
    },
  ];

  /* =========================
     STAR RATING
  ========================= */

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold text-gray-800">
          {rating.toFixed(1)}
        </span>

        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => {
            const filled = i < Math.floor(rating);
            const half = !filled && i < rating;

            return (
              <svg
                key={i}
                viewBox="0 0 20 20"
                className="w-5 h-5"
              >
                <defs>
                  <linearGradient id={`half-${i}`}>
                    <stop
                      offset="50%"
                      stopColor="#f59e0b"
                    />
                    <stop
                      offset="50%"
                      stopColor="#e5e7eb"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z"
                  fill={
                    filled
                      ? "#f59e0b"
                      : half
                      ? `url(#half-${i})`
                      : "#e5e7eb"
                  }
                />
              </svg>
            );
          })}
        </div>
      </div>
    );
  };

  /* =========================
     STATS ANIMATION
  ========================= */

  const statsContainer = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.2 : 0.8,
        ease: EASE,
        when: "beforeChildren",
        staggerChildren: reduceMotion ? 0 : 0.15,
      },
    },
  };

  const statsItem = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.2 : 0.6,
        ease: EASE,
      },
    },
  };

  return (
    <section className="w-full bg-gray-100 overflow-x-hidden box-border">

      {/* MAIN CONTAINER */}
      <div className="container mx-auto max-w-7xl px-4">

        {/* =================================
            TESTIMONIAL SECTION
        ================================= */}

        <div className="py-6 sm:py-8">

          {/* HEADING */}
          <div
            className="
              w-full
              sm:w-[95%]
              md:w-[90%]
              max-w-[1000px]
              mx-auto
              sm:mt-[50px]
              md:mt-[60px]
              text-center
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-black
                px-4
                py-2
                font-medium
                text-white
                text-sm
              "
            >
              <motion.p
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12 21s-6.7-4.35-9.3-8.14C1.02 10.9 1.4 8.1 3.4 6.6c1.8-1.35 4.3-1.1 5.9.6L12 9.9l2.7-2.7c1.6-1.7 4.1-1.95 5.9-.6 2 1.5 2.38 4.3.7 6.26C18.7 16.65 12 21 12 21z" />
                </svg>
                Testimonials
              </motion.p>
            </div>

            {/* MAIN TITLE */}
            <motion.h2
              className="
                mx-2
                sm:mx-5
                mt-[15px]
                mb-[10px]
                text-4xl
                sm:text-5xl
                md:text-6xl
                font-normal
              "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
            >
              Why clients{" "}
              <span className="text-[#FF7A0D]">
                trust us
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              className="
                text-gray-700
                text-base
                sm:text-lg
                md:text-xl
                font-medium
                mb-5
                px-2
                sm:px-0
              "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
            >
              From the companies we've worked with, in their own words.
            </motion.p>
          </div>

          {/* =================================
              TESTIMONIAL SLIDER
          ================================= */}

          <div
            className="
              relative
              w-full
              overflow-hidden
              bg-white
              py-6
              sm:py-8
              md:py-10
              mt-[20px]
              sm:mt-[30px]
            "
          >
            {/* LEFT BLUR / FADE */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-6 sm:w-8 md:w-12 backdrop-blur-[2px] bg-gradient-to-r from-white via-white/80 to-transparent" />

            {/* EXTRA LEFT SOFT BLUR */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-8 sm:w-12 md:w-16 backdrop-blur-[1px] bg-gradient-to-r from-white/70 to-transparent" />

            {/* RIGHT BLUR / FADE */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-6 sm:w-8 md:w-12 backdrop-blur-[2px] bg-gradient-to-l from-white via-white/80 to-transparent" />

            {/* EXTRA RIGHT SOFT BLUR */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-8 sm:w-12 md:w-16 backdrop-blur-[1px] bg-gradient-to-l from-white/70 to-transparent" />

            {/* MOVING CARDS */}
            <motion.div
              className="
                flex
                gap-4
                sm:gap-5
                md:gap-6
                w-max
              "
              animate={
                reduceMotion
                  ? {}
                  : { x: ["0%", "-50%"] }
              }
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...testimonials, ...testimonials].map(
                (item, index) => (
                  <motion.div
                    key={index}
                    className="
                      w-[calc(100vw-48px)]
                      sm:w-[350px]
                      md:w-[370px]
                      lg:w-[380px]

                      h-[300px]
                      sm:h-[310px]
                      md:h-[320px]
                      lg:h-[330px]

                      flex-shrink-0
                      bg-gray-100

                      rounded-[25px]
                      sm:rounded-[27px]
                      lg:rounded-[30px]

                      p-5
                      sm:p-6
                      md:p-7
                      lg:p-8

                      flex
                      flex-col
                      justify-between
                    "
                    whileHover={{
                      scale: 1.03,
                      y: -6,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                  >
                    {/* AUTHOR */}
                    <div>
                      <div className="flex items-center gap-4 mb-5">
                        <img
                          src={item.photo}
                          alt={item.name}
                          className="w-14 h-14 rounded-full object-cover shrink-0"
                        />

                        <div className="text-left min-w-0">
                          <h2
                            className="
                              text-xl
                              sm:text-2xl
                              font-semibold
                              text-gray-900
                              leading-tight
                            "
                          >
                            {item.name}
                          </h2>

                          <h4 className="text-sm text-gray-500">
                            {item.role}
                          </h4>
                        </div>
                      </div>

                      {/* LINE */}
                      <div className="w-full h-px bg-gray-300/70 mb-5" />

                      {/* TESTIMONIAL TEXT */}
                      <p
                        className="
                          text-left
                          text-[16px]
                          sm:text-[17px]
                          leading-[1.6]
                          text-gray-800
                        "
                      >
                        {item.text}
                      </p>
                    </div>

                    {/* RATING */}
                    <div className="text-left">
                      <StarRating rating={item.rating} />
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </div>

        {/* =================================
            STATS SECTION
        ================================= */}

        <section className="pb-15">
          <motion.div
            variants={statsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="
              w-full
              rounded-[30px]
              bg-white
              px-6
              py-10
              md:px-10
              md:py-12
            "
          >
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-[1fr_auto_1fr_auto_1fr]
              "
            >
              {stats.map((stat, index) => (
                <React.Fragment key={stat.label}>
                  {/* STAT */}
                  <motion.div
                    variants={statsItem}
                    className="
                      flex
                      flex-col
                      items-center
                      justify-center
                      py-6
                      text-center
                      md:py-4
                    "
                  >
                    <h3
                      className="
                        text-4xl
                        font-normal
                        tracking-tight
                        text-gray-900
                        sm:text-5xl
                        md:text-6xl
                      "
                    >
                      <CountUp
                        end={stat.value}
                        suffix={stat.suffix}
                        delay={0.2 + index * 0.15}
                      />
                    </h3>

                    <p
                      className="
                        mt-3
                        text-lg
                        font-medium
                        text-gray-600
                        md:text-xl
                      "
                    >
                      {stat.label}
                    </p>
                  </motion.div>

                  {/* DIVIDER */}
                  {index < stats.length - 1 && (
                    <>
                      {/* DESKTOP DIVIDER */}
                      <div
                        aria-hidden="true"
                        className="
                          hidden
                          h-24
                          w-px
                          self-center
                          bg-gray-300
                          md:block
                        "
                      />

                      {/* MOBILE DIVIDER */}
                      <div
                        aria-hidden="true"
                        className="
                          mx-auto
                          h-px
                          w-24
                          bg-gray-300
                          md:hidden
                        "
                      />
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </section>

      </div>
    </section>
  );
}
