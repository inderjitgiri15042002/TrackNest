import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div
      className="flex-shrink-0 w-[300px] h-full bg-green-400 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
      style={{ padding: "1.5rem", height: "auto" }}
    >
      <div
        className="flex justify-between text-white items-center"
        style={{ marginBottom: "1rem" }}
      >
        <h3
          className="bg-red-600  text-sm rounded"
          style={{ padding: "0.25rem 0.75rem", fontWeight: "500" }}
        >
          {data.category}
        </h3>
        <h4 style={{ fontSize: "0.875rem", color: "white" }}>{data.date}</h4>
      </div>
      <h2
        className="text-xl font-semibold text-white"
        style={{ marginBottom: "0.75rem" }}
      >
        {data.category}
      </h2>
      <p
        className="text-sm  text-white"
        style={{ lineHeight: "1.4", fontSize: "0.875rem" }}
      >
        {data.description}
      </p>

      <div
        className="flex justify-start gap-2 mt-4"
        style={{ marginTop: "1rem" }}
      >
        <button
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all"
          style={{
            fontSize: "0.875rem",
            fontWeight: "600",
            padding: "0.5rem 1rem",
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
