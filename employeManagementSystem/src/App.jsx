import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("loggedInUser");
  //   if (storedUser) {
  //     const parsedUser = JSON.parse(storedUser);
  //     setUser(parsedUser.role);
  //     if (parsedUser.role === "employee") {
  //       setLoggedInUserData(parsedUser);
  //     }
  //   }
  // }, [authData]);

  const handleUser = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify(employee));
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleUser={handleUser} /> : null}
      {user === "admin" ? (
        <AdminDashboard />
      ) : user === "employee" ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : null}
    </>
  );
}

export default App;
