import React, { useState, useEffect } from "react";
import { getLocalStorage } from "../../utils/localStorage";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [tasks, setTasks] = useState([]);
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    const { employees } = getLocalStorage();
    setEmployeeList(employees || []);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      action: true,
      newTask: true,
      completed: true,
      failed: false,
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category: category,
    };

    const { employees } = getLocalStorage();

    const updatedEmployees = employees.map((emp) => {
      if (emp.firstname === assignTo) {
        emp.tasks.push(newTask);
        emp.taskCounts.new += 1;
        emp.taskCounts.active += 1;
      }
      console.log(emp);
      return emp;
    });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setTasks((prev) => [...prev, { ...newTask, assignTo }]);

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div
      className="bg-gray-800 text-white rounded-xl shadow-lg max-w-2xl "
      style={{
        padding: "24px",
        margin: "auto",
        marginTop: "40px",
        marginBottom: "40px",
      }}
    >
      <form onSubmit={submitHandler}>
        {/* Task Title */}
        <div style={{ marginBottom: "20px" }}>
          <label
            className="block font-semibold"
            style={{ marginBottom: "8px" }}
          >
            Task Title
          </label>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Enter task title"
            className="w-full rounded border border-gray-300 text-white"
            style={{ padding: "8px" }}
          />
        </div>

        {/* Description */}
        <div style={{ marginBottom: "20px" }}>
          <label
            className="block font-semibold"
            style={{ marginBottom: "8px" }}
          >
            Description
          </label>
          <textarea
            rows="4"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Enter description"
            className="w-full rounded border border-gray-300 text-white"
            style={{ padding: "8px" }}
          ></textarea>
        </div>

        {/* Date */}
        <div style={{ marginBottom: "20px" }}>
          <label
            className="block font-semibold"
            style={{ marginBottom: "8px" }}
          >
            Date
          </label>
          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className="w-full rounded border border-gray-300 text-white"
            style={{ padding: "8px" }}
          />
        </div>

        {/* Assign To */}
        <div style={{ marginBottom: "20px" }}>
          <label
            className="block font-semibold"
            style={{ marginBottom: "8px" }}
          >
            Assign To
          </label>
          <select
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="w-full rounded border bg-gray-900 border-gray-300 text-white"
            style={{ padding: "8px" }}
          >
            <option value="">Select employee</option>
            {employeeList.map((emp) => (
              <option key={emp.id} value={emp.firstname}>
                {emp.firstname}
              </option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div style={{ marginBottom: "24px" }}>
          <label
            className="block font-semibold"
            style={{ marginBottom: "8px" }}
          >
            Category
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Task category"
            className="w-full rounded border border-gray-300 text-white"
            style={{ padding: "8px" }}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded font-semibold"
          style={{ padding: "12px", marginTop: "12px" }}
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
