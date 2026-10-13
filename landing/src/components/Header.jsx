import { motion, useScroll, useTransform } from "motion/react";
import bglanding from "../assets/bglanding.png";
import Navbar from "./Navbar";
import Headertext from "./Headertext";

const Header = () => {
  const { scrollY } = useScroll();

  // Parallax movement
  const bgY = useTransform(scrollY, [0, 600], [0, 180]);

  // Slight zoom
  const scale = useTransform(scrollY, [0, 600], [1.3, 1.2]);

  return (
    <section className="relative  overflow-hidden">

      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{
          y: bgY,
          scale: scale,
        }}
        className="absolute inset-0 z-0"
      >
        <img
          src={bglanding}
          alt="Webzpot Studio"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* DARK OVERLAY */}
      <div
        className="
          absolute inset-0 z-10
          bg-gradient-to-r
          from-black/80
          via-black/55
          to-black/35
        "
      />

      {/* NAVBAR + HERO */}
      <div className="relative z-50">
        <Navbar />
        <Headertext />
      </div>

    </section>
  );
};

export default Header;