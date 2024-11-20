import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPerformanceReports,
  setTopShops,
  setLowShops,
  setServiceCount,
} from "../redux/performanceReportsSlice";

const PerformanceReports = () => {
  const dispatch = useDispatch();

  // Fetch performance report data from Redux store
  const { registrations, topShops, lowShops, serviceCount } = useSelector(
    (state) => state.performanceReports
  );

  useEffect(() => {
    // Simulated data fetch
    const mockData = {
      registrations: {
        lastMonth: 45,
        lastQuarter: 120,
        lastYear: 480,
      },
      topShops: [
        { id: 1, name: "Barber Luxe", revenue: 12000 },
        { id: 2, name: "The Golden Razor", revenue: 9800 },
      ],
      lowShops: [
        { id: 3, name: "Trendy Cuts", revenue: 1200 },
        { id: 4, name: "Classic Shave", revenue: 800 },
      ],
      serviceCount: 543,
    };

    dispatch(setPerformanceReports(mockData));
  }, [dispatch]);

  return (
    <div className="space-y-8">
      {/* New Registrations */}
      <div className="bg-white p-6 shadow-luxury rounded-lg">
        <h2 className="text-2xl font-lobster text-black mb-4">New Registrations</h2>
        <p className="text-lg">Last Month: {registrations.lastMonth}</p>
        <p className="text-lg">Last Quarter: {registrations.lastQuarter}</p>
        <p className="text-lg">Last Year: {registrations.lastYear}</p>
      </div>

      {/* Top & Low Performing Barbershops */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-luxury rounded-lg">
          <h3 className="text-xl font-bold text-black mb-4">Top Performing Shops</h3>
          <ul>
            {topShops.map((shop) => (
              <li key={shop.id} className="mb-2">
                {shop.name} - ${shop.revenue}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 shadow-luxury rounded-lg">
          <h3 className="text-xl font-bold text-black mb-4">Low Performing Shops</h3>
          <ul>
            {lowShops.map((shop) => (
              <li key={shop.id} className="mb-2">
                {shop.name} - ${shop.revenue}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Service Count */}
      <div className="bg-white p-6 shadow-luxury rounded-lg">
        <h2 className="text-2xl font-lobster text-black mb-4">Total Services Completed</h2>
        <p className="text-lg">{serviceCount}</p>
      </div>
    </div>
  );
};

export default PerformanceReports;
