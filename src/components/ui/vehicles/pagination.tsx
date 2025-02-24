import React from "react";

export default function Pagination() {
  return (
    <div className="flex justify-between items-center mt-4">
      <span>Show result: <select className="border p-1 rounded"><option>6</option></select></span>
      <div className="flex gap-2">
        <button className="p-2 border rounded">&lt;</button>
        <button className="p-2 border rounded bg-black text-white">2</button>
        <button className="p-2 border rounded">3</button>
        <button className="p-2 border rounded">4</button>
        <span>...</span>
        <button className="p-2 border rounded">20</button>
        <button className="p-2 border rounded">&gt;</button>
      </div>
    </div>
  );
}
