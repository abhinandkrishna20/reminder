# Daily Task Reminder Application - Documentation

## Overview
The **Daily Task Reminder** is a simple React application that displays a calendar, allowing users to select a date and add tasks for that day. Tasks are stored in a global state and displayed when a user clicks on a specific date.

## Live Demo
[https://abhinandkrishna20.github.io/reminder/](https://abhinandkrishna20.github.io/reminder/)

## Features
- **Calendar View**: Displays the current month, with today’s date highlighted.
- **Task Popup**: Clicking a date opens a popup showing tasks for that date.
- **Task Management**: Users can add tasks, which are stored globally.
- **Task Indication**: Dates with tasks are visually distinct in the calendar.

## Project Structure
```
project-root/
│── src/
│   │── components/
│   │   │── CalendarComponent.js
│   │   │── TaskPopup.js
│   │   │── TaskForm.js
│   │   │── TaskList.js
│   │── context/
│   │   │── TaskContext.js
│   │── styles/
│   │   │── App.css
│   │   │── Calendar.css
│   │   │── TaskPopup.css
│   │   │── TaskForm.css
│   │   │── TaskList.css
│   │── App.js
│   │── index.js
│── package.json
│── README.md
```

## Components
### 1. **CalendarComponent.js**
- Displays the calendar.
- Highlights today’s date.
- Indicates dates with tasks.
- Opens the `TaskPopup` when a date is clicked.

### 2. **TaskPopup.js**
- Displays a modal with tasks for the selected date.
- Uses `TaskList` to show tasks.
- Includes `TaskForm` to add new tasks.

### 3. **TaskForm.js**
- Provides an input field for users to add a task.
- Calls `addTask` function from `TaskContext` to store tasks globally.

### 4. **TaskList.js**
- Displays a list of tasks for the selected date.
- Allows users to delete tasks.

### 5. **TaskContext.js**
- Manages global state for tasks.
- Stores tasks in an object with dates as keys.

## Styling
The application uses modular CSS files for styling, including:
- **App.css**: Main layout styles.
- **Calendar.css**: Styles for the calendar component.
- **TaskPopup.css**: Styles for the task popup modal.
- **TaskForm.css**: Styles for the task input form.
- **TaskList.css**: Styles for task list items.

## Installation & Setup
### Prerequisites
- Node.js & npm installed.

### Steps
1. Clone the repository:
   ```sh
   git clone [https://github.com/your-repo/daily-task-reminder.git](https://github.com/abhinandkrishna20/reminder)
   cd daily-task-reminder
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open `http://localhost:3000/` in a browser.

## Future Enhancements
- **Persistent Storage**: Save tasks to local storage or a database.
- **Notifications**: Reminders for upcoming tasks.
- **User Authentication**: Allow multiple users to manage personal tasks.

## Conclusion
The **Daily Task Reminder** is a simple yet effective React-based application for managing daily tasks. The modular component structure ensures flexibility for future enhancements.

