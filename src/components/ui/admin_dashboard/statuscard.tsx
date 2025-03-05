export function StatsCards() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="text-lg font-semibold">Customers</h3>
          <p className="text-2xl font-bold">40,689</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="text-lg font-semibold">Vehicles</h3>
          <p className="text-2xl font-bold">10,293</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="text-lg font-semibold">Service Centers</h3>
          <p className="text-2xl font-bold">200</p>
        </div>
      </div>
    );
  }
  