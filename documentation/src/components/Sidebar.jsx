
import React from "react";

const Sidebar = ({sections,active,setActive,search,setSearch,menuOpen,setMenuOpen}) => {


  const filteredSections = sections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);


  const handleSelect = (item) => {
    setActive(item);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside
      className={`
        fixed top-18 left-0 bottom-0 z-40
        w-64 bg-gray-50 border-r border-gray-200
        overflow-y-auto p-6
        ${menuOpen ? "block" : "hidden"}
        md:block
      `}
    >

      {/* MOBILE SEARCH */}
      <div className="md:hidden mb-6">

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search documentation..."
          className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:border-orange-500"
        />

      </div>

      {/* SIDEBAR SECTIONS */}
      {filteredSections.map((section) => (

        <div key={section.title} className="mb-8">

          {/* CATEGORY TITLE */}
          <h3 className="text-xs font-semibold text-gray-400 mb-4">
            {section.title}
          </h3>

          {/* CATEGORY ITEMS */}
          <div className="flex flex-col gap-1">

            {section.items.map((item) => (

              <button
                key={item}
                type="button"
                onClick={() => handleSelect(item)}
                className={`
                  text-left px-3 py-2 rounded-lg text-sm
                  transition-colors duration-200
                  ${
                    active === item
                      ? "bg-orange-100 text-orange-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-200"
                  }
                `}
              >
                {item}
              </button>

            ))}

          </div>
        </div>

      ))}

      {/* NO SEARCH RESULTS */}
      {filteredSections.length === 0 && (
        <div className="flex flex-col justify-center items-center h-full">
            <p className="text-sm text-gray-500">No documentation found.</p>
        </div>
      )}

    </aside>
  );
};

export default Sidebar;
