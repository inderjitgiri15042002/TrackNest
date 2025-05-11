import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

// Utility function to generate random hex color
const getRandomColor = () => {
  const colors = [
    "#1abc9c",
    "#3498db",
    "#9b59b6",
    "#e67e22",
    "#e74c3c",
    "#f39c12",
    "#2ecc71",
    "#16a085",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div
      className="bg-gray-900 text-white "
      style={{ padding: "1.5rem", height: "70vh", fontFamily: "Arial" }}
    >
      {/* Fixed Header */}
      <div
        className="grid grid-cols-5 gap-2 font-bold text-lg px-4 py-2 rounded bg-gray-700 sticky top-0 z-10"
        style={{
          textAlign: "center",
          padding: "0.5rem 1rem",
          marginBottom: "0.7rem",
        }}
      >
        <h3>Employee Name</h3>
        <h3>New Task</h3>
        <h3>Active Task</h3>
        <h3>Complete Task</h3>
        <h3>Failed task</h3>
      </div>

      {/* Scrollable Employee List */}
      <div
        className="mt-2 overflow-y-auto"
        style={{
          maxHeight: "calc(70vh - 4rem)", // adjust based on header height
          paddingRight: "0.5rem",
        }}
      >
        {authData.employees.map((data, index) => {
          const cardColor = getRandomColor();

          return (
            <div
              key={index}
              className="grid grid-cols-5 gap-2 rounded-lg shadow-md text-white mb-3"
              style={{
                backgroundColor: cardColor,
                padding: "1rem",
                marginBottom: "0.75rem",
                textAlign: "center",
              }}
            >
              <h2 className="text-md font-semibold">{data.firstname}</h2>
              <h3 className="text-sm font-medium">{data.taskCounts.new}</h3>
              <h5 className="text-sm font-medium">{data.taskCounts.active}</h5>
              <h5 className="text-sm font-medium">
                {" "}
                {data.taskCounts.completed}
              </h5>
              <h5 className="text-sm font-medium"> {data.taskCounts.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
