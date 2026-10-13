
import React, { useEffect, useRef } from "react";
import s1 from "../assets/s1.png";
import v1 from "../assets/v1.mp4";

const CreateStudio = () => {

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
        Create Studio
      </h1>

      <p className="text-gray-500 mb-10">
        Learn how photographers set up their workspace.
      </p>

      {/* GETTING STARTED */}
      <h2 className="text-xl font-semibold mb-4">
        Getting Started
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Webzspot Studio provides photographers with a
        workspace to organize events, manage photographs,
        and deliver final images to their clients.
      </p>

      {/* WHY CREATE STUDIO */}
      <h2 className="text-3xl font-semibold mb-6">
        Why Create Studio?
      </h2>

      <p className="text-gray-600 leading-relaxed mb-10">
        Managing hundreds or thousands of event photographs
        manually can be time-consuming. Webzspot Studio
        simplifies this process by bringing photo
        organization, client selection, and delivery
        into a single workflow.
      </p>

      {/* REGISTER SECTION */}
      <div className="mb-10">

        <h2 className="text-3xl font-semibold mb-6">
          Register
        </h2>

        <ol className="space-y-6 text-gray-700 leading-relaxed">

          <li className="flex items-start gap-4">

            <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
              1
            </span>

            <p className="flex-1 pt-1">
              You need a Webzspot Studio account to get
              started. Visit{" "}
              <a
                href="https://webzspot-studio-verse.vercel.app/studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-all"
              >
                https://webzspot-studio-verse.vercel.app/studio
              </a>
            </p>

          </li>

          <li className="flex items-start gap-4">

            <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
              2
            </span>

            <p className="flex-1 pt-1">
              Sign in if you already have an account,
              or create a new account if you are a new user.
            </p>

          </li>

        </ol>

        {/* REGISTRATION IMAGE */}
        <img
          src={s1}
          alt="Webzspot Studio Registration"
          className="w-full rounded-xl mt-6"
        />

      </div>

      {/* CREATE NEW EVENT */}
      <div>

        <h2 className="text-3xl font-semibold mb-6">
          Create New Event
        </h2>

        <ol className="space-y-6 text-gray-700 leading-relaxed">

          {/* STEP 1 */}
          <li className="flex items-start gap-4">

            <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
              1
            </span>

            <p className="flex-1 pt-1">
              Once you are on the dashboard, locate
              the <strong>Create New Event</strong> button
              in the top-right corner of the screen.
            </p>

          </li>

          {/* STEP 2 */}
          <li className="flex items-start gap-4">

            <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
              2
            </span>

            <p className="flex-1 pt-1">
              Click the <strong>Create New Event</strong>{" "}
              button. A popup form will appear, allowing
              you to enter the event details.
            </p>

          </li>

          {/* STEP 3 */}
          <li className="flex items-start gap-4">

            <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
              3
            </span>

            <p className="flex-1 pt-1">
              Enter the necessary information, including
              the event name, date, venue, organizer details,
              and other required fields, as demonstrated
              in the tutorial video below.
            </p>

          </li>

          {/* STEP 4 */}
          <li className="flex items-start gap-4">

            <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
              4
            </span>

            <p className="flex-1 pt-1">
              After filling in the required fields,
              click the <strong>Create Event</strong>{" "}
              button. Your new event will be created
              and ready for photo management.
            </p>

          </li>

        </ol>





        {/* TUTORIAL VIDEO */}
        <div className="mt-6 w-full aspect-video overflow-hidden rounded-xl bg-black">
          <video
            ref={videoRef}
            src={v1}
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

export default CreateStudio;
