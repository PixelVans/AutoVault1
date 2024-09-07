import React, { useState } from 'react';

export default function Settings() {
  const [suggestion, setSuggestion] = useState('');

  const handleSuggestionSubmit = () => {
    alert(`Thank you for your suggestion: ${suggestion}`);
    setSuggestion(''); // Clear input after submission
  };

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-screen bg-gray-100 shadow-lg p-6">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-4xl">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Settings</h2>
        <p className="text-lg text-gray-600 mb-4">
          We havent fully customized the settings yet, but we're working on it! If you have any suggestions for new settings, please share them with us.
        </p>
      </div>

      {/* Suggestion Form */}
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Suggest a Setting</h3>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
          rows="4"
          placeholder="Enter your suggestion..."
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
        />
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-md shadow hover:bg-gray-800 transition-all"
          onClick={handleSuggestionSubmit}
        >
          Submit Suggestion
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Placeholder cards */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Profile Settings</h3>
          <ul className="text-gray-600">
            <li>Update Name</li>
            <li>Change Email</li>
            <li>Change Password</li>
          </ul>
        </div>
        
        {/* More cards for future features */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Notification Preferences</h3>
          <ul className="text-gray-600">
            <li>Email Notifications</li>
            <li>SMS Notifications</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
