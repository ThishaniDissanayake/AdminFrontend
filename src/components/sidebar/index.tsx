import React from 'react'
import Link from 'next/link'

interface IsSidebarItem {
  name: string
  link: string
}

const items: IsSidebarItem[] = [
  {
    name: 'Dashboard',
    link: '/dashboard' 
  },
  {
    name: 'Clients',
    link: '/clients'
  },
  {
    name: 'Vehicles',
    link: '/vehicles'
  },
  {
    name: 'Service Centers',
    link: '/serviceCenters'
  },
  {
    name: 'Emergency Services',
    link: '/emergencyServices'
  },
  {
    name: 'User Manage',
    link: '/userManage'
  },
  {
    name: 'Loyalty Points',
    link: '/loyaltyPoints'
  },
  {
    name: 'Service Status',
    link: '/serviceStatus'
  },
  {
    name: 'Appointments', // Fixed the spelling error
    link: '/appoinments'
  },
  {
    name: 'Feedbacks',
    link: '/feedbacks'
  },
  {
    name: 'Closure Schedule',
    link: '/closureSchedule'
  },
  {
    name: 'Logout',
    link: '/logout'
  }
]

function Sidebar() {
  return (
    <div className='fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-10 p-4'>
      <div className='flex flex-col space-y-4 w-full'>
        <img src='/logo.jpg' alt='logo' />
        {items.map((item, index) => (
          <Link key={index} href={item.link} className='text-gray-800 hover:text-blue-500'>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
