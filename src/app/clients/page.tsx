import React from "react";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";
import Filter from "@/components/ui/filter";
import DropdownMenu from "@/components/ui/dropdown"; 

const clients = [
  { id: "#CLI-0001", name: "Devon Lane", email: "mariarodriguez@gmail.com", phone: "+1 (861) 623-4643", address: "456 Ocean Avenue, Miami, FL 12345" },
  { id: "#CLI-0002", name: "Kathryn Murphy", email: "juan.rodriguez@email.com", phone: "+1 (861) 623-4643", address: "234 Oak Street, Flat 7" },
  { id: "#CLI-0003", name: "Eleanor Pena", email: "mariarodriguez@gmail.com", phone: "+1 (861) 623-4643", address: "234 Oak Street, Flat 7" },
  { id: "#CLI-0004", name: "Kathryn Murphy", email: "juan.rodriguez@email.com", phone: "+1 (861) 623-4643", address: "456 Ocean Avenue, Miami, FL 12345" },
];

export default function ClientsPage() {
  return (
    <div className="p-6 w-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Clients</h2>
        <Button>+ Add Client</Button>
      </div>

      {/* Search & Filter Section */}
      <div className="flex gap-4 mb-4">
        <Input placeholder="Search by name, email, or others..." className="w-1/2" />
        <Filter />
      </div>

      {/* Clients Table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone No.</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.id}</TableCell>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.phone}</TableCell>
              <TableCell>{client.address}</TableCell>
              <TableCell>
                <DropdownMenu /> {/* Three-dot dropdown */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
