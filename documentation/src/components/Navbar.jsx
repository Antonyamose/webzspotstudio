
import React from "react";
import { Camera, Menu, Search, X } from "lucide-react";

const Navbar = ({search,setSearch,menuOpen,setMenuOpen}) => {

  return (
    
    <header className="fixed top-0 left-0 right-0 z-50 h-18 bg-[#111827] text-white flex items-center justify-between px-5 md:px-10">

      {/* LOGO */}
      <div className="flex items-center gap-3">

        <div className="bg-orange-500 p-2 rounded-lg">
          <Camera size={22} />
        </div>

        <div>
          <h1 className="font-bold text-lg">
            Webzspot Studio
          </h1>

          <p className="text-xs text-gray-400">
            Documentation
          </p>
        </div>

      </div>

      {/* DESKTOP SEARCH */}
      <div className="hidden md:flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-2">

        <Search size={17} className="text-gray-400" />

        <input
          type="text"
          placeholder="Search documentation..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none text-sm w-52 text-white placeholder:text-gray-400"
        />

      </div>

      {/* MOBILE MENU */}
      <button
        type="button"
        className="md:hidden p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

    </header>
  );
};

export default Navbar;
