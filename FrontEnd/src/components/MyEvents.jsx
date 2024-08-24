import React from 'react';
import { useEvents } from '../context/EventsContext';

const MyEvents = () => {
  const { joinedEvents } = useEvents();

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <h2 className="text-4xl font-bold mb-8 text-center">My Events</h2>
      {joinedEvents.length > 0 ? (
        <div className="grid gap-8 md:gap-12 lg:gap-16">
          {joinedEvents.map((event, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#266937]">{event.name}</h3>
              <p className="text-lg md:text-xl"><strong>Date & Time:</strong> {event.date}</p>
              <p className="text-lg md:text-xl"><strong>Location:</strong> {event.location}</p>
              <p className="text-lg md:text-xl"><strong>Host:</strong> {event.host}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg md:text-xl text-gray-500">No events joined yet.</p>
      )}
    </div>
  );
};

export default MyEvents;
