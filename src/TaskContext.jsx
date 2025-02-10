import React, { createContext, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState({});

  const addTask = (date, task) => {
    setTasks((prevTasks) => {
      const dateStr = date.toDateString();
      return {
        ...prevTasks,
        [dateStr]: [...(prevTasks[dateStr] || []), task],
      };
    });
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
