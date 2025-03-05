// src/app/superadmin/page.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const serviceCenters = [
  { id: '#SC-0001', name: 'Speed Motors', email: 'maria@gmail.com', phone: '+1 (861) 623-4643', address: '456 Ocean Avenue, Miami, FL' },
  { id: '#SC-0002', name: 'AutoFix Hub', email: 'juan@gmail.com', phone: '+1 (861) 623-4643', address: '234 Oak Street, Flat 7' },
  { id: '#SC-0003', name: 'Rapid Repairs', email: 'maria@gmail.com', phone: '+1 (861) 623-4643', address: '234 Oak Street, Flat 7' },
  { id: '#SC-0004', name: 'NextGen Motors', email: 'juan@gmail.com', phone: '+1 (861) 623-4643', address: '456 Ocean Avenue, Miami, FL' },
];

const SuperAdminDashboard = () => {
  const router = useRouter();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>

      {/* Search and Filter Options */}
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name, type, brand..."
          className="border p-2 w-2/3 rounded"
        />
        <button className="bg-gray-200 px-4 py-2 rounded">Filters</button>
      </div>

      {/* Service Centers Table */}
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone No.</th>
            <th className="border p-2">Address</th>
          </tr>
        </thead>
        <tbody>
          {serviceCenters.map((center) => (
            <tr key={center.id} className="hover:bg-gray-50">
              <td className="border p-2">{center.id}</td>
              <td
                className="border p-2 text-blue-500 cursor-pointer hover:underline"
                onClick={() => router.push('/servicecenteradmin')} // Redirects to service center admin page
              >
                {center.name}
              </td>
              <td className="border p-2">{center.email}</td>
              <td className="border p-2">{center.phone}</td>
              <td className="border p-2">{center.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuperAdminDashboard;
