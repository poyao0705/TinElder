import React, { useState } from 'react';

const Music = () => {
  const [visibleSections, setVisibleSections] = useState({
    singing: true,
    piano: true,
    violin: true,
  });

  const handleIgnore = (section) => {
    setVisibleSections({
      ...visibleSections,
      [section]: false,
    });
  };

  return (
    <div className="relative  p-4 md:p-8 lg:p-12">

      {/* Section: Singing */}
      {visibleSections.singing && (
        <div className="w-full max-w-[1226px] mx-auto mb-16 transition-all duration-700 ease-in-out">
          <div className="w-full flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="w-full md:w-[1170px] h-auto mb-8 md:mb-0">
              <img
                className="w-full h-auto rounded-lg"
                src="/4.png"
                alt="Singing"
              />
            </div>

            {/* Event Details */}
            <div className="w-full md:w-auto flex flex-col items-center md:ml-8">
              <div
                className="text-4xl md:text-5xl font-bold font-['Poppins'] leading-[45px] text-center mb-4"
                style={{
                  background: 'linear-gradient(90deg, #D9A7C7 0%, #9796f0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Singing
              </div>
              <div className="text-center text-[#333333] text-base md:text-lg font-normal font-['Poppins'] leading-7 mb-4">
              Our singing group is dedicated to exploring a wide range of vocal styles, from classical to contemporary. 
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#9796f0] via-[#f0c1d6] to-[#fbc7d4] rounded-full shadow border border-white text-white text-xl font-bold">
                  Join
                </button>
                <button
                  onClick={() => handleIgnore('singing')}
                  className="px-8 py-4 bg-gradient-to-r from-[#9796f0] via-[#f0c1d6] to-[#fbc7d4] rounded-full shadow border border-white text-white text-xl font-bold"
                >
                  Ignore
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section: Piano */}
      {visibleSections.piano && (
        <div className="w-full max-w-[1226px] mx-auto mb-16 transition-all duration-700 ease-in-out">
          <div className="w-full flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="w-full md:w-[1170px] h-auto mb-8 md:mb-0">
              <img
                className="w-full h-auto rounded-lg"
                src="/3.png"
                alt="Piano"
              />
            </div>

            {/* Event Details */}
            <div className="w-full md:w-auto flex flex-col items-center md:ml-8">
              <div
                className="text-4xl md:text-5xl font-bold font-['Poppins'] leading-[45px] text-center mb-4"
                style={{
                    background: 'linear-gradient(90deg, #D9A7C7 0%, #9796f0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
              >
                Piano
              </div>
              <div className="text-center text-[#333333] text-base md:text-lg font-normal font-['Poppins'] leading-7 mb-4">
              The piano group brings together enthusiasts of all levels to study and play a diverse repertoire.
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#9796f0] via-[#f0c1d6] to-[#fbc7d4] rounded-full shadow border border-white text-white text-xl font-bold">
                  Join
                </button>
                <button
                  onClick={() => handleIgnore('piano')}
                  className="px-8 py-4 bg-gradient-to-r from-[#9796f0] via-[#f0c1d6] to-[#fbc7d4] rounded-full shadow border border-white text-white text-xl font-bold"
                >
                  Ignore
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section: Violin */}
      {visibleSections.violin && (
        <div className="w-full max-w-[1226px] mx-auto mb-16 transition-all duration-700 ease-in-out">
          <div className="w-full flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="w-full md:w-[1170px] h-auto mb-8 md:mb-0">
              <img
                className="w-full h-auto rounded-lg"
                src="/5.png"
                alt="Violin"
              />
            </div>

            {/* Event Details */}
            <div className="w-full md:w-auto flex flex-col items-center md:ml-8">
              <div
                className="text-4xl md:text-5xl font-bold font-['Poppins'] leading-[45px] text-center mb-4"
                style={{
                    background: 'linear-gradient(90deg, #D9A7C7 0%, #9796f0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
              >
                Violin
              </div>
              <div className="text-center text-[#333333] text-base md:text-lg font-normal font-['Poppins'] leading-7 mb-4">
              Our violin group offers a supportive environment for violinists of varying experience to refine their craft.
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#9796f0] via-[#f0c1d6] to-[#fbc7d4] rounded-full shadow border border-white text-white text-xl font-bold">
                  Join
                </button>
                <button
                  onClick={() => handleIgnore('violin')}
                  className="px-8 py-4 bg-gradient-to-r from-[#9796f0] via-[#f0c1d6] to-[#fbc7d4] rounded-full shadow border border-white text-white text-xl font-bold"
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

export default Music;