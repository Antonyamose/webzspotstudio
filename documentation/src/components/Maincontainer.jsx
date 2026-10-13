
import React from "react";
import Introduction from "./Introduction";
import QuickStart from "./QuickStart";
import Photographer from "./Photographer";
import Client from "./Client";

const Maincontainer = ({ active, setActive }) => {

  const category =
    ["Introduction", "Quick Start"].includes(active)
      ? "Getting Started"
      : ["Create Studio", "Upload Photos", "Event Gallery"].includes(active)
      ? "Photographers"
      : "Clients";

  return (
    <main className="pt-28 pb-16 px-6 md:pl-72 md:pr-12 lg:pr-24">

      <div className="max-w-4xl mx-auto">

        {/* BREADCRUMB */}
        <p className="text-sm text-gray-500 mb-5">
          {category} / {active}
        </p>

        {/* DOCUMENTATION PAGES */}
        {active === "Introduction" && (
          <Introduction setActive={setActive} />
        )}

        {active === "Quick Start" && (
          <QuickStart />
        )}

        {category === "Photographers" && (
          <Photographer active={active} />
        )}

        {category === "Clients" && (
          <Client active={active} />
        )}

      </div>

    </main>
  );
};

export default Maincontainer;
