
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";

const steps = [
  {
    number: "01",
    title: "Upload",
    description:
      "After capturing photos from events such as weddings, birthdays, or other special occasions, the photographer may have hundreds of images to manage. The photographer uploads all the event photos to the Webzspot Studio platform. These photos are securely stored and organized in a dedicated event gallery. Both the photographer and the respective client can access the gallery, making photo sharing and management simple and convenient.",
    image: i1,
  },
  {
    number: "02",
    title: "Gallery",
    description:
      "Once the photographer uploads the event photos, they are organized and displayed in a dedicated Event Gallery. The client can securely access the gallery and view all the photos from their event in one place. They can easily browse through hundreds of images without downloading them individually. This provides a simple and convenient way to view and manage the complete event collection.",
    image: i2,
  },
  {
    number: "03",
    title: "Favourites",
    description:
      "The client can browse through all the photos available in the Event Gallery and select the images they like by adding them to Favourites. All selected photos are collected in a separate favourites list for easy access. The photographer can view the client’s selected photos directly from the platform. Based on these selections, the photographer can proceed with editing and processing the chosen images for final delivery.",
    image: i3,
  },
  {
    number: "04",
    title: "Enhancing the Deliverables",
    description:
      "The photographer and their team can access the photos selected by the client from the favourites list. They review each selected image and begin the editing and enhancement process based on the client’s requirements. Adjustments such as color correction, lighting, retouching, cropping, and other enhancements can be applied. Once the editing is completed, the photos are prepared for final delivery to the client.",
    image: s4,
  },
  {
    number: "05",
    title: "Download",
    description:
      "Once the editing and enhancement process is completed, the photographer or team uploads the final photos back to the client’s gallery. The client can securely access the gallery and view all the professionally edited images in one place. The final photos are available in high quality, allowing the client to easily preview and download their favourite memories. This completes the entire photo delivery process through Webzspot Studio.",
    image: s5,
  },
];

const Works = () => {
  const [active, setActive] = useState(0);
  const [imageOpen, setImageOpen] = useState(false);

  useEffect(() => {
    if (!imageOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setImageOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [imageOpen]);

  const openImage = (index) => {
    setActive(index);
    setImageOpen(true);
  };

  return (
    <section className="relative w-full bg-black py-16 text-white md:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">

        {/* ================= HEADING ================= */}
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-8 inline-block rounded-lg bg-white px-4 py-2 font-medium text-black">
            How it works
          </p>

          <p className="mx-auto max-w-3xl py-4 text-xl font-medium leading-relaxed md:py-6 md:text-3xl">
            A clear step-by-step Procedure for accessing our{" "}
            <span className="text-orange-300">
              Webzspot studio
            </span>
          </p>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          {steps.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0.35, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 last:mb-0"
            >
              {/* TEXT */}
              <div className="mb-7">
                <motion.p
                  initial={{ color: "#4b5563" }}
                  whileInView={{ color: "#fdba74" }}
                  viewport={{ amount: 0.5 }}
                  transition={{ duration: 0.4 }}
                  className="text-6xl font-light leading-none"
                >
                  {item.number}
                </motion.p>

                <h2 className="mt-6 text-3xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-4 text-base leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>

              {/* MOBILE IMAGE */}
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-8 rounded-full bg-orange-400/10 blur-3xl"
                />

                <button
                  type="button"
                  onClick={() => openImage(index)}
                  aria-label={`Enlarge ${item.title} image`}
                  className="relative block h-[300px] w-full cursor-zoom-in sm:h-[380px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full rounded-2xl object-contain drop-shadow-2xl"
                  />
                </button>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {item.title}
                  </span>

                  <span className="text-xs font-medium tracking-widest text-orange-300">
                    {item.number} / 05
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="relative mx-auto hidden w-full items-stretch gap-12 md:flex lg:gap-16 xl:gap-20">

          {/* LEFT - SCROLLING TEXT */}
          <div className="min-w-0 flex-[0_0_43%]">
            {steps.map((item, index) => (
              <motion.div
                key={item.number}
                onViewportEnter={() => setActive(index)}
                viewport={{ amount: 0.6 }}
                className="my-12 flex min-h-[70vh] flex-col justify-center"
              >
                {/* STEP NUMBER */}
                <motion.p
                  animate={{
                    color:
                      active === index
                        ? "#fdba74"
                        : "#4b5563",
                  }}
                  transition={{ duration: 0.4 }}
                  className="text-[100px] font-light leading-none lg:text-[120px]"
                >
                  {item.number}
                </motion.p>

                {/* STEP CONTENT */}
                <div className="mt-8">
                  <h2 className="text-3xl font-bold lg:text-4xl">
                    {item.title}
                  </h2>

                  <p className="mt-5 max-w-[700px] text-lg leading-8 text-gray-400 lg:text-xl">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT - STICKY IMAGE */}
          <div className="min-w-0 flex-1 self-stretch">
            <div className="sticky top-[10vh]">

              <div className="relative">

                {/* SOFT ORANGE GLOW */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-12 rounded-full bg-orange-400/10 blur-[80px]"
                />

                {/* FLOATING IMAGE */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setImageOpen(true)}
                    aria-label={`Enlarge ${steps[active].title} image`}
                    className="relative block h-[60vh] max-h-[650px] min-h-[400px] w-full cursor-zoom-in"
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={active}
                        src={steps[active].image}
                        alt={steps[active].title}
                        initial={{
                          opacity: 0,
                          scale: 0.96,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 1.02,
                        }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 h-full w-full rounded-2xl object-contain drop-shadow-2xl"
                      />
                    </AnimatePresence>
                  </button>
                </motion.div>

                {/* IMAGE LABEL */}
                <div className="mt-5 flex items-center justify-between gap-4">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={active}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="text-sm font-medium text-gray-300"
                    >
                      {steps[active].title}
                    </motion.p>
                  </AnimatePresence>

                  <span className="shrink-0 text-xs tracking-widest text-orange-300">
                    {steps[active].number} / 05
                  </span>
                </div>

                {/* PROGRESS BAR */}
                <div className="mt-4 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    animate={{
                      width: `${((active + 1) / steps.length) * 100}%`,
                    }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-orange-300"
                  />
                </div>

                <p className="mt-3 text-right text-xs text-gray-600">
                  Click image to enlarge
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= IMAGE POPUP ================= */}
      <AnimatePresence>
        {imageOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            onClick={() => setImageOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex cursor-zoom-out items-center justify-center bg-black/85 p-5 backdrop-blur-md"
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setImageOpen(false)}
              aria-label="Close image preview"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-2xl text-white hover:bg-white/25"
            >
              ×
            </button>

            {/* POPUP IMAGE */}
            <motion.img
              src={steps[active].image}
              alt={steps[active].title}
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-[90vw] cursor-default rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;
