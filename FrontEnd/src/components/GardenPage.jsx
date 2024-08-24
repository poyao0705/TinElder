import React, { useState } from 'react';

const GardenPage = () => {
  const [visibleSections, setVisibleSections] = useState({
    flowers: true,
    vegetables: true,
    herbs: true,
  });

  const handleIgnore = (section) => {
    setVisibleSections({
      ...visibleSections,
      [section]: false,
    });
  };

  return (
    <div className="relative p-4 md:p-8 lg:p-12">

      {/* Section: Flowers */}
      {visibleSections.flowers && (
        <div className="w-full max-w-[1226px] mx-auto mb-16 transition-all duration-700 ease-in-out">
          <div className="w-full flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="w-full md:w-[900px] h-auto mb-8 md:mb-0">
              <img
                className="w-full h-auto max-w-[600px] rounded-lg" // Adjust the max-width here
                src="/garden_flowers.jpeg"
                alt="Flowers"
              />
            </div>

            {/* Event Details */}
            <div className="w-full md:w-auto flex flex-col items-center md:ml-8">
              <div
                className="text-4xl md:text-5xl font-bold font-['Poppins'] leading-[45px] text-center mb-4"
                style={{
                  background: 'linear-gradient(90deg, #FF9A8B 0%, #FF6A8B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Flowers
              </div>
              <div className="text-center text-[#333333] text-base md:text-lg font-normal font-['Poppins'] leading-7 mb-4">
                Discover a variety of beautiful flowers to enhance your garden's beauty.
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#FF9A8B] via-[#FF6A8B] to-[#FFB6B9] rounded-full shadow border border-white text-white text-xl font-bold">
                  Join
                </button>
                <button
                  onClick={() => handleIgnore('flowers')}
                  className="px-8 py-4 bg-gradient-to-r from-[#FF9A8B] via-[#FF6A8B] to-[#FFB6B9] rounded-full shadow border border-white text-white text-xl font-bold"
                >
                  Ignore
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section: Vegetables */}
      {visibleSections.vegetables && (
        <div className="w-full max-w-[1226px] mx-auto mb-16 transition-all duration-700 ease-in-out">
          <div className="w-full flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="w-full md:w-[900px] h-auto mb-8 md:mb-0">
              <img
                className="w-full h-auto max-w-[600px] rounded-lg" // Adjust the max-width here
                src="/garden_vegetables.jpeg"
                alt="Vegetables"
              />
            </div>

            {/* Event Details */}
            <div className="w-full md:w-auto flex flex-col items-center md:ml-8">
              <div
                className="text-4xl md:text-5xl font-bold font-['Poppins'] leading-[45px] text-center mb-4"
                style={{
                  background: 'linear-gradient(90deg, #FF9A8B 0%, #FF6A8B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Vegetables
              </div>
              <div className="text-center text-[#333333] text-base md:text-lg font-normal font-['Poppins'] leading-7 mb-4">
                Grow fresh and healthy vegetables with our gardening tips and tricks.
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#FF9A8B] via-[#FF6A8B] to-[#FFB6B9] rounded-full shadow border border-white text-white text-xl font-bold">
                  Join
                </button>
                <button
                  onClick={() => handleIgnore('vegetables')}
                  className="px-8 py-4 bg-gradient-to-r from-[#FF9A8B] via-[#FF6A8B] to-[#FFB6B9] rounded-full shadow border border-white text-white text-xl font-bold"
                >
                  Ignore
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section: Herbs */}
      {visibleSections.herbs && (
        <div className="w-full max-w-[1226px] mx-auto mb-16 transition-all duration-700 ease-in-out">
          <div className="w-full flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="w-full md:w-[900px] h-auto mb-8 md:mb-0">
              <img
                className="w-full h-auto max-w-[600px] rounded-lg" // Adjust the max-width here
                src="/garden_herbs.jpeg"
                alt="Herbs"
              />
            </div>

            {/* Event Details */}
            <div className="w-full md:w-auto flex flex-col items-center md:ml-8">
              <div
                className="text-4xl md:text-5xl font-bold font-['Poppins'] leading-[45px] text-center mb-4"
                style={{
                  background: 'linear-gradient(90deg, #FF9A8B 0%, #FF6A8B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Herbs
              </div>
              <div className="text-center text-[#333333] text-base md:text-lg font-normal font-['Poppins'] leading-7 mb-4">
                Learn how to cultivate a variety of herbs for cooking and medicinal use.
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#FF9A8B] via-[#FF6A8B] to-[#FFB6B9] rounded-full shadow border border-white text-white text-xl font-bold">
                  Join
                </button>
                <button
                  onClick={() => handleIgnore('herbs')}
                  className="px-8 py-4 bg-gradient-to-r from-[#FF9A8B] via-[#FF6A8B] to-[#FFB6B9] rounded-full shadow border border-white text-white text-xl font-bold"
                >
                  Ignore
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GardenPage;
