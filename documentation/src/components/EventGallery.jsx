
import React, { useEffect, useRef } from "react";
import s4 from "../assets/s4.png";
import v3 from "../assets/v3.mp4";

const EventGallery = () => {

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

  // ORANGE CIRCULAR NUMBER
  const StepNumber = ({ number }) => (
    <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
      {number}
    </span>
  );

  return (
    <section>

      {/* MAIN HEADING */}
      <h1 className="text-4xl font-bold mb-4">
        Event Gallery
      </h1>

      <p className="text-gray-500 mb-10">
        Organize, manage, and publish event photographs
        for your clients.
      </p>

      {/* INTRODUCTION */}
      <h2 className="text-xl font-semibold mb-4">
        Getting Started
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Webzspot Studio provides a dedicated Event Gallery
        where photographers can manage hundreds of event
        photographs in one place. Clients can browse the
        gallery, select their favourite photos, and access
        the final edited images.
      </p>

      {/* EVENT GALLERY */}
      <h2 className="text-3xl font-semibold mb-6">
        Event Gallery Overview
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        After uploading photographs, all the images will
        be displayed in the Event Gallery. Whether an
        event contains 100, 500, or more photographs,
        the gallery helps photographers organize and
        manage them efficiently.
      </p>

      {/* GALLERY IMAGE */}
      <img
        src={s4}
        alt="Webzspot Studio Event Gallery"
        className="w-full rounded-xl mb-10"
      />

      {/* STEPS */}
      <div>

        <h2 className="text-3xl font-semibold mb-6">
          How to Manage the Event Gallery
        </h2>

        <ol className="space-y-6 text-gray-700 leading-relaxed">

          {/* STEP 1 */}
          <li className="flex items-start gap-4">
            <StepNumber number={1} />

            <p className="flex-1 min-w-0 pt-1">
              <strong>View Uploaded Photographs:</strong>{" "}
              After uploading photos, navigate to the
              Event Gallery to view all the photographs
              associated with your event. The gallery
              can contain hundreds of images, depending
              on your subscription plan.
            </p>
          </li>

          {/* STEP 2 */}
          <li className="flex items-start gap-4">
            <StepNumber number={2} />

            <p className="flex-1 min-w-0 pt-1">
              <strong>Client Gallery Access:</strong>{" "}
              Clients can access their event gallery
              to browse and view the photographs
              uploaded by the photographer.
            </p>
          </li>

          {/* STEP 3 */}
          <li className="flex items-start gap-4">
            <StepNumber number={3} />

            <p className="flex-1 min-w-0 pt-1">
              <strong>Select Favourite Photos:</strong>{" "}
              Clients can select and save their favourite
              photographs from the gallery. These selections
              help the photographer identify the images
              that clients want to be edited or enhanced.
            </p>
          </li>

          {/* STEP 4 */}
          <li className="flex items-start gap-4">
            <StepNumber number={4} />

            <p className="flex-1 min-w-0 pt-1">
              <strong>Edit and Enhance Photographs:</strong>{" "}
              The photographer can view the photos selected
              by clients and edit or enhance them according
              to their requirements.
            </p>
          </li>

          {/* STEP 5 */}
          <li className="flex items-start gap-4">
            <StepNumber number={5} />

            <p className="flex-1 min-w-0 pt-1">
              <strong>Upload Edited Photographs:</strong>{" "}
              Once the editing process is complete, the
              photographer can upload the final edited
              photographs back to the Event Gallery
              for client viewing.
            </p>
          </li>

          {/* STEP 6 */}
          <li className="flex items-start gap-4">
            <StepNumber number={6} />

            <p className="flex-1 min-w-0 pt-1">
              <strong>Publish the Event:</strong>{" "}
              Locate the <strong>Publish Event</strong>{" "}
              button in the top-right corner of the
              Event Gallery. Click the button to publish
              the event photographs and make them
              available for clients to view.
            </p>
          </li>

        </ol>


        {/* TUTORIAL VIDEO */}
        <div className="mt-6 w-full aspect-video overflow-hidden rounded-xl bg-black">
          <video
            ref={videoRef}
            src={v3}
            controls
            muted
            playsInline
            loop
            preload="metadata"
            className="block h-full w-full object-contain"
          />
        </div>



      </div>

    </section>
  );
};

export default EventGallery;
