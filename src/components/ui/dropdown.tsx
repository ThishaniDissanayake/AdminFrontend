"use client"; 

import { Menu } from "@headlessui/react";
import { MoreVertical } from "lucide-react";

const Dropdown = () => {
  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="p-2 rounded-full hover:bg-gray-200">
          <MoreVertical size={20} />
        </Menu.Button>
        <Menu.Items className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg">
          <Menu.Item>
            {({ active }) => (
              <button className={`w-full px-4 py-2 text-left ${active ? "bg-gray-100" : ""}`}>
                View Details
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button className={`w-full px-4 py-2 text-left ${active ? "bg-gray-100" : ""}`}>
                Edit Client
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button className={`w-full px-4 py-2 text-left text-red-500 ${active ? "bg-gray-100" : ""}`}>
                Delete Client
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default Dropdown;
