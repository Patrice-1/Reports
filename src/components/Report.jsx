import React, { useState } from "react";
import Sidebar from "./Sidebar";
import BarChartComponent from "./BarChartComponent";
import PieChartComponent from "./PieChartComponent";
import LineChartComponent from "./LineChartComponent";

const Report = () => {
  const [selectedReport, setSelectedReport] = useState("revenue");
  const [analysisData, setAnalysisData] = useState(null);

  const revenueData = [
    { date: "2024-11-01", revenue: 200 },
    { date: "2024-11-02", revenue: 250 },
    { date: "2024-11-03", revenue: 300 },
    { date: "2024-11-04", revenue: 350 },
    { date: "2024-11-05", revenue: 200 },
  ];

  const serviceData = [
    { name: "Haircut", value: 120 },
    { name: "Beard Trim", value: 50 },
    { name: "Shave", value: 30 },
    { name: "Hair Color", value: 20 },
  ];

  const incomeData = [
    { date: "2024-11-01", income: 200 },
    { date: "2024-11-02", income: 250 },
    { date: "2024-11-03", income: 300 },
    { date: "2024-11-04", income: 350 },
    { date: "2024-11-05", income: 200 },
  ];

  const handleReportSelect = (report) => {
    setSelectedReport(report);
  };

  const handleBarClick = (data) => {
    setAnalysisData(`Revenue for ${data.date}: $${data.revenue}`);
  };

  const handleSliceClick = (data) => {
    setAnalysisData(`Service: ${data.name}, Revenue: $${data.value}`);
  };

  const handlePointClick = (data) => {
    setAnalysisData(`Income on ${data.date}: $${data.income}`);
  };

  return (
    <div className="flex bg-black text-white">
      {/* Sidebar */}
      <Sidebar onReportSelect={handleReportSelect} />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        <h1 className="text-4xl font-lobster text-gold text-center mb-10">
          Barbershop Analytics Dashboard
        </h1>

        {/* Analysis Details */}
        {analysisData && (
          <div className="p-4 bg-white text-black shadow-luxury rounded mb-8">
            <h2 className="text-xl font-bold">Analysis</h2>
            <p>{analysisData}</p>
          </div>
        )}

        {/* Conditional Rendering of Reports */}
        {selectedReport === "revenue" && (
          <div className="mb-8 p-6 bg-white shadow-luxury rounded-lg">
            <h2 className="text-2xl font-lobster text-black mb-4">
              Revenue Over Time
            </h2>
            <BarChartComponent data={revenueData} onBarClick={handleBarClick} />
          </div>
        )}

        {selectedReport === "services" && (
          <div className="mb-8 p-6 bg-white shadow-luxury rounded-lg">
            <h2 className="text-2xl font-lobster text-black mb-4">
              Services Distribution
            </h2>
            <PieChartComponent
              data={serviceData}
              onSliceClick={handleSliceClick}
            />
          </div>
        )}

        {selectedReport === "performance" && (
          <div className="mb-8 p-6 bg-white shadow-luxury rounded-lg">
            <h2 className="text-2xl font-lobster text-black mb-4">
              Income Over Time
            </h2>
            <LineChartComponent
              data={incomeData}
              onPointClick={handlePointClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;
