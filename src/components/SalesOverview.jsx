import React from "react";
import { useSelector } from "react-redux";
import LineChartComponent from "./LineChartComponent";
import StatsCard from "./StatsCard";

const SalesOverview = () => {
  // Fetch data from Redux store
  const { revenueData, barbershopData, stats } = useSelector(
    (state) => state.salesOverview
  );

  return (
    <div className="space-y-8">
      {/* Sales by Barbershop */}
      <div className="bg-white p-6 shadow-luxury rounded-lg">
        <h2 className="text-2xl font-lobster text-black mb-4">
          Top-Performing Barbershops
        </h2>
        <ul>
          {barbershopData.map((shop) => (
            <li key={shop.id} className="flex justify-between mb-2">
              <span className="font-medium">{shop.name}</span>
              <span>${shop.revenue}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sales Trends */}
      <div className="bg-white p-6 shadow-luxury rounded-lg">
        <h2 className="text-2xl font-lobster text-black mb-4">
          Sales Trends Over Time
        </h2>
        <LineChartComponent
          data={revenueData}
          onPointClick={(data) => console.log("Point clicked:", data)}
        />
      </div>
    </div>
  );
};

export default SalesOverview;
