// Calendar.js
import React from 'react';
import './Calendar.module.css';

const Calendar = () => {
	const currentDate = new Date();
	const currentMonth = currentDate.getMonth();
	const currentYear = currentDate.getFullYear();

	const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
	const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

	const days = [];
	for (let i = 0; i < firstDayOfMonth; i++) {
		days.push(<div className="calendar-day empty" key={`empty-${i}`}></div>);
	}
	for (let i = 1; i <= daysInMonth; i++) {
		days.push(
			<div className="calendar-day" key={`day-${i}`}>
				{i}
			</div>,
		);
	}

	return <div className="calendar">{days}</div>;
};

export default Calendar;
