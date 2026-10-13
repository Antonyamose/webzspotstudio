
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import i4 from "../assets/i4.png";
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

  return (
    <section className="relative w-full bg-black py-16 text-white md:py-20">

      <div className="container mx-auto max-w-7xl px-4">

        {/* TITLE */}
        <div className="mb-10 text-center md:mb-16">
          <p className="mb-10 inline-block rounded-lg bg-white px-4 py-2 font-medium text-black">
            How it works
          </p>

          <p className="mx-auto w-[70%] py-6 text-xl font-medium md:py-10 md:text-3xl">
            A clear step-by-step Procedure for accessing our{" "}
            <span className="text-orange-300">Webzspot studio</span>
          </p>
        </div>

        {/* ================= MOBILE ================= */}

        <div className="md:hidden">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.35, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mb-20"
            >
              {/* TEXT */}
              <div className="mb-8">
                <motion.p
                  initial={{ color: "#4b5563" }}
                  whileInView={{ color: "#ffffff" }}
                  viewport={{ amount: 0.6 }}
                  transition={{ duration: 0.4 }}
                  className="text-7xl font-light leading-none"
                >
                  {item.number}
                </motion.p>

                <h2 className="mt-7 text-3xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-4 text-base leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>

              {/* IMAGE */}
              <motion.img
                src={item.image}
                alt={item.title}
                onClick={() => {
                  setActive(index);
                  setImageOpen(true);
                }}
                initial={{ filter: "brightness(0.5)" }}
                whileInView={{ filter: "brightness(1)" }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.4 }}
                className="h-[300px] w-full cursor-pointer rounded-2xl object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* ================= DESKTOP ================= */}

        <div className="relative mx-auto hidden w-full gap-12 md:flex">

          {/* LEFT - TEXT */}
          <div className="w-[60%]">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                onViewportEnter={() => setActive(index)}
                viewport={{ amount: 0.6 }}
                className="my-12 flex min-h-[70vh] flex-col justify-center"
              >
                {/* NUMBER */}
                <p className="text-[120px] font-light leading-none text-gray-600">
                  {item.number}
                </p>

                {/* CONTENT */}
                <div className="mt-10">
                  <h2 className="text-4xl font-bold">
                    {item.title}
                  </h2>

                  <p className="mt-5 max-w-[700px] text-xl leading-8 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT - IMAGE */}
          <div className="w-[40%]">
            <div className="sticky top-[20vh] h-[55vh] max-h-[600px]">
              <div
                onClick={() => setImageOpen(true)}
                className="relative h-full w-full cursor-zoom-in overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active}
                    src={steps[active].image}
                    alt={steps[active].title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= IMAGE POPUP ================= */}

      <AnimatePresence>
        {imageOpen && (
          <motion.div
            onClick={() => setImageOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999] flex cursor-zoom-out items-center justify-center bg-black/80 p-5 backdrop-blur-md"
          >
            {/* POPUP IMAGE */}
            <motion.img
              src={steps[active].image}
              alt={steps[active].title}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-h-[85vh] max-w-[90vw] cursor-default rounded-3xl object-contain shadow-2xl md:max-w-[80vw]"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Works;
