import React from 'react';
// import './Date.css';

function DateComponent({ day, month, year, onClick }) {
    if (day === null) {  // Handle null day case
        return <div className="date empty"></div>; // Or return null, or an empty div
    }

    const today = new Date();
    const isToday = today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;

    const handleClick = () => {
        onClick(`${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`);
    };

    return (
        <div className={`date ${isToday ? 'today' : ''}`} onClick={handleClick}>
            {day}
        </div>
    );
}

export default DateComponent;
