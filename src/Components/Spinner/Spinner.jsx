import React from 'react';

const Spinner = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center z-50">
      <div className="w-16 h-16 rounded-full border-4 border-t-4 border-t-pink-500 border-l-yellow-400 border-b-green-400 border-r-blue-500 animate-spin"></div>
      <p className="mt-4 text-indigo-600 font-semibold text-lg animate-pulse">Loading...</p>
    </div>
  );
};

export default Spinner;
