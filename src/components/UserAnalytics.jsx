import React from "react";
import { useSelector } from "react-redux";

const UserAnalytics = () => {
  // Fetching user analytics data from Redux store
  const { activeUsers, feedback } = useSelector((state) => state.userAnalytics);

  return (
    <div className="space-y-8">
      {/* Active Users */}
      <div className="bg-white p-6 shadow-luxury rounded-lg">
        <h2 className="text-2xl font-lobster text-black mb-4">Active Users</h2>
        <p className="text-lg">Total Active Users: {activeUsers}</p>
      </div>

      {/* Customer Feedback */}
      <div className="bg-white p-6 shadow-luxury rounded-lg">
        <h2 className="text-2xl font-lobster text-black mb-4">
          Customer Feedback
        </h2>
        <ul>
          {feedback.map((entry, index) => (
            <li key={index} className="mb-2">
              {entry}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserAnalytics;
