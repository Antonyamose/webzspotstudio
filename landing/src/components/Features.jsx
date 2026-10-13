
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Camera,
  Heart,
  Link as LinkIcon,
  Users,
  CreditCard,
  Lock,
  Check,
  Copy,
  Eye,
  EyeOff,
} from "lucide-react";

import MG1 from "../assets/MG1.mp4";
import MG2 from "../assets/MG2.mp4";
import MG3 from "../assets/MG3.mp4";
import MG4 from "../assets/MG4.mp4";
import MG5 from "../assets/MG5.mp4";
import MG6 from "../assets/MG6.mp4";
import MG7 from "../assets/MG7.mp4";

// PARENT ANIMATION
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// CARD ANIMATION
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

// FEATURES DATA
const featuresData = [
  {
    id: "smart-photos",
    icon: Camera,
    title: "Smart Photo Management",
    description:
      "Organize thousands of photos without the mess.",
    extraDescription:
      "Sort shoots into albums, tag by category, and find any image in seconds with fast filters and search.",
    tag: "Organization",
    demoType: "photos",
  },
  {
    id: "client-favourites",
    icon: Heart,
    title: "Client Favourites",
    description:
      "Let clients mark and save their favourite photos.",
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
    description:
      "Keep all your clients and events organized.",
    extraDescription:
      "Track every client, shoot date, and delivery status in one directory so nothing slips through the cracks.",
    tag: "CRM",
    demoType: "clients",
  },
  {
    id: "billing-invoicing",
    icon: CreditCard,
    title: "Billing & Invoicing",
    description:
      "Manage payments and invoices from one place.",
    extraDescription:
      "Create professional invoices, monitor payment progress, and see what's paid or pending at a glance.",
    tag: "Finance",
    demoType: "billing",
  },
  {
    id: "secure-galleries",
    icon: Lock,
    title: "Secure Galleries",
    description:
      "Give every client controlled access to their photos.",
    extraDescription:
      "Protect each gallery with a PIN so only the right people can view, favourite, or download their photos.",
    tag: "Security",
    demoType: "security",
  },
];

