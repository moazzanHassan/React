import React from "react";
import Header from "../Other/Header";
import TaskListNumbers from "../Other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#1C1C1C] text-white">
        <p>Loading employee data...</p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#1C1C1C] p-5 text-white">
      <Header data= {data.id}/>
      <TaskListNumbers data= {data.id} />
      <TaskList data= {data.id}  />
    </div>
  );
};

export default EmployeeDashboard;
