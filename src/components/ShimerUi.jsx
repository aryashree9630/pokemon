import React from "react";

const ShimerUi = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-xl shadow animate-pulse space-y-4"
        >
          <div className="h-40 bg-gray-300 rounded-lg" />

          <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto" />

          <div className="flex justify-center space-x-2">
            <div className="h-4 w-16 bg-gray-300 rounded-full" />
            <div className="h-4 w-12 bg-gray-300 rounded-full" />
          </div>
          
          <div className="space-y-2">
            <div className="h-3 bg-gray-300 rounded w-3/4 mx-auto" />
            <div className="h-3 bg-gray-300 rounded w-2/3 mx-auto" />
            <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimerUi;
