import React from "react";

const AllTask = () => {
  return (
    <div
      className="bg-gray-900  h-70 overflow-auto"
      style={{ padding: "1.5rem" }}
    >
      <div
        className="flex justify-between text-gray-800 bg-cyan-800 rounded-lg shadow-md"
        style={{
          padding: "1rem",
          marginBottom: "1rem",
        }} // Orange
      >
        <h2 className="text-lg font-semibold text-white">Inderjit</h2>
        <h3 className="text-md font-medium" style={{ marginBottom: "0.25rem" }}>
          Make a UI Design
        </h3>
        <h5 className="text-sm font-semibold text-white">
          Status: In Progress
        </h5>
      </div>
      <div
        className="flex justify-between text-gray-800 rounded-lg shadow-md"
        style={{
          padding: "1rem",
          marginBottom: "1rem",
          backgroundColor: "#6EE7B7",
        }} // Light Green
      >
        <h2 className="text-lg font-semibold text-blue-600">Inderjit</h2>
        <h3 className="text-md font-medium" style={{ marginBottom: "0.25rem" }}>
          Make a UI Design
        </h3>
        <h5 className="text-sm font-semibold text-green-600">
          Status: In Progress
        </h5>
      </div>
      <div
        className="flex justify-between text-gray-800 rounded-lg shadow-md"
        style={{
          padding: "1rem",
          marginBottom: "1rem",
          backgroundColor: "salmon",
        }} // Yellow
      >
        <h2 className="text-lg font-semibold text-white">Inderjit</h2>
        <h3 className="text-md font-medium" style={{ marginBottom: "0.25rem" }}>
          Make a UI Design
        </h3>
        <h5 className="text-sm font-semibold text-white">
          Status: In Progress
        </h5>
      </div>
      <div
        className="flex justify-between text-gray-800 rounded-lg shadow-md"
        style={{
          padding: "1rem",
          marginBottom: "1rem",
          backgroundColor: "#3B82F6",
        }} // Blue
      >
        <h2 className="text-lg font-semibold text-white">Inderjit</h2>
        <h3 className="text-md font-medium" style={{ marginBottom: "0.25rem" }}>
          Make a UI Design
        </h3>
        <h5 className="text-sm font-semibold text-white">
          Status: In Progress
        </h5>
      </div>
      <div
        className="flex  justify-between text-gray-800 rounded-lg shadow-md"
        style={{
          padding: "1rem",
          marginBottom: "1rem",
          backgroundColor: "#9333EA",
        }} // Purple
      >
        <h2 className="text-lg font-semibold text-white">Inderjit</h2>
        <h3 className="text-md font-medium" style={{ marginBottom: "0.25rem" }}>
          Make a UI Design
        </h3>
        <h5 className="text-sm font-semibold text-white">
          Status: In Progress
        </h5>
      </div>
    </div>
  );
};

export default AllTask;
