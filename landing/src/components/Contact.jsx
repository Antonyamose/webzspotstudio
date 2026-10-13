
import background from "../assets/background.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzMFRAyfqFprUfuZZFjKvtS9N1gYcKLgCYuvivKyvotC984-00hASZIhglp2U2TaGIL/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(formData),
        }
      );

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative w-full overflow-x-hidden box-border bg-cover bg-center [&_*]:box-border"
      style={{
        backgroundImage: `linear-gradient(
          to bottom,
          rgba(0,0,0,0.15) 0%,
          rgba(0,0,0,0.25) 35%,
          rgba(0,0,0,0.95) 100%
        ), url(${background})`,
      }}
    >
      {/* BACKGROUND OVERLAY */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      {/* CENTERED CONTAINER */}
      <div className="container relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-[60px] px-4 py-16 md:flex-row md:py-20">

        {/* CONTACT FORM */}
        <motion.div
          className="relative z-10 w-full flex-1 min-w-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-[650px] rounded-[30px] bg-white/70 p-6 text-[#222] sm:p-8 md:p-10">
            <form onSubmit={handleSubmit}>

              {/* FULL NAME */}
              <motion.div
                className="mb-5 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label className="mb-2 text-base" htmlFor="contact-name">
                  Full Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white p-4 text-base outline-none"
                  type="text"
                  placeholder="Enter Name"
                  required
                />
              </motion.div>

              {/* EMAIL */}
              <motion.div
                className="mb-5 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label className="mb-2 text-base" htmlFor="contact-email">
                  Email ID
                </label>

                <input
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border-none bg-white/80 p-4 text-base outline-none"
                  type="email"
                  placeholder="Enter Email ID"
                  required
                />
              </motion.div>

              {/* SUBJECT */}
              <motion.div
                className="mb-5 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label className="mb-2 text-base" htmlFor="contact-subject">
                  Subject of Interest
                </label>

                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border-none bg-white/80 p-4 text-base outline-none"
                  required
                >
                  <option value="">Select...</option>
                  <option value="Photography">Photography</option>
                  <option value="Photo Selection">Photo Selection</option>
                  <option value="Event Photography">Event Photography</option>
                  <option value="Other">Other</option>
                </select>
              </motion.div>

              {/* MESSAGE */}
              <motion.div
                className="mb-5 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="mb-2 text-base" htmlFor="contact-message">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[130px] w-full resize-y rounded-xl border-none bg-white/80 p-4 text-base outline-none"
                  placeholder="Tell us about your project or challenge..."
                  required
                />
              </motion.div>

              {/* SUBMIT BUTTON */}
              <motion.button
                className="w-full cursor-pointer rounded-xl border-none bg-[#111] p-4 text-base text-white"
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
              </motion.button>

              {/* STATUS */}
              {status && (
                <p className="mt-4 text-center" role="status">
                  {status}
                </p>
              )}
            </form>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="relative z-10 w-full flex-1 min-w-0"
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full text-white">
            <motion.button
              className="cursor-pointer rounded-full border border-white bg-black px-[25px] py-3 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
            >
              Contact
            </motion.button>

            <motion.h1
              className="my-6.25 text-[55px] max-[900px]:text-[38px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Reach out today
            </motion.h1>

            <motion.p
              className="max-w-137.5 text-[22px] leading-normal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Have a question or idea? We'd love to hear from you.
              Let's explore solutions we can create together.
            </motion.p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
