import React, { useState, useContext } from "react";
import Modal from "react-modal";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { TaskContext } from "./TaskContext";
import "./TaskPopup.css";

const TaskPopup = ({ date, onClose }) => {
  const { tasks, addTask } = useContext(TaskContext);
  const dateStr = date.toDateString();
  const taskList = tasks[dateStr] || [];

  const handleAddTask = (newTask) => {
    addTask(date, newTask);
  };

  return (
    <Modal isOpen={true} onRequestClose={onClose} className="task-popup" overlayClassName="overlay">
      <h2>Tasks for {dateStr}</h2>
      <TaskList tasks={taskList} />
      <TaskForm onAddTask={handleAddTask} />
      <button onClick={onClose} className="close-btn">Close</button>
    </Modal>
  );
};

export default TaskPopup;
