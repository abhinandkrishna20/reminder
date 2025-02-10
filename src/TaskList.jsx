import React from "react";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p>No tasks for this date.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <span>{task}</span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
