import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sport = () => {
  const navigate = useNavigate();
  const [visibleSections, setVisibleSections] = useState({
    football: true,
    basketball: true,
    swimming: true,
    tennis: true,
  });

  const handleIgnore = (section) => {
    setVisibleSections({
      ...visibleSections,
      [section]: false,
    });
  };

  const handleJoin = (path) => {
    navigate(path);
  };

  return (
    <div className="relative p-4 md:p-8 lg:p-12">
      {/* Section: Football */}
      {visibleSections.football && (
        <div className="w-full max-w-[1226px] mx-auto mb-16 transition-all duration-700 ease-in-out">
          <div className="w-full flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="w-full md:w-[1170px] h-auto mb-8 md:mb-0">
              <img
                className="w-full h-auto rounded-lg"
                src="/sport1.png"
                alt="Football"
              />
            </div>

            {/* Event Details */}
            <div className="w-full md:w-auto flex flex-col items-center md:ml-8">
              <div
                className="text-4xl md:text-5xl font-bold font-['Poppins'] leading-[45px] text-center mb-4"
                style={{
                  background: 'linear-gradient(90deg, #9796f0 0%, #D9A7C7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Football
              </div>
              <div className="text-center text-[#333333] text-base md:text-lg font-normal font-['Poppins'] leading-7 mb-4">
                The football group is designed for enthusiasts who want to improve their tactics, fitness, and teamwork on the field.
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={() => handleJoin('/football')}
                  className="px-8 py-4 bg-gradient-to-r from-[#9796f0] via-[#f0c1d6] to-[#fbc7d4] rounded-full shadow border border-white text-white text-xl font-bold"
                >
                  Events
                </button>
                <button
                  onClick={() => handleIgnore('football')}
                  className="px-8 py-4 bg-gradient-to-r from-[#9796f0] via-[#f0c1d6] to-[#fbc7d4] rounded-full shadow border border-white text-white text-xl font-bold"
                >
                  Ignore
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section: Basketball */}
      {visibleSections.basketball && (
        <div className="w-full max-w-[1226px] mx-auto mb-16 transition-all duration-700 ease-in-out">
          <div className="w-full flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="w-full md:w-[1170px] h-auto mb-8 md:mb-0">
              <img
                className="w-full h-auto rounded-lg"
                src="/sport2.png"
                alt="Basketball"
              />
            </div>

            {/* Event Details */}
            <div className="w-full md:w-auto flex flex-col items-center md:ml-8">
              <div
                className="text-4xl md:text-5xl font-bold font-['Poppins'] leading-[45px] text-center mb-4"
                style={{
                  background: 'linear-gradient(90deg, #9796f0 0%, #D9A7C7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Basketball
              </div>
              <div className="text-center text-[#333333] text-base md:text-lg font-normal font-['Poppins'] leading-7 mb-4">
                Our basketball group brings together players eager to enhance their skills in shooting, dribbling, and teamwork.
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={() => handleJoin('/basketball')}
                  className="px-8 py-4 bg-gradient-to-r from-[#9796f0] via-[#f0c1d6] to-[#fbc7d4] rounded-full shadow border border-white text-white text-xl font-bold"
                >
                  Events
                </button>
                <button
                  onClick={() => handleIgnore('basketball')}
                  className="px-8 py-4 bg-gradient-to-r from-[#9796f0] via-[#f0c1d6] to-[#fbc7d4] rounded-full shadow border border-white text-white text-xl font-bold"
                >
                  Ignore
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

        {/* Swimming Section */}
        {visibleSections.swimming && (
        <div className="w-full max-w-[1226px] mx-auto mb-16 transition-all duration-700 ease-in-out">
            <div className="w-full flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="w-full md:w-[1170px] h-auto mb-8 md:mb-0">
                <img
                className="w-full h-auto rounded-lg"
                src="/sport3.png"
                alt="Swimming"
                />
            </div>

            {/* Event Details */}
            <div className="w-full md:w-auto flex flex-col items-center md:ml-8">
                <div
                className="text-4xl md:text-5xl font-bold font-['Poppins'] leading-[45px] text-center mb-4"
                style={{
                    background: 'linear-gradient(90deg, #9796f0 0%, #D9A7C7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
                >
                Swimming
                </div>
                <div className="text-center text-[#333333] text-base md:text-lg font-normal font-['Poppins'] leading-7 mb-4">
                Our swimming group is perfect for those looking to improve their strokes, endurance, and overall fitness in the water.
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                <button
                    onClick={() => handleJoin('/swimming')}
                    className="px-8 py-4 bg-gradient-to-r from-[#9796f0] via-[#f0c1d6] to-[#fbc7d4] rounded-full shadow border border-white text-white text-xl font-bold"
                >
                    Events
                </button>
                <button
                    onClick={() => handleIgnore('swimming')}
                    className="px-8 py-4 bg-gradient-to-r from-[#9796f0] via-[#f0c1d6] to-[#fbc7d4] rounded-full shadow border border-white text-white text-xl font-bold"
                >
                    Ignore
                </button>
                </div>
            </div>
            </div>
        </div>
        )}

        {/* Section: Tennis */}
        {visibleSections.tennis && (
        <div className="w-full max-w-[1226px] mx-auto mb-16 transition-all duration-700 ease-in-out">
            <div className="w-full flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="w-full md:w-[1170px] h-auto mb-8 md:mb-0">
                <img
                className="w-full h-auto rounded-lg"
                src="/sport4.png"
                alt="Tennis"
                />
            </div>

            {/* Event Details */}
            <div className="w-full md:w-auto flex flex-col items-center md:ml-8">
                <div
                className="text-4xl md:text-5xl font-bold font-['Poppins'] leading-[45px] text-center mb-4"
                style={{
                    background: 'linear-gradient(90deg, #9796f0 0%, #D9A7C7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
                >
                Tennis
                </div>
                <div className="text-center text-[#333333] text-base md:text-lg font-normal font-['Poppins'] leading-7 mb-4">
                The tennis group is ideal for players of all skill levels who want to refine their game, from serves to volleys.
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                <button
                    onClick={() => handleJoin('/tennis')}
                    className="px-8 py-4 bg-gradient-to-r from-[#9796f0] via-[#f0c1d6] to-[#fbc7d4] rounded-full shadow border border-white text-white text-xl font-bold"
                >
                    Events
                </button>
                <button
                    onClick={() => handleIgnore('tennis')}
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

export default Sport;