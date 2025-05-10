import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        background: "linear-gradient(to right, #0f172a, #1e293b)",
      }}
    >
      <div
        className="bg-gray-900 text-white rounded-xl shadow-2xl w-full max-w-md"
        style={{ padding: "40px" }}
      >
        <h2
          className="text-3xl font-bold text-center mb-6"
          style={{ marginBottom: "24px" }}
        >
          Welcome Back
        </h2>
        <form onSubmit={submitHandler} className="flex flex-col space-y-5">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            style={{ padding: "12px 16px" }}
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            style={{ padding: "12px 16px", marginTop: "10px" }}
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            style={{ padding: "12px", marginTop: "10px" }}
          >
            Log In
          </button>
        </form>
        <p
          className="text-sm text-center text-gray-400"
          style={{ marginTop: "24px" }}
        >
          Don’t have an account?{" "}
          <a href="#" className="text-indigo-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
