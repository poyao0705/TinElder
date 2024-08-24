import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainContent = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-4">
      {/* Title */}
      <div className="text-center text-black text-[36px] sm:text-[48px] md:text-[80px] lg:text-[120px] font-normal font-['Vollkorn'] leading-tight">
        TinElder
      </div>

      {/* Buttons */}
      <div className="mt-10 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] flex flex-col items-center">
        <button
          onClick={() => navigate('/login')}
          className="w-full h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] shadow border border-white flex justify-center items-center mb-6 rounded-lg"
        >
          <div className="text-center text-white text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-semibold font-['Roboto']">
            Login
          </div>
        </button>
        <button
          onClick={() => navigate('/register')}
          className="w-full h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] shadow border border-white flex justify-center items-center mb-6 rounded-lg"
        >
          <div className="text-center text-white text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-semibold font-['Roboto']">
            Create an account
          </div>
        </button>
        {/*"Go to My Events" button */}
        <button
          onClick={() => navigate('/myEvent')}
          className="w-full h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] shadow border border-white flex justify-center items-center rounded-lg"
        >
          <div className="text-center text-white text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-semibold font-['Roboto']">
            Go to My Events
          </div>
        </button>
      </div>
    </div>
  );
};

export default MainContent;
