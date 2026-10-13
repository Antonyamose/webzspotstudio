import React, { useEffect, useRef } from "react";
import { Images, Eye, Heart, Download } from "lucide-react";

import viewGalleryImage from "../assets/view gallery.png";
import viewGalleryVideo from "../assets/view gallery.mp4";

const ViewGallery = () => {
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
        View Gallery
      </h1>

      <p className="text-gray-500 mb-10">
        Learn how clients can browse, preview, and select photographs
        from their event gallery.
      </p>

      {/* GETTING STARTED */}
      <h2 className="text-xl font-semibold mb-4">
        Getting Started
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Webzspot Studio allows clients to access photographs uploaded
        by their photographer. Clients can browse event photos, view
        individual images, select their favourites, and download
        photographs when the photographer enables downloads.
      </p>

      {/* WHY VIEW GALLERY */}
      <h2 className="text-3xl font-semibold mb-6">
        Why View Gallery?
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Event galleries bring all your photographs together in one
        convenient place. Instead of searching through individual
        files, clients can explore their event photos, preview images,
        and choose their favourite moments for selection or download.
      </p>

      {/* GALLERY PHOTO - AFTER WHY VIEW GALLERY */}
      <img
        src={viewGalleryImage}
        alt="Webzspot Studio View Gallery interface"
        loading="lazy"
        className="w-full rounded-xl mb-10 border border-gray-200"
      />

      {/* GALLERY FEATURES */}
      <h2 className="text-3xl font-semibold mb-6">
        Gallery Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {/* BROWSE PHOTOS */}
        <div className="border border-gray-200 rounded-xl p-6">
          <Eye className="text-orange-500 mb-4" size={24} />

          <h3 className="text-lg font-semibold mb-2">
            Browse Photos
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Browse all photographs uploaded to your event gallery
            and explore your special moments.
          </p>
        </div>

        {/* SELECT FAVOURITES */}
        <div className="border border-gray-200 rounded-xl p-6">
          <Heart className="text-orange-500 mb-4" size={24} />

          <h3 className="text-lg font-semibold mb-2">
            Select Favourites
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Mark your preferred photographs to create a collection
            of images you would like to keep.
          </p>
        </div>

        {/* DOWNLOAD PHOTOS */}
        <div className="border border-gray-200 rounded-xl p-6">
          <Download className="text-orange-500 mb-4" size={24} />

          <h3 className="text-lg font-semibold mb-2">
            Download Photos
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Download your selected photographs when downloading
            is enabled for your event gallery.
          </p>
        </div>

        {/* VIEW FULL IMAGE */}
        <div className="border border-gray-200 rounded-xl p-6">
          <Images className="text-orange-500 mb-4" size={24} />

          <h3 className="text-lg font-semibold mb-2">
            View Full Image
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Open individual photographs to preview them in greater
            detail and see every special moment clearly.
          </p>
        </div>
      </div>

      {/* HOW TO VIEW YOUR GALLERY */}
      <h2 className="text-3xl font-semibold mb-6">
        How to View Your Gallery
      </h2>

      <ol className="space-y-6 text-gray-700 leading-relaxed mb-10">
        {/* STEP 1 */}
        <li className="flex items-start gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
            1
          </span>

          <p className="flex-1 pt-1">
            Open the gallery link shared by your photographer to
            access your event photographs.
          </p>
        </li>

        {/* STEP 2 */}
        <li className="flex items-start gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
            2
          </span>

          <p className="flex-1 pt-1">
            Browse through the available photographs and click an
            image to view it in detail.
          </p>
        </li>

        {/* STEP 3 */}
        <li className="flex items-start gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
            3
          </span>

          <p className="flex-1 pt-1">
            Select your favourite photographs if the photographer
            has enabled photo selection for your gallery.
          </p>
        </li>

        {/* STEP 4 */}
        <li className="flex items-start gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
            4
          </span>

          <p className="flex-1 pt-1">
            Download your chosen photographs if the download option
            is available for your event.
          </p>
        </li>
      </ol>

      {/* TUTORIAL VIDEO */}
      <h2 className="text-3xl font-semibold mb-6">
        View Gallery Tutorial
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Watch the tutorial below to understand how to access and
        browse photographs in your event gallery.
      </p>


      {/* TUTORIAL VIDEO */}
      <div className="mt-6 w-full aspect-video overflow-hidden rounded-xl bg-black mb-10">
        <video
          ref={videoRef}
          src={viewGalleryVideo}
          controls
          muted
          playsInline
          loop
          preload="metadata"
          className="block h-full w-full object-contain "
        />
      </div>


      {/* NOTE */}
      <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-3">
          Note
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Available features depend on the photographer's gallery
          settings. Some galleries may support viewing only, while
          others may also allow favourite selection and downloads.
        </p>
      </div>
    </section>
  );
};

export default ViewGallery;
