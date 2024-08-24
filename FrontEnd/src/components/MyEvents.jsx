
import React from 'react';

const MyEvents = () => {
  return (
    <div className="w-[1821px] h-[2930px] relative">
      <div className="w-[1440px] h-[2930px] left-[277px] top-0 absolute bg-white flex-col justify-start items-start inline-flex">
        <div className="self-stretch opacity-5 justify-between items-start inline-flex">
          <div className="w-[3357px] h-[0px] origin-top-left -rotate-90 border border-black"></div>
          <div className="w-[3357px] h-[0px] origin-top-left -rotate-90 border border-black"></div>
          <div className="w-[3357px] h-[0px] origin-top-left -rotate-90 border border-black"></div>
          <div className="w-[3357px] h-[0px] origin-top-left -rotate-90 border border-black"></div>
          <div className="w-[3357px] h-[0px] origin-top-left -rotate-90 border border-black"></div>
        </div>
        <div className="w-[547px] h-[123px] px-[22px] py-[19px] bg-[#ffefef] rounded-[11px] justify-start items-start gap-[62px] inline-flex">
          <div className="w-20 h-20 relative" />
          <div className="w-20 h-20 relative" />
          <div className="w-20 h-20 relative" />
          <div className="w-20 h-20 relative" />
        </div>
        <div className="w-[1440px] h-[885.85px] relative" />
      </div>
      <div className="w-[1440px] h-[885.85px] left-0 top-[357px] absolute" />
      <div className="w-[1074px] h-[171px] px-[26px] py-[5px] left-[440px] top-[379px] absolute bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] shadow border border-white justify-center items-center gap-2.5 inline-flex">
        <div className="text-center text-white text-[64px] font-semibold font-['Roboto']">Upcoming events</div>
      </div>
      <div className="w-[980px] h-[430px] left-[482px] top-[642px] absolute bg-white rounded-[30px] shadow" />
      <div className="w-[1074px] h-[171px] px-[26px] py-[5px] left-[440px] top-[379px] absolute bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] shadow border border-white justify-center items-center gap-2.5 inline-flex">
        <div className="text-center text-white text-[64px] font-semibold font-['Roboto']">Upcoming events</div>
      </div>
      <div className="w-[980px] h-[430px] left-[482px] top-[642px] absolute bg-white rounded-[30px] shadow" />
      <div className="w-[1440px] h-[885.85px] left-[381px] top-[1120px] absolute" />
      <div className="left-[542px] top-[1379px] absolute text-center text-[#266937] text-[64px] font-bold font-['Inter'] leading-7">Location: </div>
      <div className="left-[543px] top-[963px] absolute text-center text-[#266937] text-[64px] font-bold font-['Inter'] leading-7">Host:</div>
      <div className="left-[543px] top-[963px] absolute text-center text-[#266937] text-[64px] font-bold font-['Inter'] leading-7">Host:</div>
      <div className="left-[543px] top-[834px] absolute text-center text-[#266937] text-[64px] font-bold font-['Inter'] leading-7">Date and Time:</div>
      <div className="left-[543px] top-[834px] absolute text-center text-[#266937] text-[64px] font-bold font-['Inter'] leading-7">Date and Time:</div>
      <div className="w-[1074px] h-[171px] px-[26px] py-[5px] left-[440px] top-[379px] absolute bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] rounded-[40px] shadow border border-white justify-center items-center gap-2.5 inline-flex">
        <div className="text-center text-white text-[64px] font-semibold font-['Roboto']">My Events</div>
      </div>
      <div className="left-[542.50px] top-[704.50px] absolute text-center text-[#266937] text-[64px] font-bold font-['Inter'] leading-7">Location: </div>
      <div className="left-[542.50px] top-[704.50px] absolute text-center text-[#266937] text-[64px] font-bold font-['Inter'] leading-7">Location: </div>
      <div className="left-[542.50px] top-[704.50px] absolute text-center text-[#266937] text-[64px] font-bold font-['Inter'] leading-7">Location: </div>
      <div className="left-[553px] top-[1508px] absolute text-center text-[#266937] text-[64px] font-bold font-['Inter'] leading-7">Date and Time:</div>
      <div className="left-[553px] top-[1637px] absolute text-center text-[#266937] text-[64px] font-bold font-['Inter'] leading-7">Host:</div>
      <div className="left-[542px] top-[2095px] absolute text-center text-[#266937] text-[64px] font-bold font-['Inter'] leading-7">Location: </div>
      <div className="left-[553px] top-[2224px] absolute text-center text-[#266937] text-[64px] font-bold font-['Inter'] leading-7">Date and Time:</div>
      <div className="left-[553px] top-[2353px] absolute text-center text-[#266937] text-[64px] font-bold font-['Inter'] leading-7">Host:</div>
=======
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
>>>>>>> Stashed changes
    </div>
  );
};

<<<<<<< Updated upstream
export default MyEvents;
=======
export default MyEvents;
>>>>>>> Stashed changes
