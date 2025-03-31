// src/App.jsx
import React, { useState } from "react";
import LeftBar from "./LeftBar";
import Dashboard from "./DashboardPages/Dashboard";
import Profile from "./DashboardPages/Profile";
import Settings from "./DashboardPages/Settings";

const Home = () => {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="flex h-screen">
      {/* Sidebar with fixed width */}
      <LeftBar setPage={setPage} />

      {/* Right bar taking full remaining space */}
      <div className="flex-1 bg-gray-100 p-5">
        {page === "dashboard" && <Dashboard />}
        {page === "profile" && <Profile />}
        {page === "settings" && <Settings />}
      </div>
    </div>
  );
};

export default Home;
