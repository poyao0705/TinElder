import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import axios from 'axios';
axios.defaults.withCredentials = true;

const RegisterPage = () => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();  // Initialize navigate function

  const validateInput = () => {
    const newErrors = {};

    if (!userName.trim()) {
      newErrors.userName = 'Please enter your user name.';
    }

    if (!phoneNumber.match(/^\d{10}$/)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number.';
    }

    if (!pin.match(/^\d{4}$/)) {
      newErrors.pin = 'Please enter a valid 4-digit pin.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://127.0.0.1:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Ensure this is set
            },
            body: JSON.stringify({
                username: 'exampleUser',
                phone_number: '1234567890',
                pin: '1234',
            }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log(data.message);
            navigate('/login');  // Redirect to login page using useNavigate
        } else {
            console.error(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

  return (
<<<<<<< HEAD
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white p-4">
      <form onSubmit={handleSignup} className="w-full max-w-lg flex flex-col items-center">
=======
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col items-center">
>>>>>>> 01c2aabbbe97f0645fbc682846b3bfcc4790ed58
        {/* User Name Text Block */}
        <div className="w-full h-auto px-6 py-5 bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] rounded-[50px] shadow border border-white justify-center items-center gap-2.5 inline-flex mb-8">
          <div className="text-center text-white text-[32px] md:text-[32px] lg:text-[32px] font-semibold font-['Roboto']">
            Please enter your user name:
          </div>
        </div>

        {/* User Name Input */}
        <div className="w-full flex flex-col items-center mb-8">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your user name"
            className="w-full h-[50px] md:h-[64px] px-4 py-2 text-xl md:text-[32px] text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9796f0] focus:border-transparent mb-4"
          />
        </div>
        {errors.userName && (
          <div className="text-red-600 text-lg mb-4">{errors.userName}</div>
        )}

        {/* Phone Number and 4-Digit Pin Text Block */}
        <div className="w-full h-auto px-6 py-5 bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] rounded-[50px] shadow border border-white justify-center items-center gap-2.5 inline-flex mb-8">
          <div className="text-center text-white text-[32px] md:text-[32px] lg:text-[32px] font-semibold font-['Roboto']">
            Please enter your phone number and 4-digit pin:
          </div>
        </div>

        {/* Phone Number Input */}
        <div className="w-full flex flex-col items-center mb-8">
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full h-[50px] md:h-[64px] px-4 py-2 text-xl md:text-[32px] text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9796f0] focus:border-transparent mb-4"
          />
        </div>
        {errors.phoneNumber && (
          <div className="text-red-600 text-lg mb-4">{errors.phoneNumber}</div>
        )}

        {/* 4-Digit Pin Input with Submit Button */}
        <div className="w-full flex flex-col items-center mb-8">
          <input
            type="text"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            maxLength="4"
            placeholder="Enter your 4-digit pin"
            className="w-full h-[50px] md:h-[64px] px-4 py-2 text-xl md:text-[32px] text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9796f0] focus:border-transparent mb-4"
          />
          <button
            type="submit"
            className="w-full max-w-xs h-[50px] md:h-[60px] px-6 py-2 rounded-lg border-2 border-[#0052d4] text-center text-black text-lg md:text-[32px] font-medium font-['Roboto']"
          >
            Submit
          </button>
        </div>
        {errors.pin && (
          <div className="text-red-600 text-lg mb-4">{errors.pin}</div>
        )}
        
      </form>
    </div>
  );
};

export default RegisterPage;