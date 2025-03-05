const serviceCenters = [
    { id: "#SC-0001", name: "Speed Motors", email: "mariarodriguez@gmail.com", phone: "+1 (861) 623-4643", address: "456 Ocean Avenue, Miami, FL 12345" },
    { id: "#SC-0002", name: "AutoFix Hub", email: "juan.rodriguez@email.com", phone: "+1 (861) 623-4643", address: "234 Oak Street, Flat 7" },
  ];
  
  export function ServiceCentersTable() {
    return (
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Id</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone No.</th>
            <th className="p-3 text-left">Address</th>
          </tr>
        </thead>
        <tbody>
          {serviceCenters.map((center, index) => (
            <tr key={index} className="border-b">
              <td className="p-3">{center.id}</td>
              <td className="p-3">{center.name}</td>
              <td className="p-3">{center.email}</td>
              <td className="p-3">{center.phone}</td>
              <td className="p-3">{center.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }