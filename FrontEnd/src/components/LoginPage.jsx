import React, { useState } from 'react';

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Correct Content-Type header
            },
            body: JSON.stringify({
                phone_number: phoneNumber,
                pin: pin,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage(data.message);
        } else {
            setMessage(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        setMessage('An error occurred during login.');
    }
};

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white p-4">
      {/* Title Block */}
      <div className="w-full max-w-[90%] h-auto px-6 py-4 bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] shadow border border-white flex justify-center items-center mb-8 rounded-lg">
        <div className="text-center text-white font-semibold font-['Roboto'] text-[32px] md:text-[32px]">
          Login to Your Account
        </div>
      </div>

      {/* Phone Number Input Block */}
      <div className="w-full max-w-[90%] h-auto px-6 py-4 bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] shadow border border-white flex justify-center items-center mb-8 rounded-lg">
        <div className="text-center text-white font-semibold font-['Roboto'] text-[32px] md:text-[32px]">
          Please enter your phone number and pin:
        </div>
      </div>

      {/* Phone Number Input */}
      <input
        type="text"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="w-full max-w-[90%] h-auto px-4 py-2 text-lg md:text-lg text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9796f0] focus:border-transparent mb-12"
      />

      {/* 4-Digit Pin Input */}
      <input
        type="text"
        maxLength="4"
        placeholder="Enter your 4-digit pin"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        className="w-full max-w-[90%] h-auto px-4 py-2 text-lg md:text-lg text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9796f0] focus:border-transparent mb-12"
      />

      {/* Submit Button */}
      <button
        type="submit"
        onClick={handleLogin}
        className="w-full max-w-[220px] h-auto px-6 py-2 rounded-lg border-2 border-[#0052d4] text-center text-black font-medium font-['Roboto'] text-lg md:text-lg"
      >
        Submit
      </button>

      {/* Display Message */}
      {message && (
        <div className="w-full max-w-[90%] h-auto px-6 py-2 mt-4 text-center text-white bg-[#0052d4] rounded-lg">
          {message}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
