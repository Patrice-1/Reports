import React from "react";

const TopCustomers = ({ data }) => (
  <div className="bg-white p-6 shadow-lg rounded-lg">
    <h3 className="text-xl font-medium text-gray-700 mb-4">Top Customers</h3>
    <ul>
      {data.map((customer) => (
        <li key={customer.id} className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800">
            {customer.name}
          </h4>
          <p className="text-gray-600">Visits: {customer.visits}</p>
          <p className="text-gray-600">Total Spent: ${customer.totalSpent}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default TopCustomers;
