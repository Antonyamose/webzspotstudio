
import { motion } from "framer-motion";

export default function Footer() {
  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="w-full min-h-[450px] bg-black text-white overflow-x-hidden box-border [&_*]:box-border">

      {/* CENTERED CONTAINER */}
      <div className="container mx-auto max-w-7xl px-4 py-20 flex justify-between flex-wrap gap-10 max-[900px]:flex-col max-[900px]:py-[60px]">

        {/* BRAND SECTION */}
        <div className="max-w-[450px]">
          <h2 className="mb-[25px] text-[32px]">
            ✳ Webzspot Studios
          </h2>

          <p className="text-[#999] text-xl leading-[1.6] mb-10">
            Supporting modern teams with strategy,
            clarity, and practical solutions.
          </p>

          <motion.button
            className="flex items-center gap-3.5 pl-6 pr-2.5 py-2.5 border border-[#444] rounded-full bg-transparent text-white text-base cursor-pointer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span>Book a call</span>

            <motion.span
              className="w-[55px] h-[55px] rounded-full bg-[#111] text-white flex items-center justify-center text-2xl"
              whileHover={{ x: 4, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ↗
            </motion.span>
          </motion.button>
        </div>

        {/* NAVIGATION AND SOCIAL LINKS */}
        <motion.div
          className="flex flex-wrap gap-[100px] max-[900px]:gap-[60px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
        >

          {/* NAVIGATION */}
          <motion.div
            className="flex flex-col gap-5 min-w-[120px]"
            variants={staggerItem}
          >
            <h3 className="mb-5 text-xl font-normal text-white">
              Navigation
            </h3>

            <a className="text-[#888] no-underline text-base transition-colors duration-300 hover:text-white" href="#services">
              Services
            </a>

            <a className="text-[#888] no-underline text-base transition-colors duration-300 hover:text-white" href="#works">
              How it works
            </a>

            <a className="text-[#888] no-underline text-base transition-colors duration-300 hover:text-white" href="#testimonials">
              Testimonials
            </a>

            <a className="text-[#888] no-underline text-base transition-colors duration-300 hover:text-white" href="#features">
              Features
            </a>

            <a className="text-[#888] no-underline text-base transition-colors duration-300 hover:text-white" href="#faq">
              FAQs
            </a>

            <a className="text-[#888] no-underline text-base transition-colors duration-300 hover:text-white" href="#contact">
              Contact
            </a>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            className="flex flex-col gap-5 min-w-[120px]"
            variants={staggerItem}
          >
            <h3 className="mb-5 text-xl font-normal text-white">
              Socials
            </h3>

            <a className="text-[#888] no-underline text-base transition-colors duration-300 hover:text-white" href="#">
              Twitter
            </a>

            <a className="text-[#888] no-underline text-base transition-colors duration-300 hover:text-white" href="#">
              Instagram
            </a>

            <a className="text-[#888] no-underline text-base transition-colors duration-300 hover:text-white" href="#">
              LinkedIn
            </a>
          </motion.div>

        </motion.div>
      </div>
    </footer>
  );
}
