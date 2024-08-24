import React from 'react';

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
      <div className="w-[1074px] h-[171px] px-[26px] py-[5px] bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] shadow border border-white justify-center items-center mb-8 rounded-lg">
        <div className="text-center text-white text-[64px] font-semibold font-['Roboto']">
          Please enter your phone number:
        </div>
      </div>
      <input
        type="text"
        placeholder="Enter your phone number"
        className="w-[1074px] h-[64px] px-4 py-2 text-2xl text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9796f0] focus:border-transparent mb-12"
      />
      <div className="w-[1074px] h-[171px] px-[26px] py-[5px] bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] shadow border border-white justify-center items-center mb-8 rounded-lg">
        <div className="text-center text-white text-[64px] font-semibold font-['Roboto']">
          Please enter your 4-digit pin:
        </div>
      </div>
      <input
        type="text"
        maxLength="4"
        placeholder="Enter your 4-digit pin"
        className="w-[1074px] h-[64px] px-4 py-2 text-2xl text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9796f0] focus:border-transparent"
      />
    </div>
  );
};

export default LoginPage;