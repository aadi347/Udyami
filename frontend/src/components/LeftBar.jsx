import React, { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoSettings, IoLogOut } from "react-icons/io5";
import { RiLoginCircleLine } from "react-icons/ri";


const LeftBar = ({ setPage }) => {
  const [activePage, setActivePage] = useState("dashboard"); // Track active page

  const handleClick = (page) => {
    setPage(page);
    setActivePage(page);
  };

  return (
    <div className="w-2xs h-screen bg-slate-50 text-white p-5">
      <h2 className="text-xl text-gray-700 font-bold px-4 mb-2 mt-2">Udyami Portal</h2>
      <p className="text-gray-600 border-gray-200 mb-4 text-xs border-b px-4 py-3">
      Udyami Portal empowers entrepreneurs with insights, resources, and tools for business growth.
      </p>

      {/* Dashboard Button */}
      <button
        onClick={() => handleClick("dashboard")}
        className={`flex items-center gap-2 mb-3 w-full text-left rounded-md px-4 py-2 ${
          activePage === "dashboard" ? "bg-[#2ec4b6] shadow-[0_4px_10px_#2ec4b6]" : "bg-transparent text-gray-700"
        } hover:bg-gray-200`}
      >
        <LuLayoutDashboard size={20} />
        <span>Dashboard</span>
      </button>

      {/* Profile Button */}
      <button
        onClick={() => handleClick("profile")}
        className={`flex items-center gap-2 mb-3 w-full text-left px-4 py-2 rounded-md ${
          activePage === "profile" ? "bg-[#2ec4b6] shadow-[0_4px_10px_#2ec4b6]" : "bg-transparent text-gray-700"
        } hover:bg-gray-200`}
      >
        <RiLoginCircleLine size={20} />
        <span>Login</span>
      </button>

      {/* Settings Button */}
      <button
        onClick={() => handleClick("settings")}
        className={`flex items-center gap-2 w-full rounded-md text-left px-4 py-2 ${
          activePage === "settings" ? "bg-[#2ec4b6] shadow-[0_4px_10px_#2ec4b6]" : "bg-transparent text-gray-700"
        } hover:bg-gray-200`}
      >
        <IoSettings size={20} />
        <span>Settings</span>
      </button>

      <p className="text-gray-200 mb-4 text-xs border-b px-4 py-3 mt-5"></p>

      {/* Logout Button (No active state for logout) */}
      <button
        className={`flex items-center gap-2 w-full rounded-md text-left px-4 py-2 ${
          activePage === "settings" ? "bg-[#2ec4b6] shadow-[0_4px_10px_#2ec4b6]" : "bg-transparent text-gray-700"
        } hover:bg-gray-200`}
      >
        <IoLogOut size={20} />
        <span>Log out</span>
      </button>
    </div>
  );
};

export default LeftBar;
