
import React from "react";
import {
  Camera,
  Users,
  Images,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const Introduction = () => {
  return (
    <section className="w-full">

      {/* MAIN HEADING */}
      <h1 className="text-4xl font-bold mb-4">
        Introduction
      </h1>

      <p className="text-gray-500 mb-10">
        Welcome to Webzspot Studio Documentation.
      </p>

      {/* INTRODUCTION */}
      <div className="mb-10">

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-orange-100 text-orange-600 p-3 rounded-xl">
            <Camera size={26} />
          </div>

          <h2 className="text-2xl font-semibold">
            What is Webzspot Studio?
          </h2>
        </div>

        <p className="text-gray-600 leading-relaxed mb-5">
          Webzspot Studio is an AI-powered photography
          management and photo delivery platform designed
          for photographers and their clients.
          It provides a centralized workspace to organize
          event photographs, manage client selections,
          and deliver memorable moments effortlessly.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Whether you're managing a wedding, birthday,
          corporate event, or any special occasion,
          Webzspot Studio makes the entire photo
          management and delivery experience simpler,
          faster, and more convenient.
        </p>

      </div>

      {/* PURPOSE */}
      <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-xl mb-10">

        <h2 className="text-xl font-semibold mb-3">
          Our Purpose
        </h2>

        <p className="text-gray-700 leading-relaxed">
          To simplify event photography management
          by connecting photographers and clients
          through one organized, efficient, and
          user-friendly platform.
        </p>

      </div>

      {/* WHO IS IT FOR */}
      <h2 className="text-3xl font-semibold mb-6">
        Who Is Webzspot Studio For?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

        {/* PHOTOGRAPHERS */}
        <div className="border border-gray-200 rounded-xl p-6">

          <div className="bg-orange-100 text-orange-600 w-fit p-3 rounded-xl mb-4">
            <Camera size={24} />
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Photographers
          </h3>

          <p className="text-gray-600 leading-relaxed">
            A dedicated space to manage event galleries,
            organize photographs, track client favourites,
            and deliver edited images.
          </p>

        </div>

        {/* CLIENTS */}
        <div className="border border-gray-200 rounded-xl p-6">

          <div className="bg-orange-100 text-orange-600 w-fit p-3 rounded-xl mb-4">
            <Users size={24} />
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Clients
          </h3>

          <p className="text-gray-600 leading-relaxed">
            An easy way to explore event photographs,
            find memorable moments, select favourites,
            and receive final edited photos.
          </p>

        </div>

      </div>

      {/* FINAL MESSAGE */}
      <div className="bg-gray-900 text-white rounded-xl p-6 md:p-8">

        <div className="flex items-center gap-3 mb-4">
          <Sparkles size={24} className="text-orange-400" />

          <h2 className="text-xl font-semibold">
            Photography Made Simple
          </h2>
        </div>

        <p className="text-gray-300 leading-relaxed">
          From capturing special moments to delivering
          the final photographs, Webzspot Studio brings
          photographers and clients together in one
          seamless digital experience.
        </p>

      </div>

    </section>
  );
};

export default Introduction;
