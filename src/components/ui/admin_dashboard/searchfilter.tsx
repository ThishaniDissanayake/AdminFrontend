import { Search, Filter } from "lucide-react";

export function SearchFilter() {
  return (
    <div className="flex gap-4 mb-4">
      <div className="flex items-center bg-gray-200 px-4 py-2 rounded flex-1">
        <Search className="text-gray-600" />
        <input
          type="text"
          placeholder="Search by name, type, brand or others..."
          className="bg-transparent outline-none pl-2 w-full"
        />
      </div>
      <button className="flex items-center bg-gray-200 px-4 py-2 rounded">
        <Filter className="text-gray-600 mr-2" />
        Filters
      </button>
    </div>
  );
}