// PHOTO MANAGEMENT DEMO
const PhotoManagementDemo = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const photos = [
    { id: 1, tag: "Portrait", img: MG1 },
    { id: 2, tag: "Wedding", img: MG2 },
    { id: 3, tag: "Events", img: MG3 },
    { id: 4, tag: "Portrait", img: MG4 },
  ];

  const filtered =
    activeFilter === "All"
      ? photos
      : photos.filter(
          (photo) => photo.tag === activeFilter
        );

  return (
    <div className="rounded-2xl border border-gray-200/80 bg-white p-3 text-xs shadow-sm">
      <div className="mb-2.5 flex items-center justify-between border-b border-gray-100 pb-2">
        <div className="relative flex gap-1">
          {["All", "Wedding", "Portrait"].map(
            (filter) => (
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

                <span className="relative z-10">
                  {filter}
                </span>
              </button>
            )
          )}
        </div>

        <span className="font-mono text-[10px] text-gray-400">
          1,420 items
        </span>
      </div>

      <div className="grid grid-cols-4 gap-1.5">
        <AnimatePresence mode="popLayout">
          {filtered.slice(0, 4).map((photo) => (
            <motion.div
              layout
              key={photo.id}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 25,
              }}
              className="group relative aspect-square overflow-hidden rounded-lg border border-gray-100"
            >
              <video
                src={photo.img}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded bg-black/60 px-1 text-[9px] font-medium text-white">
                  {photo.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

// FAVOURITES DEMO
const FavouritesDemo = () => {
  const [faved, setFaved] = useState([1, 3]);

  const sampleImgs = [
    { id: 1, src: MG5 },
    { id: 2, src: MG6 },
    { id: 3, src: MG7 },
  ];

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
          {faved.length} / {sampleImgs.length} Picked
        </motion.span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {sampleImgs.map((img) => {
          const isFaved = faved.includes(img.id);

          return (
            <div
              key={img.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-100"
            >
              <video
                src={img.src}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />

              <motion.button
                whileTap={{ scale: 0.7 }}
                onClick={(e) =>
                  toggleFav(img.id, e)
                }
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

// EASY ACCESS DEMO
const EasyAccessDemo = () => {
  const [copied, setCopied] = useState(false);

  const shareUrl = "studio.app/gallery/sarah-alex";

  const handleCopy = async (e) => {
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(
        `https://${shareUrl}`
      );
    } catch {
      // Clipboard unavailable
    }

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="space-y-2 rounded-2xl border border-gray-200/80 bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between text-[11px] font-medium text-gray-500">
        <span>Instant Share Link</span>

        <span className="flex items-center gap-1 font-semibold text-emerald-600">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          Active
        </span>
      </div>

      <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-2">
        <LinkIcon className="h-4 w-4 shrink-0 text-[#FF7A0D]" />

        <span className="flex-1 truncate font-mono text-xs text-gray-700">
          {shareUrl}
        </span>

        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={handleCopy}
          className={`flex shrink-0 items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-medium text-white ${
            copied ? "bg-emerald-500" : "bg-black"
          }`}
        >
          {copied ? (
            <Check className="h-3 w-3" />
          ) : (
            <Copy className="h-3 w-3" />
          )}

          {copied ? "Copied!" : "Copy"}
        </motion.button>
      </div>
    </div>
  );
};

// CLIENT MANAGEMENT DEMO
const ClientManagementDemo = () => {
  const [activeClient, setActiveClient] = useState(0);

  const clients = [
    {
      name: "Lucas & Sarah",
      event: "Wedding Shoot",
      date: "Oct 12",
    },
    {
      name: "BrightLabs Inc.",
      event: "Commercial Shoot",
      date: "Oct 18",
    },
  ];

  return (
    <div className="space-y-2 rounded-2xl border border-gray-200/80 bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-100 pb-1 text-xs font-semibold">
        <span>Events Directory</span>

        <span className="rounded-full bg-purple-50 px-2 py-0.5 text-[10px] font-bold text-purple-600">
          2 Events
        </span>
      </div>

      <div className="space-y-1.5">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 2 }}
            onClick={(e) => {
              e.stopPropagation();
              setActiveClient(index);
            }}
            className={`flex cursor-pointer items-center justify-between rounded-xl border p-2 ${
              activeClient === index
                ? "border-[#FF7A0D] bg-orange-50/40"
                : "border-gray-100 bg-gray-50/50"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                {client.name[0]}
              </div>

              <div>
                <p className="text-xs font-semibold">
                  {client.name}
                </p>

                <p className="text-[10px] text-gray-500">
                  {client.event}
                </p>
              </div>
            </div>

            <span className="rounded-md border bg-white px-2 py-0.5 font-mono text-[10px]">
              {client.date}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// BILLING DEMO
const BillingInvoicingDemo = () => {
  const [paid, setPaid] = useState(true);

  return (
    <div className="space-y-2 rounded-2xl border border-gray-200/80 bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between text-xs">
        <div>
          <p className="font-mono text-[10px] uppercase text-gray-400">
            Invoice #INV-2026
          </p>

          <p className="text-sm font-bold">
            $2,450.00 USD
          </p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setPaid(!paid);
          }}
          className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${
            paid
              ? "bg-emerald-100 text-emerald-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {paid ? "✓ Paid" : "⌛ Pending"}
        </button>
      </div>

      <div>
        <div className="mb-1 flex justify-between text-[11px] text-gray-500">
          <span>Payment Progress</span>
          <span>{paid ? "100%" : "50%"}</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-gray-100">
          <motion.div
            animate={{
              width: paid ? "100%" : "50%",
            }}
            className={`h-full ${
              paid
                ? "bg-emerald-500"
                : "bg-[#FF7A0D]"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

// SECURITY DEMO
const SecureGalleriesDemo = () => {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <div className="space-y-2 rounded-2xl border border-gray-200/80 bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5">
          <Lock className="h-3.5 w-3.5" />
          <span className="font-semibold">
            PIN Access Protection
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLocked(!isLocked);
          }}
          className="flex items-center gap-1 text-[11px] font-medium text-[#FF7A0D]"
        >
          {isLocked ? (
            <Eye className="h-3 w-3" />
          ) : (
            <EyeOff className="h-3 w-3" />
          )}

          {isLocked ? "Reveal PIN" : "Lock PIN"}
        </button>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-2 font-mono text-xs">
        <span className="text-gray-500">
          Passcode:
        </span>

        <motion.span
          key={isLocked ? "locked" : "open"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-bold tracking-widest"
        >
          {isLocked ? "****" : "8492"}
        </motion.span>

        <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] text-emerald-600">
          Secure
        </span>
      </div>
    </div>
  );
};

// FEATURE CARD
const ScrollAnimatedCard = ({ feature }) => {
  const Icon = feature.icon;

  const renderDemo = () => {
    switch (feature.demoType) {
      case "photos":
        return <PhotoManagementDemo />;

      case "favourites":
        return <FavouritesDemo />;

      case "share":
        return <EasyAccessDemo />;

      case "clients":
        return <ClientManagementDemo />;

      case "billing":
        return <BillingInvoicingDemo />;

      case "security":
        return <SecureGalleriesDemo />;

      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
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
            whileHover={{
              scale: 1.1,
              rotate: 3,
            }}
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
        {renderDemo()}
      </div>
    </motion.div>
  );
};

// MAIN FEATURES COMPONENT
export default function Features() {
  return (
    <section className="my-20 md:my-28">
      {/* CONTAINER - MAX WIDTH 7XL */}
      <div className="container mx-auto max-w-7xl px-4 text-center">

        {/* FEATURES BADGE */}
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
          className="mb-10 inline-block rounded-lg bg-black px-4 py-2 font-medium text-white"
        >
          ✦ Features
        </motion.p>

        {/* HEADING */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="mx-auto mb-4 max-w-4xl text-3xl font-normal tracking-tight text-gray-900 md:text-6xl"
        >
          Everything You Need in{" "}
          <span className="text-[#FF7A0D]">
            One Studio
          </span>
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mx-auto mb-16 max-w-2xl text-lg font-medium text-gray-700 md:text-xl"
        >
          Streamline your photography business with
          powerful management, sharing, and invoicing
          tools.
        </motion.p>

        {/* FEATURE CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            grid grid-cols-1
            gap-8 text-left
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {featuresData.map((feature) => (
            <ScrollAnimatedCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
