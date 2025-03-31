// src/components/Sidebar.jsx
import React from "react";

const LeftBar = ({ setPage }) => {
  return (
    <div className="h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <button onClick={() => setPage("dashboard")} className="block mb-3 w-full text-left px-4 py-2 hover:bg-gray-700">
        Dashboard
      </button>
      <button onClick={() => setPage("profile")} className="block mb-3 w-full text-left px-4 py-2 hover:bg-gray-700">
        Profile
      </button>
      <button onClick={() => setPage("settings")} className="block w-full text-left px-4 py-2 hover:bg-gray-700">
        Settings
      </button>
    </div>
  );
};

export default LeftBar;
