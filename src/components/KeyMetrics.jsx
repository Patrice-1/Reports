import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMetrics } from "../redux/keyMetricsSlice";
import StatsCard from "./StatsCard";

const KeyMetrics = () => {
  const dispatch = useDispatch();

  // Get metrics data from Redux store
  const metrics = useSelector((state) => state.keyMetrics.metrics);

  useEffect(() => {
    // Simulate fetching metrics data
    const mockMetrics = [
      { title: "Total Users", value: 1200 },
      { title: "Revenue", value: "$24,000" },
      { title: "Active Subscriptions", value: 300 },
      { title: "New Signups", value: 45 },
    ];
    dispatch(setMetrics(mockMetrics)); // Populate the Redux store
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <StatsCard key={index} title={metric.title} value={metric.value} />
      ))}
    </div>
  );
};

export default KeyMetrics;
