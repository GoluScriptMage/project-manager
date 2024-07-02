import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CustomDatePicker({ onDataChange }) {
  const [selectedDate, setSelectedDate] = useState(null);

  function handleDateChange(date) {
    setSelectedDate(date); // Update selected date
    onDataChange(date); // Pass selected date to parent component
  }

  return (
    <div className="custom-date-picker">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange} // Use handleDateChange directly
        className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        calendarClassName="custom-calendar" // Add custom class
        placeholderText="Select a date"
      />
    </div>
  );
}

export default CustomDatePicker;
