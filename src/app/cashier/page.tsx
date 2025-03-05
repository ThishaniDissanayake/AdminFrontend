// src/app/cashier/page.tsx
import React from 'react';
import Sidebar from '../../components/sidebar';

const CashierDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar for Cashier */}
      <Sidebar role="cashier" />

      {/* Main Content */}
      <div className="ml-64 p-6 w-full">
        <h1 className="text-2xl font-bold">Cashier Dashboard</h1>
        <p>Welcome to the Cashier panel.</p>
        {/* Add more widgets and content here */}
      </div>
    </div>
  );
};

export default CashierDashboard;
