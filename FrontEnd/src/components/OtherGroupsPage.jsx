import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OtherGroupsPage = () => {
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState('');

  const handleAddGroup = () => {
    if (groupName.trim() !== '') {
      setGroups([...groups, groupName]);  // Add the new group to the list
      setGroupName(''); // Clear the input field after adding
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4">
      {/* Title */}
      <h1 className="text-[#53a8d7] text-[32px] md:text-[48px] font-bold font-['Inter'] mb-8">
        Manage Your Groups
      </h1>

      {/* Add Group Form */}
      <div className="w-full max-w-[400px] flex flex-col items-center">
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded-lg border-2 border-[#53a8d7] text-black text-lg"
          placeholder="Enter group name"
        />
        <button
          onClick={handleAddGroup}
          className="w-full max-w-[220px] h-auto px-6 py-2 rounded-lg border-2 border-[#0052d4] text-center text-black font-medium font-['Roboto'] text-lg md:text-lg transition-transform transform hover:bg-[#0052d4] hover:text-white hover:-translate-y-1 hover:shadow-lg"
        >
          Add Group
        </button>
      </div>

      {/* Display Groups */}
      <div className="mt-8 w-full max-w-[600px]">
        {groups.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4">
            {groups.map((group, index) => (
              <li
                key={index}
                className="backdrop-blur-[42px] bg-opacity-30 rounded-[20px] border-2 border-white shadow-md flex items-center justify-center p-4 text-center text-[#53a8d7] text-[20px] md:text-[24px] font-bold font-['Inter']"
              >
                {group}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No groups added yet.</p>
        )}
      </div>
    </div>
  );
};

export default OtherGroupsPage;