import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  if (!data || typeof data !== "object") {
    return <div className="text-white p-4">Loading employee dashboard...</div>;
  }

  return (
    <div
      className="bg-gray-900 min-h-screen"
      style={{ padding: "0rem 1.5rem" }}
    >
      <Header data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
