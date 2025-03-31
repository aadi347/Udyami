// src/pages/Dashboard.jsx
import React, { useState } from "react";

const Dashboard = () => {
	const [selectedInvoices, setSelectedInvoices] = useState([]);

	const invoices = [
		{
			id: 1,
			name: "Basic Plan - Dec 2024",
			amount: "USD $10.00",
			date: "Dec 1, 2022",
			status: "Paid",
		},
		{
			id: 2,
			name: "Basic Plan - Nov 2024",
			amount: "USD $10.00",
			date: "Nov 1, 2022",
			status: "Paid",
		},
		{
			id: 3,
			name: "Basic Plan - Oct 2024",
			amount: "USD $10.00",
			date: "Oct 1, 2022",
			status: "Paid",
		},
		{
			id: 4,
			name: "Basic Plan - Sep 2024",
			amount: "USD $10.00",
			date: "Sep 1, 2022",
			status: "Paid",
		},
		{
			id: 5,
			name: "Basic Plan - Aug 2024",
			amount: "USD $10.00",
			date: "Aug 1, 2022",
			status: "Paid",
		},
		{
			id: 6,
			name: "Basic Plan - Jul 2024",
			amount: "USD $10.00",
			date: "Jul 1, 2022",
			status: "Paid",
		},
		{
			id: 7,
			name: "Basic Plan - Jun 2024",
			amount: "USD $10.00",
			date: "Jun 1, 2022",
			status: "Paid",
		},
	];

	const toggleInvoice = (id) => {
		if (selectedInvoices.includes(id)) {
			setSelectedInvoices(
				selectedInvoices.filter((invoiceId) => invoiceId !== id),
			);
		} else {
			setSelectedInvoices([...selectedInvoices, id]);
		}
	};

	const toggleAllInvoices = () => {
		if (selectedInvoices.length === invoices.length) {
			setSelectedInvoices([]);
		} else {
			setSelectedInvoices(invoices.map((invoice) => invoice.id));
		}
	};

	return (
		<div className="mx-auto p-6 font-sans ">
			{/* Header */}
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-bold text-gray-800">
					Bihar Laghu Udyami Yojana
				</h1>
				<div className="flex items-center gap-4">
					<button type="button" className="p-2 rounded-full hover:bg-gray-100">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-gray-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-labelledby="notificationBellIcon"
						>
							<title id="notificationBellIcon">Notification Bell</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							/>
						</svg>
					</button>
					<div className="relative">
						<input
							type="text"
							placeholder="Search"
							className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 w-64 focus:outline-none focus:ring-2 focus:ring-gray-200"
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-gray-400 absolute left-3 top-2.5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-labelledby="searchIcon"
						>
							<title id="searchIcon">Search Icon</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>
				</div>
			</div>

			{/* Stat Cards */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
				{/* Card 1 */}
				<div className="bg-slate-200/60 p-6 rounded-xl hover:bg-blue-200/60 transition duration-200">
					<div className="flex flex-col h-full">
						<div className="mb-4">
							<div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 text-blue-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-labelledby="addIcon"
								>
									<title id="addIcon">Add Icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 6v6m0 0v6m0-6h6m-6 0H6"
									/>
								</svg>
							</div>
						</div>
						<div className="text-sm text-gray-600 mb-1">My Deal</div>
						<div className="text-2xl font-bold mb-4">Add Batch</div>
						<div className="mt-auto">
							<p className="text-xs text-red-500 flex gap-1">
								<span className="mr-1">↗</span>
								<h1 className="text-gray-900">Your short message goes here</h1>
							</p>
						</div>
					</div>
				</div>

				{/* Card 2 */}
				<div className="bg-slate-200/60 p-6 rounded-xl hover:bg-blue-200/60 transition duration-200">
					<div className="flex flex-col h-full">
						<div className="mb-4">
							<div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 text-blue-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-labelledby="starIcon"
								>
									<title id="starIcon">Star Icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
									/>
								</svg>
							</div>
						</div>
						<div className="text-sm text-gray-600 mb-1">My Batches</div>
						<div className="text-2xl font-bold mb-4">06</div>
						<div className="mt-auto">
							<p className="text-xs text-red-500 flex gap-1">
								<span className="mr-1">↗</span>
								<h1 className="text-gray-900">Your short message goes here</h1>
							</p>
						</div>
					</div>
				</div>

				{/* Card 3 */}
				<div className="bg-slate-200/60 p-6 rounded-xl hover:bg-blue-200/60 transition duration-200">
					<div className="flex flex-col h-full">
						<div className="mb-4">
							<div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 text-blue-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-labelledby="buildingIcon"
								>
									<title id="buildingIcon">Building Icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
									/>
								</svg>
							</div>
						</div>
						<div className="text-sm text-gray-600 mb-1">
							Total Student Enrolled
						</div>
						<div className="text-2xl font-bold mb-4">18</div>
						<div className="mt-auto">
							<p className="text-xs text-red-500 flex gap-1">
								<span className="mr-1">↗</span>
								<h1 className="text-gray-900">Your short message goes here</h1>
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Billing History */}
			<div>
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-bold text-gray-800">Batch history</h2>
					<div className="flex gap-3">
						<button
							type="button"
							className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-gray-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-labelledby="filterIcon"
							>
								<title id="filterIcon">Filter Icon</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
								/>
							</svg>
							Filter
						</button>
						<button
							type="button"
							className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-gray-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-labelledby="downloadIcon"
							>
								<title id="downloadIcon">Download Icon</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
								/>
							</svg>
							Download all
						</button>
					</div>
				</div>

				{/* Table */}
				<div className="border border-gray-200 rounded-lg overflow-hidden">
					{/* Table Header */}
					<div className="grid grid-cols-12 bg-gray-50 py-3 px-4 border-b">
						<div className="col-span-1">
							<input
								type="checkbox"
								className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
								checked={selectedInvoices.length === invoices.length}
								onChange={toggleAllInvoices}
							/>
						</div>
						<div className="col-span-4 font-medium text-gray-700 flex items-center gap-1">
							Invoice
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4 text-gray-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-labelledby="sortIcon"
							>
								<title id="sortIcon">Sort Icon</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</div>
						<div className="col-span-3 font-medium text-gray-700">Amount</div>
						<div className="col-span-2 font-medium text-gray-700">Date</div>
						<div className="col-span-2 font-medium text-gray-700">Status</div>
					</div>

					{/* Table Body */}
					{invoices.map((invoice) => (
						<div
							key={invoice.id}
							className="grid grid-cols-12 py-4 px-4 border-b hover:bg-gray-50"
						>
							<div className="col-span-1">
								<input
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
									checked={selectedInvoices.includes(invoice.id)}
									onChange={() => toggleInvoice(invoice.id)}
								/>
							</div>
							<div className="col-span-4 text-gray-800">{invoice.name}</div>
							<div className="col-span-3 text-gray-800">{invoice.amount}</div>
							<div className="col-span-2 text-gray-800">{invoice.date}</div>
							<div className="col-span-1 text-gray-800">
								<span className="inline-flex items-center gap-1 text-purple-700">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-labelledby={`checkIcon-${invoice.id}`}
									>
										<title id={`checkIcon-${invoice.id}`}>Check Icon</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									{invoice.status}
								</span>
							</div>
							<div className="col-span-1 flex justify-end">
								<button
									type="button"
									className="p-1 rounded-full hover:bg-gray-200"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 text-gray-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-labelledby={`refreshIcon-${invoice.id}`}
									>
										<title id={`refreshIcon-${invoice.id}`}>Refresh Icon</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
										/>
									</svg>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
