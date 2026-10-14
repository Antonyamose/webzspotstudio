
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Camera,
  Heart,
  Link as LinkIcon,
  Users,
  CreditCard,
  Lock,
} from "lucide-react";

// ============================================================
// VIDEO IMPORTS
// ============================================================

// Card 1 & Card 2 - Smart Photos and Favourites
import MG1 from "../assets/MG1.mp4";
import MG2 from "../assets/MG2.mp4";
import MG3 from "../assets/MG3.mp4";
import MG5 from "../assets/MG5.mp4";
import MG6 from "../assets/MG6.mp4";
import MG7 from "../assets/MG7.mp4";

// Card 3 - Easy Client Access
import C1 from "../assets/C1.mp4";
import C2 from "../assets/C2.mp4";
import C3 from "../assets/C3.mp4";

// Card 4 - Client Management
import D1 from "../assets/D1.mp4";
import D2 from "../assets/D2.mp4";
import D3 from "../assets/D3.mp4";

// Card 5 - Billing & Invoicing
import E1 from "../assets/E1.mp4";
import E2 from "../assets/E2.mp4";
import E3 from "../assets/E3.mp4";

// Card 6 - Secure Galleries
import F1 from "../assets/F1.mp4";
import F2 from "../assets/F2.mp4";
import F3 from "../assets/F3.mp4";

// ============================================================
// CARD VIDEO DATA
// ============================================================

const photoVideos = [
  { id: 1, tag: "Portrait", src: MG1 },
  { id: 2, tag: "Wedding", src: MG2 },
  { id: 3, tag: "Events", src: MG3 },
];

const favouriteVideos = [
  { id: 1, src: MG5 },
  { id: 2, src: MG6 },
  { id: 3, src: MG7 },
];

const ACCESS_VIDEOS = [C1, C2, C3];
const CLIENT_VIDEOS = [D1, D2, D3];
const BILLING_VIDEOS = [E1, E2, E3];
const SECURE_VIDEOS = [F1, F2, F3];

// ============================================================
// ANIMATIONS
// ============================================================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

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

// ============================================================
// FEATURES DATA
// ============================================================

const featuresData = [
  {
    id: "smart-photos",
    icon: Camera,
    title: "Smart Photo Management",
    description: "Organize thousands of photos without the mess.",
    extraDescription:
      "Sort shoots into albums, tag by category, and find any image in seconds with fast filters and search.",
    tag: "Organization",
    demoType: "photos",
  },
  {
    id: "client-favourites",
    icon: Heart,
    title: "Client Favourites",
    description: "Let clients mark and save their favourite photos.",
    extraDescription:
      "Clients heart their picks right in the gallery, so you get a clean shortlist for editing and album design without endless back-and-forth.",
    tag: "Interactivity",
    demoType: "favourites",
  },
  {
    id: "easy-access",
    icon: LinkIcon,
    title: "Easy Client Access",
    description:
      "Share a simple link instead of sending huge files through WhatsApp.",
    extraDescription:
      "Every gallery gets its own private link that works on any device. No downloads, no app installs, and no compressed images.",
    tag: "Sharing",
    demoType: "share",
  },
  {
    id: "client-management",
    icon: Users,
    title: "Client Management",
    description: "Keep all your clients and events organized.",
    extraDescription:
      "Track every client, shoot date, and delivery status in one directory so nothing slips through the cracks.",
    tag: "CRM",
    demoType: "clients",
  },
  {
    id: "billing-invoicing",
    icon: CreditCard,
    title: "Billing & Invoicing",
    description: "Manage payments and invoices from one place.",
    extraDescription:
      "Create professional invoices, monitor payment progress, and see what's paid or pending at a glance.",
    tag: "Finance",
    demoType: "billing",
  },
  {
    id: "secure-galleries",
    icon: Lock,
    title: "Secure Galleries",
    description: "Give every client controlled access to their photos.",
    extraDescription:
      "Protect each gallery with a PIN so only the right people can view, favourite, or download their photos.",
    tag: "Security",
    demoType: "security",
  },
];

// ============================================================
// REUSABLE VIDEO COMPONENT
// ============================================================

const VideoTile = ({ src, className = "" }) => (
  <video
    src={src}
    autoPlay
    loop
    muted
    playsInline
    className={`h-full w-full object-cover ${className}`}
  />
);

// ============================================================
// CARD 1 - SMART PHOTO MANAGEMENT
// Three videos with category filters
// ============================================================

