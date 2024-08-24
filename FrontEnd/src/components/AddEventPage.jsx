import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEvents } from '../context/EventsContext';
import { UserContext } from '../context/UserContext';  // Assuming you have a UserContext to get the current user

const AddEventPage = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const { addEvent } = useEvents();  // Function to add the event to "My Events"
  const { currentUser } = useContext(UserContext);  // Get the current user from the UserContext
  const navigate = useNavigate();

  const handleAddEvent = () => {
    const newEvent = {
      name: eventName,
      date: eventDate,
      location: eventLocation,
      host: currentUser.username,  // Automatically set the host to the current user
    };

    // Add event to "My Events"
    addEvent(newEvent);

    // Ideally, add the event to the shared upcoming events list as well (mocked here)
    // This can be done using a global context or making an API call to update the upcoming events

    // Navigate to the "My Events" page after adding the event
    navigate('/myEvent');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Event</h1>
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="Event Date and Time"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="Event Location"
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <button
          onClick={handleAddEvent}
          className="w-full px-4 py-2 bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] text-white rounded shadow hover:shadow-lg"
        >
          Add Event
        </button>
      </div>
    </div>
  );
};

export default AddEventPage;