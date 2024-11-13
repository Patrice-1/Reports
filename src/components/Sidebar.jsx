import React, { useState } from "react";

const Sidebar = ({ onReportSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 bg-gold text-black p-3 rounded-full shadow-luxury hover:bg-white hover:text-gold transition-all"
      >
        {isOpen ? "Close" : "Open"} Menu
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-black text-white p-6 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-3xl font-lobster mb-8 text-gold">Reports</h2>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => onReportSelect("revenue")}
              className="w-full text-left p-3 hover:bg-gold hover:text-black rounded transition-all"
            >
              Revenue Report
            </button>
          </li>
          <li>
            <button
              onClick={() => onReportSelect("services")}
              className="w-full text-left p-3 hover:bg-gold hover:text-black rounded transition-all"
            >
              Services Report
            </button>
          </li>
          <li>
            <button
              onClick={() => onReportSelect("performance")}
              className="w-full text-left p-3 hover:bg-gold hover:text-black rounded transition-all"
            >
              Performance Report
            </button>
          </li>
          <li>
            <button
              onClick={() => onReportSelect("customers")}
              className="w-full text-left p-3 hover:bg-gold hover:text-black rounded transition-all"
            >
              Top Customers Report
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