const PhotoManagementDemo = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredVideos =
    activeFilter === "All"
      ? photoVideos
      : photoVideos.filter((video) => video.tag === activeFilter);

  return (
    <div className="rounded-2xl border border-gray-200/80 bg-white p-3 text-xs shadow-sm">
      <div className="mb-2.5 flex items-center justify-between border-b border-gray-100 pb-2">
        <div className="relative flex gap-1">
          {["All", "Wedding", "Portrait"].map((filter) => (
            <button
              key={filter}
              onClick={(e) => {
                e.stopPropagation();
                setActiveFilter(filter);
              }}
              className={`relative rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
                activeFilter === filter
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {activeFilter === filter && (
                <motion.div
                  layoutId="activeFilterPill"
                  className="absolute inset-0 rounded-full bg-[#FF7A0D]"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>

        <span className="font-mono text-[10px] text-gray-400">
          1,420 items
        </span>
      </div>

      {/* Three-column video grid */}
      <div className="grid grid-cols-3 gap-1.5">
        <AnimatePresence mode="popLayout">
          {filteredVideos.map((video) => (
            <motion.div
              layout
              key={video.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 25,
              }}
              className="group relative aspect-square overflow-hidden rounded-lg border border-gray-100"
            >
              <VideoTile src={video.src} />

              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded bg-black/60 px-1 text-[9px] font-medium text-white">
                  {video.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

// ============================================================
// CARD 2 - CLIENT FAVOURITES
// Interactive heart selection
// ============================================================

const FavouritesDemo = () => {
  const [faved, setFaved] = useState([1, 3]);

  const toggleFav = (id, e) => {
    e.stopPropagation();

    setFaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <div className="rounded-2xl border border-gray-200/80 bg-white p-3 shadow-sm">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="flex items-center gap-1 font-semibold text-gray-800">
          <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
          Client Heart Selection
        </span>

        <motion.span
          key={faved.length}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className="rounded-full bg-rose-50 px-2 py-0.5 text-[11px] font-bold text-rose-600"
        >
          {faved.length} / {favouriteVideos.length} Picked
        </motion.span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {favouriteVideos.map((video) => {
          const isFaved = faved.includes(video.id);

          return (
            <div
              key={video.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-100"
            >
              <VideoTile src={video.src} />

              <motion.button
                whileTap={{ scale: 0.7 }}
                onClick={(e) => toggleFav(video.id, e)}
                className="absolute right-1 top-1 rounded-full bg-white/90 p-1 shadow backdrop-blur-sm transition-transform hover:scale-110"
              >
                <Heart
                  className={`h-3.5 w-3.5 ${
                    isFaved
                      ? "fill-rose-500 text-rose-500"
                      : "text-gray-400"
                  }`}
                />
              </motion.button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ============================================================
// CARDS 3–6 - REUSABLE VIDEO GRID
// ============================================================

const VideoGridDemo = ({ videos }) => (
  <div className="rounded-2xl border border-gray-200/80 bg-white p-3 shadow-sm">
    <div className="grid grid-cols-3 gap-2">
      {videos.map((video, index) => (
        <div
          key={index}
          className="relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-100 bg-gray-50"
        >
          <VideoTile src={video} />
        </div>
      ))}
    </div>
  </div>
);

// ============================================================
// DEMO MAPPING
// Connect each feature to its demo
// ============================================================

const featureDemos = {
  photos: <PhotoManagementDemo />,
  favourites: <FavouritesDemo />,
  share: <VideoGridDemo videos={ACCESS_VIDEOS} />,
  clients: <VideoGridDemo videos={CLIENT_VIDEOS} />,
  billing: <VideoGridDemo videos={BILLING_VIDEOS} />,
  security: <VideoGridDemo videos={SECURE_VIDEOS} />,
};

// ============================================================
// REUSABLE FEATURE CARD
// ============================================================

const ScrollAnimatedCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
        group relative flex
        min-h-[480px] flex-col
        justify-between overflow-hidden
        rounded-[30px] border
        border-gray-200/80
        bg-gray-100/90 p-6
        shadow-sm transition-all
        duration-300 hover:shadow-xl
        md:min-h-[520px] md:p-8
      "
    >
      <div className="pointer-events-none absolute -inset-px rounded-[30px] bg-gradient-to-b from-transparent via-transparent to-[#FF7A0D]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-5 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black shadow-md"
          >
            <Icon className="h-5 w-5 text-white" />
          </motion.div>

          <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-bold text-gray-700">
            {feature.tag}
          </span>
        </div>

        <h3 className="mb-2 text-2xl font-semibold leading-tight text-gray-900">
          {feature.title}
        </h3>

        <p className="mb-3 text-base leading-relaxed text-gray-700">
          {feature.description}
        </p>

        <p className="mb-6 text-sm leading-relaxed text-gray-500">
          {feature.extraDescription}
        </p>
      </div>

      <div className="relative z-10 mt-auto pt-2">
        <div className="mb-5 h-px w-full bg-gray-300/60" />
        {featureDemos[feature.demoType] ?? null}
      </div>
    </motion.div>
  );
};

// ============================================================
// MAIN FEATURES SECTION
// ============================================================

export default function Features() {
  return (
    <section className="my-20 md:my-28">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        {/* Features badge */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 inline-block rounded-lg bg-black px-4 py-2 font-medium text-white"
        >
          ✦ Features
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mb-4 max-w-4xl text-3xl font-normal tracking-tight text-gray-900 md:text-6xl"
        >
          Everything You Need in{" "}
          <span className="text-[#FF7A0D]">One Studio</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-16 max-w-2xl text-lg font-medium text-gray-700 md:text-xl"
        >
          Streamline your photography business with powerful management,
          sharing, and invoicing tools.
        </motion.p>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-8 text-left sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuresData.map((feature) => (
            <ScrollAnimatedCard key={feature.id} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
