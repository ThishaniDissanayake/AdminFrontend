// src/app/serviceCenterAdmin/page.tsx
import React from 'react';
import Sidebar from '../../components/sidebar';

const ServiceCenterAdminDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar for Service Center Admin */}
      <Sidebar role="serviceCenterAdmin" />

      {/* Main Content */}
      <div className="ml-64 p-6 w-full">
        <h1 className="text-2xl font-bold">Service Center Admin Dashboard</h1>
        <p>Welcome to the Service Center Admin panel.</p>
        {/* Add more widgets and content here */}
      </div>
    </div>
  );
};

export default ServiceCenterAdminDashboard;
