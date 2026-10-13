
import React, { useState } from "react";
import { Camera, Users, Sparkles, BookOpen } from "lucide-react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Maincontainer from "./components/Maincontainer";

const sections = [
  {
    title: "GETTING STARTED",
    items: ["Introduction", "Quick Start"],
  },
  {
    title: "PHOTOGRAPHERS",
    items: ["Create Studio", "Upload Photos", "Event Gallery"],
  },
  {
    title: "CLIENTS",
    items: [
      "View Gallery",
      "Select Favourites",
      "Clients",
      "Access Board",
    ],
  },
];

const App = () => {
  const [active, setActive] = useState("Introduction");
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const category = sections.find((section) =>
    section.items.includes(active)
  )?.title;

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <Navbar
        search={search}
        setSearch={setSearch}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-18 bg-black/40 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <Sidebar
        sections={sections}
        active={active}
        setActive={setActive}
        search={search}
        setSearch={setSearch}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Maincontainer
        active={active}
        setActive={setActive}
      />
    
    </div>
  );
};

export default App;
