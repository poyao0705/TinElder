import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainContent = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4">
      {/* Left Side: Title and Buttons */}
      <div className="w-full md:w-2/3 lg:w-[60%] flex flex-col justify-center items-center px-6 md:px-12 lg:px-16">
        {/* Title */}
        <div className="text-center text-black text-[48px] sm:text-[64px] md:text-[100px] lg:text-[140px] font-normal font-['Vollkorn'] leading-tight relative">
          TinElder
          <span className="absolute top-0 left-0 text-black opacity-50 blur-[4px] -translate-x-[4px] -translate-y-[4px]">
            TinElder
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-10 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] flex flex-col items-center">
          <button
            onClick={() => navigate('/login')}
            className="w-full h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] shadow border border-white flex justify-center items-center mb-6 rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-center text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold font-['Roboto']">
              Login
            </div>
          </button>
          <button
            onClick={() => navigate('/register')}
            className="w-full h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] shadow border border-white flex justify-center items-center rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-center text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold font-['Roboto']">
              Create an account
            </div>
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/3 lg:w-[25%] flex justify-center items-center mt-10 md:mt-0">
        <img
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
          src="./giphy.gif"
          alt="Placeholder"
        />
      </div>
    </div>
  );
};

export default MainContent;