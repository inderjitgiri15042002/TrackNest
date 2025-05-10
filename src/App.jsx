import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser.role);
      if (loggedInUser.role === "employee") {
        setLoggedInUserData(loggedInUser); // Assuming you store more info in loggedInUser.
      }
    }

    // Clean-up when the app loads

    return () => {
      window.removeEventListener("load", () => {
        localStorage.removeItem("loggedInUser");
      });
    };
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData?.employees?.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", ...employee })
        );
      } else {
        console.log("Invalid credentials");
      }
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
