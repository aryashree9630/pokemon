import { useNavigate } from "react-router-dom";

const RandomButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const randomId = Math.floor(Math.random() * 898) + 1;
    navigate(`/pokemon/${randomId}`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 active:scale-95 mr-4"
      title="Surprise with random pokemon"
    >
    Random Pokemon
    </button>
  );
};

export default RandomButton;
