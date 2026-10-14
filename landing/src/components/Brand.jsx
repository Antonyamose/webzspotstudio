
import { motion } from "motion/react";

const logos = [
  "LOGO",
  "Logoipsum",
  "LOCO",
  "IPRUM",
  "LOGO",
];

const Brands = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="
        container mx-auto max-w-7xl
        px-4 overflow-hidden bg-white
        py-8 sm:py-10 md:py-12
      "
    >
      <div className="flex flex-col md:flex-row items-center w-full">

        {/* HEADING */}
        <div
          className="
            w-full md:w-[22%]
            shrink-0
            text-center md:text-left
          "
        >
          <p className="md:text-xl font-medium leading-tight text-black">
            Trusted by leading
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            brands worldwide
          </p>
        </div>

        {/* LOGO SLIDER */}
        <div
          className="
            w-full md:w-[78%]
            overflow-hidden
            mt-6 md:mt-0
          "
        >
          <motion.div
            className="
              flex w-max items-center
              gap-10 sm:gap-12 md:gap-16
              whitespace-nowrap
            "
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="
                  text-base md:text-xl
                  font-extrabold
                  text-gray-400
                  shrink-0
                "
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
};

export default Brands;
