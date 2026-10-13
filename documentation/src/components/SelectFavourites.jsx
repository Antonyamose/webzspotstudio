import React, { useEffect, useRef } from "react";
import { Heart, Images, CheckCircle, Star } from "lucide-react";

import photoSelectionImage from "../assets/photo selection.png";
import photoSelectionVideo from "../assets/photo selection.mp4";

const SelectFavourites = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section>
      {/* MAIN HEADING */}
      <h1 className="text-4xl font-bold mb-4">
        Select Favourites
      </h1>

      <p className="text-gray-500 mb-10">
        Learn how to select, save, and manage your favourite photographs.
      </p>

      {/* GETTING STARTED */}
      <h2 className="text-xl font-semibold mb-4">
        Getting Started
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Webzspot Studio helps clients organize their preferred event
        photographs by selecting favourites from their gallery.
        This makes it easier to review selected images and keep
        favourite moments together in one place.
      </p>

      {/* WHY SELECT FAVOURITES */}
      <h2 className="text-3xl font-semibold mb-6">
        Why Select Favourites?
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Event galleries can contain hundreds or thousands of photographs.
        Selecting favourites helps you quickly identify the pictures
        you like most without repeatedly searching through the entire
        gallery. You can review your choices and update your selection
        whenever the gallery allows it.
      </p>

      {/* PHOTO SELECTION IMAGE */}
      <img
        src={photoSelectionImage}
        alt="Webzspot Studio photo selection interface"
        loading="lazy"
        className="w-full rounded-xl mb-10 border border-gray-200"
      />

      {/* FAVOURITE FEATURES */}
      <h2 className="text-3xl font-semibold mb-6">
        Favourite Photos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {/* MARK AS FAVOURITE */}
        <div className="border border-gray-200 rounded-xl p-6">
          <Heart className="text-orange-500 mb-4" size={24} />

          <h3 className="text-lg font-semibold mb-2">
            Mark as Favourite
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Select the favourite icon on a photograph to add it
            to your preferred photo collection.
          </p>
        </div>

        {/* VIEW FAVOURITES */}
        <div className="border border-gray-200 rounded-xl p-6">
          <Images className="text-orange-500 mb-4" size={24} />

          <h3 className="text-lg font-semibold mb-2">
            View Favourites
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Access your selected photographs together instead
            of searching through the complete event gallery.
          </p>
        </div>

        {/* REVIEW SELECTION */}
        <div className="border border-gray-200 rounded-xl p-6">
          <Star className="text-orange-500 mb-4" size={24} />

          <h3 className="text-lg font-semibold mb-2">
            Review Your Selection
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Review your chosen photographs and make changes
            whenever photo selection is available.
          </p>
        </div>

        {/* ORGANIZE PHOTOS */}
        <div className="border border-gray-200 rounded-xl p-6">
          <CheckCircle className="text-orange-500 mb-4" size={24} />

          <h3 className="text-lg font-semibold mb-2">
            Organize Your Photos
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Keep your preferred images organized for easier
            review and the next step in your photo workflow.
          </p>
        </div>
      </div>

      {/* HOW TO SELECT FAVOURITES */}
      <h2 className="text-3xl font-semibold mb-6">
        How to Select Favourites
      </h2>

      <ol className="space-y-6 text-gray-700 leading-relaxed mb-10">
        {/* STEP 1 */}
        <li className="flex items-start gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
            1
          </span>

          <p className="flex-1 pt-1">
            Open your event gallery using the link provided by
            your photographer.
          </p>
        </li>

        {/* STEP 2 */}
        <li className="flex items-start gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
            2
          </span>

          <p className="flex-1 pt-1">
            Browse through the photographs and click the favourite
            icon on the images you want to select.
          </p>
        </li>

        {/* STEP 3 */}
        <li className="flex items-start gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
            3
          </span>

          <p className="flex-1 pt-1">
            Open your favourites collection to review the
            photographs you have selected.
          </p>
        </li>

        {/* STEP 4 */}
        <li className="flex items-start gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
            4
          </span>

          <p className="flex-1 pt-1">
            Add or remove photographs as needed, depending on
            the selection features available in your gallery.
          </p>
        </li>
      </ol>

      {/* TUTORIAL VIDEO */}
      <h2 className="text-3xl font-semibold mb-6">
        Photo Selection Tutorial
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Watch the tutorial below to learn how to select your
        favourite photographs and review your selections.
      </p>

      {/* TUTORIAL VIDEO */}
      <div className="mt-6 w-full aspect-video overflow-hidden rounded-xl bg-black mb-10">
        <video
          ref={videoRef}
          src={photoSelectionVideo}
          controls
          muted
          playsInline
          loop
          preload="metadata"
          className="block h-full w-full object-contain "
        />
      </div>

      {/* FINAL SELECTION */}
      <div className="border border-gray-200 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <CheckCircle className="text-orange-500" size={24} />

          <h2 className="font-semibold text-xl">
            Final Selection
          </h2>
        </div>

        <p className="text-gray-600 leading-relaxed">
          Keep your preferred photographs organized and ready
          for the next step in your photo workflow.
        </p>
      </div>

      {/* TIP */}
      <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-3">
          Tip
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Select your favourite photographs while browsing the gallery.
          This makes it easier to find your preferred moments later
          without searching through every image again.
        </p>
      </div>
    </section>
  );
};

export default SelectFavourites;
