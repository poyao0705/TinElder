import React, { useState } from 'react';

const CookingPage = () => {
  const [visibleSections, setVisibleSections] = useState({
    main: true,
    dessert: true,
    appetizers: true,
  });

  const handleIgnore = (section) => {
    setVisibleSections({
      ...visibleSections,
      [section]: false,
    });
  };

  return (
    <div className="relative p-4 md:p-8 lg:p-12">

      {/* Section: Main Course */}
      {visibleSections.main && (
        <div className="w-full max-w-[1226px] mx-auto mb-16 transition-all duration-700 ease-in-out">
          <div className="w-full flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="w-full md:w-[900px] h-auto mb-8 md:mb-0">
              <img
                className="w-full h-auto max-w-[600px] rounded-lg" // Adjust the max-width here
                src="/cooking_main.jpeg"
                alt="Main Course"
              />
            </div>

            {/* Event Details */}
            <div className="w-full md:w-auto flex flex-col items-center md:ml-8">
              <div
                className="text-4xl md:text-5xl font-bold font-['Poppins'] leading-[45px] text-center mb-4"
                style={{
                  background: 'linear-gradient(90deg, #FBBF24 0%, #F87171 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Main Course
              </div>
              <div className="text-center text-[#333333] text-base md:text-lg font-normal font-['Poppins'] leading-7 mb-4">
                Explore our main course recipes, from hearty stews to elegant entrees.
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#FBBF24] via-[#F87171] to-[#FBC7D4] rounded-full shadow border border-white text-white text-xl font-bold">
                  Join
                </button>
                <button
                  onClick={() => handleIgnore('main')}
                  className="px-8 py-4 bg-gradient-to-r from-[#FBBF24] via-[#F87171] to-[#FBC7D4] rounded-full shadow border border-white text-white text-xl font-bold"
                >
                  Ignore
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section: Dessert */}
      {visibleSections.dessert && (
        <div className="w-full max-w-[1226px] mx-auto mb-16 transition-all duration-700 ease-in-out">
          <div className="w-full flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="w-full md:w-[900px] h-auto mb-8 md:mb-0">
              <img
                className="w-full h-auto max-w-[600px] rounded-lg" // Adjust the max-width here
                src="/cooking_dessert.jpeg"
                alt="Dessert"
              />
            </div>

            {/* Event Details */}
            <div className="w-full md:w-auto flex flex-col items-center md:ml-8">
              <div
                className="text-4xl md:text-5xl font-bold font-['Poppins'] leading-[45px] text-center mb-4"
                style={{
                  background: 'linear-gradient(90deg, #FBBF24 0%, #F87171 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Dessert
              </div>
              <div className="text-center text-[#333333] text-base md:text-lg font-normal font-['Poppins'] leading-7 mb-4">
                Delight in our selection of sweet treats and confections.
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#FBBF24] via-[#F87171] to-[#FBC7D4] rounded-full shadow border border-white text-white text-xl font-bold">
                  Join
                </button>
                <button
                  onClick={() => handleIgnore('dessert')}
                  className="px-8 py-4 bg-gradient-to-r from-[#FBBF24] via-[#F87171] to-[#FBC7D4] rounded-full shadow border border-white text-white text-xl font-bold"
                >
                  Ignore
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section: Appetizers */}
      {visibleSections.appetizers && (
        <div className="w-full max-w-[1226px] mx-auto mb-16 transition-all duration-700 ease-in-out">
          <div className="w-full flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="w-full md:w-[900px] h-auto mb-8 md:mb-0">
              <img
                className="w-full h-auto max-w-[600px] rounded-lg" // Adjust the max-width here
                src="/cooking_appetizers.jpeg"
                alt="Appetizers"
              />
            </div>

            {/* Event Details */}
            <div className="w-full md:w-auto flex flex-col items-center md:ml-8">
              <div
                className="text-4xl md:text-5xl font-bold font-['Poppins'] leading-[45px] text-center mb-4"
                style={{
                  background: 'linear-gradient(90deg, #FBBF24 0%, #F87171 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Appetizers
              </div>
              <div className="text-center text-[#333333] text-base md:text-lg font-normal font-['Poppins'] leading-7 mb-4">
                Discover our range of appetizers to start your meal on the right note.
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#FBBF24] via-[#F87171] to-[#FBC7D4] rounded-full shadow border border-white text-white text-xl font-bold">
                  Join
                </button>
                <button
                  onClick={() => handleIgnore('appetizers')}
                  className="px-8 py-4 bg-gradient-to-r from-[#FBBF24] via-[#F87171] to-[#FBC7D4] rounded-full shadow border border-white text-white text-xl font-bold"
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

export default CookingPage;
