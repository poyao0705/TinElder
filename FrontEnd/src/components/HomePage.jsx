import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/myEvent');  // Navigate to MyEvents page when clicked
  };

  return (
    <div onClick={handleNavigation} className="relative p-4 md:p-8 lg:p-12 cursor-pointer">
      {/* Top Gradient Header */}
      <div className="w-full max-w-[851px] mx-auto h-auto px-4 py-2 bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] rounded-[40px] shadow border border-white flex justify-center items-center mb-16">
        <div className="text-center text-white text-[32px] md:text-[48px] lg:text-[64px] font-semibold font-['Roboto']">
          Home Page
        </div>
      </div>

      {/* Image and Button Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="backdrop-blur-[42px] bg-opacity-30 rounded-[40px] border-4 border-white shadow-md flex flex-col items-center justify-between p-4">
          <img
            className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-[15px] border border-neutral-400"
            src="/home1.jpeg"
            alt="Gardening"
          />
          <div className="mt-4 w-full">
            <div className="w-full px-4 py-2  rounded-[15px] shadow text-[#266937] text-[24px] md:text-[32px] font-bold font-['Inter'] text-center">
              Gardening
            </div>
          </div>
        </div>

        <div className="backdrop-blur-[42px] bg-opacity-30 rounded-[40px] border-4 border-white shadow-md flex flex-col items-center justify-between p-4">
          <img
            className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-[15px] border border-neutral-400"
            src="/home2.jpeg"
            alt="Cooking"
          />
          <div className="mt-4 w-full">
            <div className="w-full px-4 py-2  rounded-[15px] shadow text-[#d67f2f] text-[24px] md:text-[32px] font-bold font-['Inter'] text-center">
              Cooking
            </div>
          </div>
        </div>

        <div className="backdrop-blur-[42px] bg-opacity-30 rounded-[40px] border-4 border-white shadow-md flex flex-col items-center justify-between p-4">
          <img
            className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-[15px] border border-neutral-400"
            src="/home3.jpeg"
            alt="Music"
          />
          <div className="mt-4 w-full">
            <div className="w-full px-4 py-2  rounded-[15px] shadow text-[#53a8d7] text-[24px] md:text-[32px] font-bold font-['Inter'] text-center">
              Music
            </div>
          </div>
        </div>

        <div className="backdrop-blur-[42px] bg-opacity-30 rounded-[40px] border-4 border-white shadow-md flex flex-col items-center justify-between p-4">
          <img
            className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-[15px] border border-neutral-400"
            src="/home4.jpeg"
            alt="Sport"
          />
          <div className="mt-4 w-full">
            <div className="w-full px-4 py-2  rounded-[15px] shadow text-[#5653d7] text-[24px] md:text-[32px] font-bold font-['Inter'] text-center">
              Sport
            </div>
          </div>
        </div>
      </div>

      {/* Lower Image and Category */}
      <div className="mt-16 grid grid-cols-1 gap-8">
        <div className="backdrop-blur-[42px] bg-opacity-30 rounded-[40px] border-4 border-white shadow-md flex flex-col items-center justify-between p-4">
          <img
            className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-[15px] border border-neutral-400"
            src="/home5.jpeg"
            alt="Other"
          />
          <div className="mt-4 w-full">
            <div className="w-full px-4 py-2  rounded-[15px] shadow text-[#53a8d7] text-[24px] md:text-[32px] font-bold font-['Inter'] text-center">
              Other
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;