import React from "react";

const TaskListNumbers = ({ data }) => {
  if (!data || !data.taskCounts) {
    return <div className="text-white mt-10">Loading task stats...</div>;
  }

  return (
    <div
      className="flex flex-wrap justify-between w-full"
      style={{ marginTop: "40px", gap: "20px" }}
    >
      {/* New Tasks */}
      <div
        className="bg-blue-500 text-white rounded-lg text-center flex-1"
        style={{ padding: "20px", marginBottom: "20px" }}
      >
        <h2 className="text-4xl font-bold">{data.taskCounts.new}</h2>
        <h3 className="text-lg">New Tasks</h3>
      </div>

      {/* Completed Tasks */}
      <div
        className="bg-green-500 text-white rounded-lg text-center flex-1"
        style={{ padding: "20px", marginBottom: "20px" }}
      >
        <h2 className="text-4xl font-bold">{data.taskCounts.completed}</h2>
        <h3 className="text-lg">Completed</h3>
      </div>

      {/* Accepted Tasks */}
      <div
        className="bg-yellow-500 text-white rounded-lg text-center flex-1"
        style={{ padding: "20px", marginBottom: "20px" }}
      >
        <h2 className="text-4xl font-bold">{data.taskCounts.active}</h2>
        <h3 className="text-lg">Accepted</h3>
      </div>

      {/* Failed Tasks */}
      <div
        className="bg-orange-500 text-white rounded-lg text-center flex-1"
        style={{ padding: "20px", marginBottom: "20px" }}
      >
        <h2 className="text-4xl font-bold">{data.taskCounts.failed}</h2>
        <h3 className="text-lg">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
