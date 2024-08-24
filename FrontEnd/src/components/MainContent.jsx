import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainContent = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white px-4">
      {/* Title */}
      <div className="text-center text-black text-[48px] md:text-[80px] lg:text-[120px] font-normal font-['Vollkorn'] leading-tight">
        TinElder
      </div>

      {/* Buttons */}
      <div className="mt-10 w-full flex flex-col items-center">
        <button
          onClick={() => navigate('/login')}
          className="w-full max-w-[391px] h-[70px] md:h-[99px] bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] shadow border border-white flex justify-center items-center mb-6 rounded-lg"
        >
          <div className="text-center text-white text-4xl font-semibold font-['Roboto']">
            Login
          </div>
        </button>
        <button
          onClick={() => navigate('/register')}
          className="w-full max-w-[391px] h-[70px] md:h-[99px] bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] shadow border border-white flex justify-center items-center rounded-lg"
        >
          <div className="text-center text-white text-4xl font-semibold font-['Roboto']">
            Create an account
          </div>
        </button>
      </div>
    </div>
  );
};

export default MainContent;