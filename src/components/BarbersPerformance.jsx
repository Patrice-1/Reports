import React from "react";

const BarbersPerformance = ({ data }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {data.map((barber) => (
      <div key={barber.id} className="bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-xl font-medium text-gray-700">{barber.name}</h3>
        <p className="text-lg text-gray-600">
          Clients Served: {barber.clientsServed}
        </p>
        <p className="text-lg text-gray-600">
          Total Revenue: ${barber.totalRevenue}
        </p>
      </div>
    ))}
  </div>
);

export default BarbersPerformance;
