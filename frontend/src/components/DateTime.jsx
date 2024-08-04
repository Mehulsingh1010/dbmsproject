// src/components/DateTime.js
import React, { useState, useEffect } from 'react';

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg shadow-md dark:bg-blue-800 dark:border-blue-700 text-center">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Current Date & Time</h3>
      <p className="text-lg font-medium text-gray-800 dark:text-gray-300">{formatDateTime(currentDateTime)}</p>
    </div>
  );
};

export default DateTime;
