import React from "react";

const CreateTask = () => {
  return (
    <div
      className="mt-10 bg-gray-850 text-white  rounded-xl shadow-lg max-w-2xl mx-auto"
      style={{ padding: "1rem", margin: "auto" }}
    >
      <form>
        <h3 style={{ marginBottom: "0.3rem", fontWeight: "600" }}>
          Task Title
        </h3>
        <input
          type="text"
          placeholder="Enter task title"
          className="w-full border rounded focus:scale-[102%]
         focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out
"
          style={{ padding: "0.5rem 0.75rem", marginBottom: "1rem" }}
        />

        <h3 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
          Description
        </h3>
        <textarea
          className="w-full border rounded px-3 py-2 mb-4 focus:scale-[102%]
         focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
          rows="4"
          placeholder="Enter description"
          style={{ marginBottom: "1rem", padding: "0.5rem 0.75rem" }}
        ></textarea>

        <h3 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>Date</h3>
        <input
          type="date"
          className="w-full border rounded px-3 py-2 mb-4 focus:scale-[102%]
         focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
          style={{ marginBottom: "1rem", padding: "0.5rem 0.75rem" }}
        />

        <h3 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>Assign To</h3>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 mb-4 focus:scale-[102%]
         focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
          placeholder="Assignee name"
          style={{ marginBottom: "1rem", padding: "0.5rem 0.75rem" }}
        />

        <h3 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>Category</h3>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 mb-6 focus:scale-[102%]
         focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
          placeholder="Task category"
          style={{ marginBottom: "1.5rem", padding: "0.5rem 0.75rem" }}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          style={{ padding: "0.75rem 0", fontWeight: "600" }}
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
