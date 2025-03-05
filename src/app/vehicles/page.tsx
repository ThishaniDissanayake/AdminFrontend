import React from "react";
import Input from "../../components/ui/vehicles/input";
import Filter from "../../components/ui/vehicles/filter";
import { Table, TableHead, TableRow, TableCell, TableBody } from "../../components/ui/vehicles/table";
import DropdownMenu from "../../components/ui/vehicles/dropdown";
import Pagination from "../../components/ui/vehicles/pagination";

const vehicles = [
  { id: "#VHC-0001", client: "Devon Lane", type: "Coupe", brand: "Volvo", model: "Toyota Camry", plate: "ABC-4564" },
  { id: "#VHC-0002", client: "Kathryn Murphy", type: "Electric Vehicle", brand: "BMW", model: "Ford F-150", plate: "GHI-9012" },
  { id: "#VHC-0003", client: "Eleanor Pena", type: "Hatchback", brand: "Bugatti", model: "Tesla Model S", plate: "DEF-5678" },
  { id: "#VHC-0004", client: "Kathryn Murphy", type: "Coupe", brand: "Acura", model: "Customer", plate: "ABC-4998" },
  { id: "#VHC-0005", client: "Devon Lane", type: "Electric Vehicle", brand: "BMW", model: "Ford F-150", plate: "MNO-7890" },
  { id: "#VHC-0006", client: "Eleanor Pena", type: "Motorcycle", brand: "Cadillac", model: "Tesla Model S", plate: "ABC-4987" },
  { id: "#VHC-0007", client: "Devon Lane", type: "Coupe", brand: "Volvo", model: "Chevrolet Silverado", plate: "GHI-9176" },
];

export default function VehiclesPage() {
  return (
    <div className="p-6 w-full bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-700">Vehicles</h2>
        <span className="text-gray-600">Show: <strong>All Vehicles</strong></span>
      </div>

      <div className="flex gap-4 mb-4 bg-white p-4 rounded-lg shadow-md">
        <Input placeholder="Search by name, type, brand or others..." className="w-1/2" />
        <Filter />
      </div>

      <div className="overflow-hidden rounded-lg shadow-md">
        <Table my-className="w-full border-collapse bg-white">
          <TableHead>
            <TableRow my-className="bg-gray-200 text-gray-700 uppercase text-sm">
              <TableCell my-className="p-3">Id</TableCell>
              <TableCell my-className="p-3">Client</TableCell>
              <TableCell my-className="p-3">Type</TableCell>
              <TableCell my-className="p-3">Brand</TableCell>
              <TableCell my-className="p-3">Model</TableCell>
              <TableCell my-className="p-3">License Plate</TableCell>
              <TableCell my-className="p-3">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicles.map((vehicle, index) => (
              <TableRow key={vehicle.id} my-className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition` }>
                <TableCell my-className="p-3 border-b">{vehicle.id}</TableCell>
                <TableCell my-className="p-3 border-b">{vehicle.client}</TableCell>
                <TableCell my-className="p-3 border-b">{vehicle.type}</TableCell>
                <TableCell my-className="p-3 border-b">{vehicle.brand}</TableCell>
                <TableCell my-className="p-3 border-b">{vehicle.model}</TableCell>
                <TableCell my-className="p-3 border-b">{vehicle.plate}</TableCell>
                <TableCell my-className="p-3 border-b"><DropdownMenu /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex justify-center">
        <Pagination />
      </div>
    </div>
  );
}
