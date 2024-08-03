import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const ResultAnalysis = () => {
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');
  const [maxMarks, setMaxMarks] = useState('');
  const [classAvg, setClassAvg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/submit', {
        subject,
        marks: parseInt(marks),
        maxMarks: parseInt(maxMarks),
        classAvg: parseInt(classAvg),
      });
      
      toast.success("Data sent successfully!");
      console.log('Data submitted successfully:', response.data);
    } catch (error) {
      toast.error("Error submitting data. Please try again.");
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-lg bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Result Analysis</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Marks Scored</label>
          <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Total Marks</label>
          <input
            type="number"
            value={maxMarks}
            onChange={(e) => setMaxMarks(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Class Average</label>
          <input
            type="number"
            value={classAvg}
            onChange={(e) => setClassAvg(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md font-semibold shadow-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResultAnalysis;
