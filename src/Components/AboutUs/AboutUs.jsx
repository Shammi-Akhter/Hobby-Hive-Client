import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const AboutUs = () => {
  return (
    <div className="px-4 py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Discover&nbsp;
          <span className="text-amber-400">
            <Typewriter
              words={['Hobbies', 'Communities', 'Passions', 'Connections']}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
          &nbsp;with HobbyHive
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
          Welcome to <span className="font-semibold text-blue-400">HobbyHive</span> — the ultimate community space for hobby enthusiasts!
          Whether you’re into painting, hiking, reading, or something totally unique, 
          HobbyHive connects you with people who share your passions.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
          Our platform makes it easy to <span className="font-medium text-gray-700">discover, join, or create local hobby-based groups</span>. 
          Meet like-minded individuals, explore new interests, and build meaningful friendships — all through shared experiences.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          At <span className="font-semibold text-blue-400">HobbyHive</span>, we believe hobbies aren’t just pastimes — they’re a way to connect, grow, and thrive. 
          Join us and start turning your passions into real-world connections.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
