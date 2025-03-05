"use client";
import { useState } from "react";
import Image from "next/image";
import { Search, Filter } from "lucide-react";

export default function AdminDashboard() {
  const [currentPage] = useState(2); // Example: Active page is 2

  const serviceCenters = [
    { id: "#SC-0001", name: "Speed Motors", email: "mariarodriguez@gmail.com", phone: "+1 (861) 623-4643", address: "456 Ocean Avenue, Miami, FL 12345" },
    { id: "#SC-0002", name: "AutoFix Hub", email: "juan.rodriguez@email.com", phone: "+1 (861) 623-4643", address: "234 Oak Street, Flat 7" },
    { id: "#SC-0003", name: "Rapid Repairs", email: "mariarodriguez@gmail.com", phone: "+1 (861) 623-4643", address: "234 Oak Street, Flat 7" },
    { id: "#SC-0004", name: "NextGen Motors", email: "juan.rodriguez@email.com", phone: "+1 (861) 623-4643", address: "456 Ocean Avenue, Miami, FL 12345" },
    { id: "#SC-0005", name: "Prime AutoCare", email: "mariarodriguez@gmail.com", phone: "+1 (861) 623-4643", address: "234 Oak Street, Flat 7" },
    { id: "#SC-0006", name: "Elite Vehicle Care", email: "mariarodriguez@gmail.com", phone: "+1 (861) 623-4643", address: "234 Oak Street, Flat 7" },
    { id: "#SC-0007", name: "TurboTune Auto", email: "juan.rodriguez@email.com", phone: "+1 (861) 623-4643", address: "456 Ocean Avenue, Miami, FL 12345" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <Image src="/profile.jpg" alt="Admin" width={40} height={40} className="rounded-full" />
                  </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="text-lg font-semibold">Customers</h3>
          <p className="text-2xl font-bold">40,689</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="text-lg font-semibold">Vehicles</h3>
          <p className="text-2xl font-bold">10,293</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="text-lg font-semibold">Service Centers</h3>
          <p className="text-2xl font-bold">200</p>
        </div>
      </div>

      {/* Service Centers Section */}
      <div className="bg-white p-6 rounded shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Service Centers</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">+ Add Service Center</button>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4 mb-4">
          <div className="flex items-center bg-gray-200 px-4 py-2 rounded flex-1">
            <Search className="text-gray-600" />
            <input
              type="text"
              placeholder="Search by name, type, brand or others..."
              className="bg-transparent outline-none pl-2 w-full"
            />
          </div>
          <button className="flex items-center bg-gray-200 px-4 py-2 rounded">
            <Filter className="text-gray-600 mr-2" />
            Filters
          </button>
        </div>

        {/* Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Id</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone No.</th>
              <th className="p-3 text-left">Address</th>
            </tr>
          </thead>
          <tbody>
            {serviceCenters.map((center, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{center.id}</td>
                <td className="p-3">{center.name}</td>
                <td className="p-3">{center.email}</td>
                <td className="p-3">{center.phone}</td>
                <td className="p-3">{center.address}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <span>Show result: <strong>6</strong></span>
          <div className="flex gap-2">
            <button className={`px-3 py-1 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-white border"}`}>1</button>
            <button className="px-3 py-1 bg-blue-500 text-white rounded">2</button>
            <button className="px-3 py-1 rounded bg-white border">3</button>
            <button className="px-3 py-1 rounded bg-white border">4</button>
            <button className="px-3 py-1 rounded bg-white border">...</button>
            <button className="px-3 py-1 rounded bg-white border">20</button>
          </div>
        </div>
      </div>
    </div>
  );
}
