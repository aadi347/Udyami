// src/App.jsx
import React, { useState } from "react";
import LeftBar from "./LeftBar";
import Dashboard from "./DashboardPages/Dashboard";
import Profile from "./DashboardPages/Profile";
import Settings from "./DashboardPages/Settings";

const Home = () => {
  const [page, setPage] = useState("dashboard");

  return (
			<div className="flex h-screen  overflow-hidden">
				{/* Sidebar with fixed width */}
				<div className="w-1/5 overflow-hidden">
					<LeftBar setPage={setPage} />
				</div>

				{/* Right bar taking full remaining space */}
				<div className="flex-1 w-screen bg-gray-100 p-5 overflow-y-auto">
					{page === "dashboard" && <Dashboard />}
					{page === "profile" && <Profile />}
					{page === "settings" && <Settings />}
				</div>
			</div>
		);
};

export default Home;
