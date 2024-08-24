import React, { createContext, useState, useContext } from 'react';

// Create a context for the events
const EventsContext = createContext();

export const useEvents = () => {
  return useContext(EventsContext);
};

export const EventsProvider = ({ children }) => {
  const [joinedEvents, setJoinedEvents] = useState([]);

  const addEvent = (event) => {
    setJoinedEvents((prevEvents) => [...prevEvents, event]);
  };

  return (
    <EventsContext.Provider value={{ joinedEvents, addEvent }}>
      {children}
    </EventsContext.Provider>
  );
};