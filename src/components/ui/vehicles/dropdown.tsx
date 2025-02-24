"use client"; 

import React, { useState } from "react";
import { MoreVertical } from "lucide-react";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full hover:bg-white-400"
      >
        <MoreVertical size={18} />
      </button>
      {open && (
        <div className="absolute right-0 bg-white border shadow-lg rounded-lg w-36">
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
            View Details
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
