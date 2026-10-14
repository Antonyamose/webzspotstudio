
import React from "react";
import {
  Camera,
  Menu,
  Search,
  X,
  ArrowLeft,
} from "lucide-react";

const Navbar = ({
  search,
  setSearch,
  menuOpen,
  setMenuOpen,
}) => {
  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        h-[72px]
        bg-[#0B0B0B]
        border-b border-white/10
        text-white
        flex items-center justify-between
        px-4 sm:px-6 md:px-10
        shadow-lg
      "
    >
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">

        {/* BACK BUTTON */}
        <button
          type="button"
          onClick={handleBack}
          className="
            flex items-center justify-center
            h-10 w-10
            rounded-xl
            border border-white/15
            bg-white/5
            text-gray-300
            hover:bg-orange-500
            hover:text-black
            hover:border-orange-500
            transition-all duration-300
            cursor-pointer
          "
          title="Back to Website"
          aria-label="Back to Website"
        >
          <ArrowLeft size={20} />
        </button>

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <div
            className="
              bg-orange-500
              p-2
              rounded-lg
              text-white
            "
          >
            <Camera size={22} />
          </div>

          <div>
            <h1 className="font-bold text-base sm:text-lg">
              Webzspot Studio
            </h1>

            <p className="text-xs text-gray-400">
              Documentation
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">

        {/* DESKTOP SEARCH */}
        <div
          className="
            hidden md:flex
            items-center gap-3
            bg-[#1C1C1C]
            border border-white/10
            rounded-xl
            px-4 py-2.5
            focus-within:border-orange-500/60
            transition-colors duration-300
          "
        >
          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Search documentation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              bg-transparent
              outline-none
              text-sm
              w-40 lg:w-56
              text-white
              placeholder:text-gray-500
            "
          />
        </div>

        {/* MOBILE MENU */}
        <button
          type="button"
          className="
            md:hidden
            p-2
            rounded-lg
            hover:bg-white/10
            transition-colors
            cursor-pointer
          "
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>
    </header>
  );
};

export default Navbar;
