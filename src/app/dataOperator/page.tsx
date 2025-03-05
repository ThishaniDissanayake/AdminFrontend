// src/app/dataOperator/page.tsx
import React from 'react';
import Sidebar from '../../components/sidebar';

const DataOperatorDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar for Data Operator */}
      <Sidebar role="dataOperator" />

      {/* Main Content */}
      <div className="ml-64 p-6 w-full">
        <h1 className="text-2xl font-bold">Data Operator Dashboard</h1>
        <p>Welcome to the Data Operator panel.</p>
        {/* Add more widgets and content here */}
      </div>
    </div>
  );
};

export default DataOperatorDashboard;
