import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validateInput = () => {
    // Simple validation for phone number and pin
    if (!phoneNumber.match(/^\d{10}$/)) {
      return 'Please enter a valid 10-digit phone number.';
    }
    if (!pin.match(/^\d{4}$/)) {
      return 'Please enter a valid 4-digit pin.';
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateInput();
    if (validationError) {
      setError(validationError);
    } else {
      // Simulate successful login (replace this with your login logic)
      setError(null);
      alert('Login successful!');
      navigate('/home');  // Redirect to HomePage after successful login
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-4">
      {/* Title Block */}
      <div className="w-full max-w-[90%] h-auto px-6 py-4 bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] shadow border border-white flex justify-center items-center mb-8 rounded-lg">
        <div className="text-center text-white font-semibold font-['Roboto'] text-[32px] md:text-[32px]">
          Login to Your Account
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="w-full max-w-[90%] mb-4 text-red-600 text-center">
          {error}
        </div>
      )}

      {/* Phone Number Input Block */}
      <div className="w-full max-w-[90%] h-auto px-6 py-4 bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] shadow border border-white flex justify-center items-center mb-8 rounded-lg">
        <div className="text-center text-white font-semibold font-['Roboto'] text-[32px] md:text-[32px]">
          Please enter your phone number and pin:
        </div>
      </div>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter your phone number"
        className="w-full max-w-[90%] h-auto px-4 py-2 text-lg md:text-lg text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9796f0] focus:border-transparent mb-12"
      />

      {/* 4-Digit Pin Input */}
      <input
        type="text"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        maxLength="4"
        placeholder="Enter your 4-digit pin"
        className="w-full max-w-[90%] h-auto px-4 py-2 text-lg md:text-lg text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9796f0] focus:border-transparent mb-12"
      />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        type="submit"
<<<<<<< Updated upstream
        className="w-full max-w-[220px] h-auto px-6 py-2 rounded-lg border-2 border-[#0052d4] text-center text-black font-medium font-['Roboto'] text-lg md:text-lg"
=======
        className="w-full max-w-[220px] h-auto px-6 py-2 rounded-lg border-2 border-[#0052d4] text-center text-black font-medium font-['Roboto'] text-lg md:text-lg transition-transform transform hover:bg-[#0052d4] hover:text-white hover:-translate-y-1 hover:shadow-lg"
>>>>>>> Stashed changes
      >
        Submit
      </button>
    </div>
  );
};

export default LoginPage;