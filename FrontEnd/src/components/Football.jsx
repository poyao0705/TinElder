import React, { useState } from 'react';
import { useEvents } from '../context/EventsContext'; 
import { useNavigate } from 'react-router-dom'; // Import the useEvents hook

const Football = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [events, setEvents] = useState(true);

  
  // const { addEvent } = useEvents();  // Get the addEvent function from context
  const { addEvent } = useEvents();  // Get the addEvent function from context
  const navigate = useNavigate();


  const handleIgnore = () => {
    setIsVisible(false);
  };

  const handleJoin = () => {
    const footballEvent = {
      name: 'Football',
      date: 'July 22, 2024, 3:00 PM - 5:00 PM',
      location: 'Community Sports Center, Court 3',
    };
    addEvent(footballEvent);  // Add the football event to the user's events
  };

  return (
    
    <div className="relative p-4 md:p-8 lg:p-12">
      {/* Top Gradient Header */}
      <div className="w-full max-w-[851px] mx-auto h-auto px-4 py-2 bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] rounded-[40px] shadow border border-white flex justify-center items-center mb-16">
        <div className="text-center text-white text-[32px] md:text-[48px] lg:text-[64px] font-semibold font-['Roboto']">
          Football Event
        </div>
      </div>

      {/* Event Details Section */}
      {isVisible && (
        <div
          className={`w-full max-w-[1226px] mx-auto mb-16 transition-all duration-700 ease-in-out ${
            isVisible ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'
          }`}
          style={{ overflow: 'hidden' }}
        >
          <div className="w-full flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="w-full md:w-[1170px] h-auto mb-8 md:mb-0">
              <img
                className="w-full h-auto rounded-lg"
                src="/sport1.png"
                alt="Football"
              />
            </div>

            {/* Event Details */}
            <div className="w-full md:w-auto flex flex-col items-center md:ml-8">
              <div
                className="text-4xl md:text-5xl font-bold font-['Poppins'] leading-[45px] text-center mb-4"
                style={{
                  background: 'linear-gradient(90deg, #9796f0 0%, #D9A7C7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Football
              </div>
              <div className="text-center text-[#333333] text-base md:text-lg font-normal font-['Poppins'] leading-7 mb-4">
                Join our football group to enhance your skills in tactics, fitness, and teamwork on the field.
              </div>

              {/* Time and Location */}
              <div className="text-center text-[#333333] text-lg md:text-xl font-normal font-['Poppins'] leading-7 mb-4">
                <p className="mb-2"><strong>Date & Time:</strong> July 22, 2024, 3:00 PM - 5:00 PM</p>
                <p><strong>Location:</strong> Community Sports Center, Court 3</p>
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={handleJoin}  // Attach the handleJoin function to the "Join" button
                  className="px-8 py-4 bg-gradient-to-r from-[#9796f0] via-[#f0c1d6] to-[#fbc7d4] rounded-full shadow border border-white text-white text-xl font-bold"
                >
                  Join
                </button>
                <button
                  onClick={handleIgnore}
                  className="px-8 py-4 bg-gradient-to-r from-[#9796f0] via-[#f0c1d6] to-[#fbc7d4] rounded-full shadow border border-white text-white text-xl font-bold"
                >
                  Ignore
                </button>
              </div>
            </div>
          </div>

          {/* Read More Image Button */}
          <div className="flex justify-center mt-8">
            <div
              className="h-[10vw] max-h-[60px] px-[5vw] max-px-[30px] py-[3vw] max-py-[18px] bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] rounded-[50px] shadow border border-white flex items-center gap-5 cursor-pointer transition-transform transform hover:-translate-y-1"
              onClick={() => navigate('/add-event')}
            >
              <div className="text-white text-[2.5vw] max-text-base font-normal font-['DM Sans']">
                Add events
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Football;