import React from 'react';
import Link from 'next/link';


const sidebarItems = {
  serviceCenterAdmin: [
    { name: 'Dashboard', link: '/servicecenteradmin' },
    { name: 'Clients', link: '/clients' },
    { name: 'Vehicles', link: '/vehicles' },
    { name: 'Service Status', link: '/serviceStatus' },
    { name: 'Appointments', link: '/appointments' },
    { name: 'Feedbacks', link: '/feedbacks' },
    { name: 'Closure Schedule', link: '/closureSchedule' },
    { name: 'Logout', link: '/logout' }
  ],
  cashier: [
    { name: 'Dashboard', link: '/cashier' },
    { name: 'Clients', link: '/clients' },
    { name: 'Vehicles', link: '/vehicles' },
    { name: 'Service Centers', link: '/serviceCenters' },
    { name: 'Feedbacks', link: '/feedbacks' },
    { name: 'Appointments', link: '/appointments' },
    { name: 'Logout', link: '/logout' }
  ],
  dataOperator: [
    { name: 'Dashboard', link: '/dataoperator' },
    { name: 'Clients', link: '/clients' },
    { name: 'Vehicles', link: '/vehicles' },
    { name: 'Closure Schedule', link: '/closureSchedule' },
    { name: 'Feedbacks', link: '/feedbacks' },
    { name: 'Logout', link: '/logout' }
  ]
};

interface SidebarProps {
  role: 'serviceCenterAdmin' | 'cashier' | 'dataOperator';
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const items = sidebarItems[role] || [];

  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-10 p-4">
      <div className="flex flex-col space-y-4 w-full">
        <img src="/logo.jpg" alt="logo" />
        {items.map((item, index) => (
          <Link key={index} href={item.link} className="text-gray-800 hover:text-blue-500">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
