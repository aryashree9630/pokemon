const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    const handlePrevious = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
  
    return (
      <div className="flex flex-col items-center mt-6 px-4 p-5 space-y-3 sm:space-y-0 sm:flex-row sm:justify-between">

        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 hidden md:block rounded font-medium ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Previous
        </button>

        <div className="flex flex-wrap justify-center gap-2 max-w-full overflow-x-auto">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`min-w-[40px] px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base transition-all duration-200 ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`hidden md:block px-4 py-2 rounded font-medium ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  