
import React, { useEffect, useRef } from "react";
import {
  Users,
  UserPlus,
  CalendarDays,
  ShieldCheck,
  Archive,
  CheckCircle,
} from "lucide-react";

import clientsImage from "../assets/clients.png";
import clientsVideo from "../assets/client.mp4";

const Client = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
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
        Clients
      </h1>

      <p className="text-gray-500 mb-10">
        Learn how to manage client accounts, organize event access,
        and keep track of client status in Webzspot Studio.
      </p>

      {/* GETTING STARTED */}
      <h2 className="text-xl font-semibold mb-4">
        Getting Started
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        The Clients section in Webzspot Studio helps photographers
        manage their clients and organize access to event galleries.
        You can add clients, review their associated events, and
        check whether their access is active or archived.
      </p>

      {/* WHY MANAGE CLIENTS */}
      <h2 className="text-3xl font-semibold mb-6">
        Why Manage Clients?
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Photographers often work with multiple clients and events.
        Managing client information in one place makes it easier
        to organize event access, track expiry dates, and identify
        active or archived client accounts. This helps keep your
        photo delivery workflow organized and efficient.
      </p>

      {/* CLIENTS IMAGE */}
      <img
        src={clientsImage}
        alt="Webzspot Studio Clients management dashboard"
        loading="lazy"
        className="w-full rounded-xl mb-10 border border-gray-200"
      />

      {/* CLIENT MANAGEMENT FEATURES */}
      <h2 className="text-3xl font-semibold mb-6">
        Client Management Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {/* ADD CLIENT */}
        <div className="border border-gray-200 rounded-xl p-6">
          <UserPlus className="text-orange-500 mb-4" size={24} />

          <h3 className="text-lg font-semibold mb-2">
            Add Client
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Add a new client using the Add Client option and provide
            the required client details to organize their account.
          </p>
        </div>

        {/* MANAGE EVENTS */}
        <div className="border border-gray-200 rounded-xl p-6">
          <CalendarDays
            className="text-orange-500 mb-4"
            size={24}
          />

          <h3 className="text-lg font-semibold mb-2">
            Manage Events
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Review the events associated with a client and manage
            their event access from the Clients section.
          </p>
        </div>

        {/* CLIENT STATUS */}
        <div className="border border-gray-200 rounded-xl p-6">
          <ShieldCheck
            className="text-orange-500 mb-4"
            size={24}
          />

          <h3 className="text-lg font-semibold mb-2">
            Check Client Status
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Identify active client accounts and review their
            current status in the dashboard.
          </p>
        </div>

        {/* ARCHIVED CLIENTS */}
        <div className="border border-gray-200 rounded-xl p-6">
          <Archive className="text-orange-500 mb-4" size={24} />

          <h3 className="text-lg font-semibold mb-2">
            View Archived Clients
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Use the Archived filter to view archived client records
            separately from active clients.
          </p>
        </div>
      </div>

      {/* HOW TO MANAGE CLIENTS */}
      <h2 className="text-3xl font-semibold mb-6">
        How to Manage Clients
      </h2>

      <ol className="space-y-6 text-gray-700 leading-relaxed mb-10">
        {/* STEP 1 */}
        <li className="flex items-start gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
            1
          </span>

          <p className="flex-1 pt-1">
            Open Webzspot Studio and navigate to the{" "}
            <strong>Clients</strong> section from the sidebar.
          </p>
        </li>

        {/* STEP 2 */}
        <li className="flex items-start gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
            2
          </span>

          <p className="flex-1 pt-1">
            Click the <strong>Add Client</strong> button and enter
            the required client information in the form.
          </p>
        </li>

        {/* STEP 3 */}
        <li className="flex items-start gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
            3
          </span>

          <p className="flex-1 pt-1">
            Review the client record to check associated events,
            email information, expiry dates, and account status.
          </p>
        </li>

        {/* STEP 4 */}
        <li className="flex items-start gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
            4
          </span>

          <p className="flex-1 pt-1">
            Use the <strong>Active</strong>, <strong>Archived</strong>,
            or <strong>All</strong> filters to find the relevant
            client records.
          </p>
        </li>
      </ol>

      {/* CLIENT STATUS */}
      <h2 className="text-3xl font-semibold mb-6">
        Understanding Client Status
      </h2>

      <div className="space-y-4 mb-10">
        <div className="flex items-start gap-4 border border-gray-200 rounded-xl p-5">
          <CheckCircle
            className="text-green-500 shrink-0"
            size={24}
          />

          <div>
            <h3 className="font-semibold mb-1">
              Active
            </h3>

            <p className="text-gray-600 leading-relaxed">
              View client records that are currently marked as active.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 border border-gray-200 rounded-xl p-5">
          <Archive
            className="text-orange-500 shrink-0"
            size={24}
          />

          <div>
            <h3 className="font-semibold mb-1">
              Archived
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Find client records that have been archived in the system.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 border border-gray-200 rounded-xl p-5">
          <Users
            className="text-orange-500 shrink-0"
            size={24}
          />

          <div>
            <h3 className="font-semibold mb-1">
              All Clients
            </h3>

            <p className="text-gray-600 leading-relaxed">
              View all client records together, regardless of the
              selected status filter.
            </p>
          </div>
        </div>
      </div>

      {/* CLIENTS VIDEO */}
      <h2 className="text-3xl font-semibold mb-6">
        Client Management Tutorial
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Watch the tutorial below to learn how to navigate the Clients
        section, add clients, and review their event access.
      </p>

      <video
        ref={videoRef}
        src={clientsVideo}
        controls
        muted
        playsInline
        loop
        preload="metadata"
        className="w-full rounded-xl mb-10 bg-black"
      />

      {/* NOTE */}
      <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-3">
          Note
        </h3>

        <p className="text-gray-600 leading-relaxed">
          The available client management options may depend on
          your Webzspot Studio account permissions and the features
          enabled in your workspace. Client expiry dates and event
          access should be reviewed regularly.
        </p>
      </div>
    </section>
  );
};


export default Client;
