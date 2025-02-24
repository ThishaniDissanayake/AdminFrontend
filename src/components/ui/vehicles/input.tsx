import React from "react";

export default function Input({ placeholder, className }: { placeholder: string; className?: string }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`border p-2 rounded-lg w-full ${className}`}
    />
  );
}
