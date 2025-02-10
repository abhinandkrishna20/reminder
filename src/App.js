import React from "react";
import { TaskProvider } from "./TaskContext";
import "./App.css";
import CalendarComponent from "./Calendar";

const App = () => {
  return (
    <TaskProvider>
      <div className="app-container">
        <h1>Daily Task Reminder</h1>
        <CalendarComponent />
      </div>
    </TaskProvider>
  );
};

export default App;
