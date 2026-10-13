
import React from "react";
import {
  Camera,
  Upload,
  Images,
  Heart,
  Sparkles,
  Download,
  ArrowRight,
  CheckCircle2,
  Users,
  BookOpen,
  Rocket,
} from "lucide-react";

const QuickStart = ({ setActive }) => {
  const steps = [
    {
      title: "Create Your Event",
      description:
        "Sign in to Webzspot Studio and create a new event by entering the event name, date, venue, and organizer details.",
      icon: Camera,
    },
    {
      title: "Upload Event Photos",
      description:
        "Upload photographs from your device using the browse option or drag-and-drop feature, according to your subscription plan.",
      icon: Upload,
    },
    {
      title: "Publish Event Gallery",
      description:
        "Manage uploaded photographs in the event gallery and publish the event to make photos accessible to clients.",
      icon: Images,
    },
    {
      title: "Client Views Gallery",
      description:
        "Clients can access the published event gallery and browse photographs from their event.",
      icon: Users,
    },
    {
      title: "Select Favourite Photos",
      description:
        "Clients can select and save their favourite photographs for the photographer to review.",
      icon: Heart,
    },
    {
      title: "Edit and Enhance",
      description:
        "Photographers review the selected photos, edit or enhance them, and upload the final versions to the event gallery.",
      icon: Sparkles,
    },
    {
      title: "Download Final Photos",
      description:
        "Clients can view and download their final photographs when they are available for download.",
      icon: Download,
    },
  ];

  const photographerSteps = [
    "Register or sign in to your account.",
    "Create a new photography event.",
    "Upload event photographs.",
    "Manage and publish the event gallery.",
    "Review client favourite selections.",
    "Edit, enhance, and deliver final photos.",
  ];

  const clientSteps = [
    "Access the published event gallery.",
    "Browse available event photographs.",
    "Use AI Photo Search to find personal photos.",
    "Select and save favourite photographs.",
    "View and download final edited photos.",
  ];

  return (
    <section className="w-full">

      {/* MAIN HEADING */}
      <h1 className="text-4xl font-bold mb-4">
        Quick Start
      </h1>

      <p className="text-gray-500 mb-10">
        Get started with Webzspot Studio in a few simple steps.
      </p>

      {/* INTRODUCTION */}
      <h2 className="text-xl font-semibold mb-4">
        Getting Started
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Webzspot Studio simplifies event photography
        management by connecting photographers and
        clients through a single platform. From creating
        an event and uploading photographs to selecting
        favourites and delivering edited images, the
        entire workflow can be managed in one place.
      </p>

      {/* OVERVIEW */}
      <div className="border border-orange-200 bg-orange-50 rounded-xl p-6 mb-10">

        <div className="flex items-center gap-3 mb-4">
          <Rocket size={24} className="text-orange-600" />

          <h3 className="text-xl font-semibold">
            Before You Begin
          </h3>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Photographers need a Webzspot Studio account
          to create and manage events. Once an event
          is created, photographs can be uploaded,
          organized, and published for clients.
        </p>

        <a
          href="https://webzspot-studio-verse.vercel.app/studio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-5 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-medium transition-colors"
        >
          Open Webzspot Studio
          <ArrowRight size={18} />
        </a>

      </div>

      {/* STEP BY STEP WORKFLOW */}
      <h2 className="text-3xl font-semibold mb-6">
        Step-by-Step Workflow
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Follow these steps to understand how photographs
        move from the photographer to the client.
      </p>

      <div className="space-y-4 mb-10">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={index}
              className="group border border-gray-200 rounded-xl p-5 md:p-6 hover:border-orange-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-4">

                {/* STEP NUMBER */}
                <div className="flex-shrink-0 w-11 h-11 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* CONTENT */}
                <div className="flex-1 min-w-0">

                  <div className="flex items-center gap-2 mb-2">
                    <Icon
                      size={20}
                      className="text-orange-500 flex-shrink-0"
                    />

                    <h3 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                </div>

              </div>
            </div>
          );
        })}

      </div>

      {/* USER WORKFLOWS */}
      <h2 className="text-3xl font-semibold mb-6">
        Choose Your Workflow
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Webzspot Studio provides different features
        for photographers and clients.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">

        {/* PHOTOGRAPHERS */}
        <div className="border border-gray-200 rounded-xl p-6">

          <div className="flex items-center gap-3 mb-5">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-xl">
              <Camera size={23} />
            </div>

            <h3 className="text-xl font-semibold">
              For Photographers
            </h3>
          </div>

          <ul className="space-y-4">
            {photographerSteps.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-600"
              >
                <CheckCircle2
                  size={19}
                  className="text-orange-500 mt-1 flex-shrink-0"
                />

                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>

        {/* CLIENTS */}
        <div className="border border-gray-200 rounded-xl p-6">

          <div className="flex items-center gap-3 mb-5">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-xl">
              <Users size={23} />
            </div>

            <h3 className="text-xl font-semibold">
              For Clients
            </h3>
          </div>

          <ul className="space-y-4">
            {clientSteps.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-600"
              >
                <CheckCircle2
                  size={19}
                  className="text-orange-500 mt-1 flex-shrink-0"
                />

                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>

      </div>

      {/* AI PHOTO SEARCH */}
      <h2 className="text-3xl font-semibold mb-6">
        AI-Powered Photo Search
      </h2>

      <div className="border border-gray-200 rounded-xl p-6 mb-10">

        <div className="flex items-center gap-3 mb-4">
          <Sparkles size={24} className="text-orange-500" />

          <h3 className="text-xl font-semibold">
            Find Your Photos Faster
          </h3>
        </div>

        <p className="text-gray-600 leading-relaxed mb-5">
          Instead of manually searching through hundreds
          of event photographs, clients can use
          AI-powered photo search to find images
          containing their face. This makes browsing
          large event galleries easier and more convenient.
        </p>

        <button
          type="button"
          onClick={() => setActive?.("AI Photo Search")}
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:underline cursor-pointer"
        >
          Explore AI Photo Search
          <ArrowRight size={18} />
        </button>

      </div>

      {/* DOCUMENTATION GUIDE */}
      <div className="bg-gray-900 text-white rounded-xl p-6 md:p-8">

        <div className="flex items-center gap-3 mb-4">
          <BookOpen size={25} className="text-orange-400" />

          <h2 className="text-2xl font-semibold">
            Explore the Documentation
          </h2>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">
          Use the sidebar to explore detailed guides
          for creating events, uploading photos,
          managing galleries, selecting favourites,
          using AI Photo Search, and downloading
          final photographs.
        </p>

        <button
          type="button"
          onClick={() => setActive?.("Create Studio")}
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-lg font-medium transition-colors cursor-pointer"
        >
          Start with Create Studio
          <ArrowRight size={18} />
        </button>

      </div>

    </section>
  );
};

export default QuickStart;
