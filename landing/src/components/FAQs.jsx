
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the photo selection process work?",
      answer:
        "The photographer uploads the event photos to the platform. Each customer receives access to their photo gallery, where they can browse, select their preferred photos, and save their selections.",
    },
    {
      question: "How many photos can a photographer upload?",
      answer:
        "Photographers can upload a large number of photos from an event or photoshoot. The platform is designed to handle photo collections containing hundreds or even thousands of images.",
    },
    {
      question: "How do customers access their photos?",
      answer:
        "Customers can access their assigned photo gallery using their unique account, link, or access details provided by the photographer.",
    },
    {
      question: "Can customers select multiple photos?",
      answer:
        "Yes. Customers can select multiple photos from their gallery. Their selected photos are stored so they can review and manage their choices later.",
    },
    {
      question: "Can I change my selected photos later?",
      answer:
        "Yes. Customers can review their selected photos and add or remove photos before finalizing their selection, depending on the photographer's settings.",
    },
    {
      question: "Are my selected photos saved?",
      answer:
        "Yes. Once you select photos, your selections are saved to your account or gallery so you can access them again without having to select the photos from the beginning.",
    },
    {
      question: "Can other customers see my photos?",
      answer:
        "No. Photo galleries are designed to be accessible only to the users authorized by the photographer. Each customer's photos and selections remain separate.",
    },
    {
      question: "Can photographers organize photos for different customers?",
      answer:
        "Yes. Photographers can organize and manage photo collections so that customers can access the appropriate photos for their event, session, or booking.",
    },
    {
      question: "Can I download my selected photos?",
      answer:
        "After the photographer finalizes or approves your selection, the selected photos can be made available for download or further processing according to the photographer's workflow.",
    },
    {
      question: "What happens after I finalize my selection?",
      answer:
        "Once your selection is finalized, the photographer can view the selected photos and continue with the next step, such as editing, retouching, printing, or delivering the final images.",
    },
  ];

  return (
    <section id="faq" className="w-full bg-gray-100 box-border py-16 md:py-20">

      <div className="container mx-auto max-w-7xl px-4">

        {/* HEADER */}
        <div className="w-full max-w-[1000px] mx-auto text-center">
          <motion.div
            className="mb-10 mt-10 inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 font-medium text-white text-sm"
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>

            FAQs
          </motion.div>

          <motion.h2
            className="mt-4 mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Questions & Answers
          </motion.h2>

          <motion.p
            className="text-gray-700 text-base sm:text-lg md:text-xl font-medium max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Key information to help you make confident decisions.
          </motion.p>
        </div>

        {/* FAQ LIST */}
        <div className="max-w-[850px] mx-auto mt-12 space-y-5">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>

      </div>
    </section>
  );
}

/* FAQ ROW */

function FaqItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="bg-white border border-gray-200 rounded-[25px] overflow-hidden"
    >
      {/* QUESTION */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full min-h-[90px] md:min-h-[105px] px-5 md:px-7 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
      >
        <div className="flex items-center gap-4 min-w-0">

          {/* NUMBER */}
          <span className="hidden sm:flex flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 items-center justify-center text-sm font-semibold text-gray-500">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* QUESTION TEXT */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-900 leading-snug">
            {faq.question}
          </h3>
        </div>

        {/* PLUS ICON */}
        <motion.span
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-2xl font-light"
          animate={{
            rotate: isOpen ? 45 : 0,
            backgroundColor: isOpen ? "#FF7A0D" : "#f3f4f6",
            color: isOpen ? "#ffffff" : "#111827",
          }}
          transition={{ duration: 0.3 }}
        >
          +
        </motion.span>
      </button>

      {/* ANSWER */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="px-5 md:px-7 pb-6">
              <div className="h-px bg-gray-200 mb-5" />

              <p className="text-base md:text-lg leading-[1.7] text-gray-600">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
