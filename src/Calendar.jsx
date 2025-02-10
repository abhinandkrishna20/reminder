import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { TaskContext } from "./TaskContext";
import TaskPopup from "./TaskPopup";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { tasks } = useContext(TaskContext);

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    setIsPopupOpen(true);
  };

  return (
    <div className="calendar-container">
      <Calendar 
        onChange={handleDateChange} 
        value={date} 
        tileClassName={({ date }) => {
          const today = new Date();
          const dateStr = date.toDateString();
          return dateStr === today.toDateString() ? "highlight" : tasks[dateStr] ? "has-tasks" : "";
        }}
      />
      {isPopupOpen && <TaskPopup date={date} onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
};

export default CalendarComponent;