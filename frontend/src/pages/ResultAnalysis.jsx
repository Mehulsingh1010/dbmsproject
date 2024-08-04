import React, { useState } from 'react';
import axios from 'axios';
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const ResultAnalysis = () => {
  const [subjects, setSubjects] = useState([{ subject_name: '', max_marks: "", scored_marks: "" }]);
  const [results, setResults] = useState([]);
  const [overall, setOverall] = useState({ percentage: "", grade: '' });
  const [error, setError] = useState('');

  const addSubject = () => {
    setSubjects([...subjects, { subject_name: '', max_marks: "", scored_marks: "" }]);
    // Clear previous results, overall data, and error when adding a subject
    setResults([]);
    setOverall({ percentage: 0, grade: '' });
    setError('');
  };

  const removeSubject = (index) => {
    setSubjects(subjects.filter((_, i) => i !== index));
    // Clear previous results, overall data, and error when removing a subject
    setResults([]);
    setOverall({ percentage: 0, grade: '' });
    setError('');
  };

  const handleSubjectChange = (index, event) => {
    const values = [...subjects];
    values[index][event.target.name] = event.target.value;
    setSubjects(values);
    // Clear previous results and error when modifying subjects
    setResults([]);
    setOverall({ percentage: 0, grade: '' });
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userId = 1; // Replace with actual userId

      const response = await axios.post('http://localhost:3000/result-analysis', { userId, subjects });

      if (response.data.success) {
        setResults(response.data.results);
        setOverall(response.data.total);
      } else {
        setError('Failed to fetch results');
      }
    } catch (err) {
      setError('Error submitting results');
      console.error('Error:', err);
    }
  };

  const totalMarks = subjects.reduce((acc, subj) => acc + parseFloat(subj.max_marks), 0);
  const totalScored = subjects.reduce((acc, subj) => acc + parseFloat(subj.scored_marks), 0);

  const pieData = {
    labels: ['Total Marks', 'Scored Marks'],
    datasets: [
      {
        data: [totalMarks, totalScored],
        backgroundColor: ['#4e79a7', '#f28e2b'],
        hoverBackgroundColor: ['#2b5d8f', '#d67c2f'],
      },
    ],
  };

  const barData = {
    labels: ['Marks Comparison'],
    datasets: [
      {
        label: 'Total Marks',
        data: [totalMarks],
        backgroundColor: '#4e79a7',
        borderColor: '#2b5d8f',
        borderWidth: 1,
      },
      {
        label: 'Scored Marks',
        data: [totalScored],
        backgroundColor: '#f28e2b',
        borderColor: '#d67c2f',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="overflow-x-hidden min-h-screen dark:bg-gray-900">
      <div className="container mx-auto p-8 ml-[92px]">
        <div className="bg-white p-8 rounded-lg shadow-md dark:bg-gray-800">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Result Analysis</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {subjects.map((subject, index) => (
              <div key={index} className="flex items-center space-x-4 mb-4">
                <input
                  type="text"
                  name="subject_name"
                  value={subject.subject_name}
                  onChange={event => handleSubjectChange(index, event)}
                  placeholder="Subject Name"
                  className="p-3 border rounded-lg border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <input
                  type="number"
                  name="max_marks"
                  value={subject.max_marks}
                  onChange={event => handleSubjectChange(index, event)}
                  placeholder="Max Marks"
                  className="p-3 border rounded-lg border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <input
                  type="number"
                  name="scored_marks"
                  value={subject.scored_marks}
                  onChange={event => handleSubjectChange(index, event)}
                  placeholder="Scored Marks"
                  className="p-3 border rounded-lg border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <button
                  type="button"
                  onClick={() => removeSubject(index)}
                  className="bg-red-600 text-white p-2 rounded-lg shadow-md hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex space-x-4">
              <button type="button" onClick={addSubject} className="bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700">
                Add Subject
              </button>
              <button type="submit" className="bg-green-600 text-white p-3 rounded-lg shadow-md hover:bg-green-700">
                Submit
              </button>
            </div>
          </form>
          {error && <p className="text-red-600 mt-4">{error}</p>}
          {results.length > 0 && (
            <div className="mt-8 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Results</h2>
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div key={index} className="p-4 rounded-lg shadow-sm dark:bg-gray-700">
                    <p className="text-gray-900 dark:text-white">
                      {result.subject_name}: {result.percentage.toFixed(2)}% - Grade: {result.grade} ({result.status})
                    </p>
                  </div>
                ))}
                <div className="p-4 rounded-lg shadow-sm dark:bg-gray-700">
                  <h3 className="font-bold text-gray-900 dark:text-white">Total:</h3>
                  <p className="text-gray-900 dark:text-white">Overall Percentage: {overall.percentage.toFixed(2)}%</p>
                  <p className="text-gray-900 dark:text-white">Overall Grade: {overall.grade}</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg shadow-md dark:bg-gray-700">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Marks Distribution</h3>
                  <Pie data={pieData} />
                  <p className="mt-4 text-center text-gray-900 dark:text-white">
                    {totalScored < totalMarks * 0.4 ? 'Consider focusing more on your weaker subjects.' : 'Keep up the good work!'}
                  </p>
                </div>
                <div className="p-6 rounded-lg shadow-md dark:bg-gray-700">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Marks Comparison</h3>
                  <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: true }, tooltip: { callbacks: { label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}` } } }}} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultAnalysis;
