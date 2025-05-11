import React from "react";

const Header = ({ changeUser, data }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    if (typeof changeUser === "function") {
      changeUser("");
    }
    window.location.reload(); // Correct reload
  };

  return (
    <div
      className="flex items-center justify-between bg-gray-900 text-white shadow-md"
      style={{ padding: "16px 24px" }}
    >
      <div>
        <h1 className="text-xl font-semibold">
          Hello <br />
          <span className="text-2xl font-bold text-indigo-400">
            {loggedInUser?.firstname || "Admin"} 👏
          </span>
        </h1>
      </div>
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition"
        onClick={handleLogout}
        style={{ padding: "8px 16px" }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
