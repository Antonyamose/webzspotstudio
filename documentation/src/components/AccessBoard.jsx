import React, { useEffect, useRef } from "react";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  ShieldCheck,
  Clock,
  RefreshCw,
  CheckCircle,
  Ban,
} from "lucide-react";

import accessBoard from "../assets/access board.png";
import accessboard from "../assets/access board.mp4";

const AccessBoard = () => {
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
        Access Board
      </h1>

      <p className="text-gray-500 mb-10">
        Learn how to manage client access, monitor event permissions,
        and control gallery availability from one place.
      </p>

      {/* GETTING STARTED */}
      <h2 className="text-xl font-semibold mb-4">
        Getting Started
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        The Client Access Board in Webzspot Studio helps photographers
        manage access to event galleries. It brings event information,
        client details, access status, and expiry dates together in
        one dashboard, making it easier to monitor who can access
        each event.
      </p>

      {/* WHY USE ACCESS BOARD */}
      <h2 className="text-3xl font-semibold mb-6">
        Why Use the Access Board?
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        When photographers manage multiple events and clients,
        tracking gallery permissions manually can become difficult.
        The Access Board provides an overview of active access,
        expired or revoked access, and event-level client assignments.
        This helps photographers review permissions and manage
        gallery availability more efficiently.
      </p>

      {/* ACCESS BOARD IMAGE */}
      <img
        src={accessBoard}
        alt="Webzspot Studio Client Access Board dashboard"
        loading="lazy"
        className="w-full rounded-xl mb-10 border border-gray-200"
      />

      {/* ACCESS BOARD FEATURES */}
      <h2 className="text-3xl font-semibold mb-6">
        Access Board Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {/* EVENTS */}
        <div className="border border-gray-200 rounded-xl p-6">
          <CalendarDays
            className="text-orange-500 mb-4"
            size={24}
          />

          <h3 className="text-lg font-semibold mb-2">
            Events Overview
          </h3>

          <p className="text-gray-600 leading-relaxed">
            View the events listed on the board and review the
            client access associated with each event.
          </p>
        </div>

        {/* CLIENTS */}
        <div className="border border-gray-200 rounded-xl p-6">
          <Users className="text-orange-500 mb-4" size={24} />

          <h3 className="text-lg font-semibold mb-2">
            Client Mapping
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Review which clients are associated with an event
            and check their gallery access information.
          </p>
        </div>

        {/* ACTIVE ACCESS */}
        <div className="border border-gray-200 rounded-xl p-6">
          <ShieldCheck
            className="text-orange-500 mb-4"
            size={24}
          />

          <h3 className="text-lg font-semibold mb-2">
            Active Access
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Monitor active client permissions and review the
            expiry dates configured for gallery access.
          </p>
        </div>

        {/* EXPIRED ACCESS */}
        <div className="border border-gray-200 rounded-xl p-6">
          <Clock className="text-orange-500 mb-4" size={24} />

          <h3 className="text-lg font-semibold mb-2">
            Revoked or Expired Access
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Review access records that have expired or been
            revoked, where supported by your account settings.
          </p>
        </div>
      </div>

      {/* HOW TO USE ACCESS BOARD */}
      <h2 className="text-3xl font-semibold mb-6">
        How to Manage Client Access
      </h2>

      <ol className="space-y-6 text-gray-700 leading-relaxed mb-10">
        {/* STEP 1 */}
        <li className="flex items-start gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
            1
          </span>

          <p className="flex-1 pt-1">
            Sign in to Webzspot Studio and select{" "}
            <strong>Access Board</strong> from the sidebar.
          </p>
        </li>

        {/* STEP 2 */}
        <li className="flex items-start gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
            2
          </span>

          <p className="flex-1 pt-1">
            Review the summary cards to see the number of events,
            clients, active access records, and revoked or expired
            records displayed on the dashboard.
          </p>
        </li>

        {/* STEP 3 */}
        <li className="flex items-start gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
            3
          </span>

          <p className="flex-1 pt-1">
            Locate the event card you want to manage. Review the
            associated client details and current access status.
          </p>
        </li>

        {/* STEP 4 */}
        <li className="flex items-start gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
            4
          </span>

          <p className="flex-1 pt-1">
            Check the expiry date shown for the client. If you
            need to change it, update the date using the available
            expiry field.
          </p>
        </li>

        {/* STEP 5 */}
        <li className="flex items-start gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
            5
          </span>

          <p className="flex-1 pt-1">
            Click <strong>Save</strong> after changing the expiry
            date. Use the available access controls to manage
            permissions when necessary.
          </p>
        </li>

        {/* STEP 6 */}
        <li className="flex items-start gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
            6
          </span>

          <p className="flex-1 pt-1">
            Click <strong>Refresh</strong> to reload the board
            and review the latest access information.
          </p>
        </li>
      </ol>

      {/* UNDERSTANDING ACCESS STATUS */}
      <h2 className="text-3xl font-semibold mb-6">
        Understanding Access Status
      </h2>

      <div className="space-y-4 mb-10">
        {/* ACTIVE */}
        <div className="flex items-start gap-4 border border-gray-200 rounded-xl p-5">
          <CheckCircle
            className="text-green-500 shrink-0"
            size={24}
          />

          <div>
            <h3 className="font-semibold mb-1">
              Active Access
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Represents access records currently marked as active.
              Check the displayed expiry date to understand the
              configured access period.
            </p>
          </div>
        </div>

        {/* EXPIRED */}
        <div className="flex items-start gap-4 border border-gray-200 rounded-xl p-5">
          <Clock
            className="text-orange-500 shrink-0"
            size={24}
          />

          <div>
            <h3 className="font-semibold mb-1">
              Expired Access
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Represents access that has passed its configured
              expiry date, according to the application's rules.
            </p>
          </div>
        </div>

        {/* REVOKED */}
        <div className="flex items-start gap-4 border border-gray-200 rounded-xl p-5">
          <Ban className="text-red-500 shrink-0" size={24} />

          <div>
            <h3 className="font-semibold mb-1">
              Revoked Access
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Represents access that has been withdrawn using
              the application's available access controls.
            </p>
          </div>
        </div>
      </div>

      {/* REFRESH INFORMATION */}
      <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mb-10">
        <div className="flex items-center gap-3 mb-3">
          <RefreshCw className="text-orange-500" size={24} />

          <h2 className="text-xl font-semibold">
            Refresh the Access Board
          </h2>
        </div>

        <p className="text-gray-600 leading-relaxed">
          Use the Refresh button at the top of the Access Board
          to reload the displayed information when you want to
          check for the latest client access details.
        </p>
      </div>

      {/* TUTORIAL VIDEO */}
      <h2 className="text-3xl font-semibold mb-6">
        Access Board Tutorial
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Watch the tutorial below to learn how to review event
        access, check client permissions, update expiry dates,
        and navigate the Access Board.
      </p>

      {/* TUTORIAL VIDEO */}
      <div className="mt-6 w-full aspect-video overflow-hidden rounded-xl bg-black mb-10">
        <video
          ref={videoRef}
          src={accessboard}
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
          Changes to expiry dates and access permissions depend
          on the features enabled in your Webzspot Studio account.
          Always save your changes and verify the displayed
          information after updating an access record.
        </p>
      </div>
    </section>
  );
};

export default AccessBoard;
