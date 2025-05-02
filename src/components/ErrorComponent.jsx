import React from "react";

const ErrorComponent = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-red-600 text-xl font-semibold mb-2">
        Oops! Something went wrong.
      </h1>
      <p className="text-gray-600">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorComponent;
