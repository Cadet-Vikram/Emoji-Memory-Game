import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetGame } from '../features/game/gameSlice'; // Make sure the path is correct

const ResultsScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isWinner, currentScore, topScore } = location.state || {};

  const handlePlayAgain = () => {
    dispatch(resetGame());
    navigate('/game');
  };

  const handleBackToStart = () => {
    dispatch(resetGame());
    navigate('/start');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#38A2D7] to-[#561139] text-white p-6">
      <h1 className="text-4xl font-bold mb-4">{isWinner ? '🎉 You Won!' : '❌ Game Over!'}</h1>
      
      <div className="bg-white text-black p-6 rounded-2xl shadow-lg text-lg space-y-3 text-center">
        <p><strong>Your Score:</strong> {currentScore}</p>
        <p><strong>Top Score:</strong> {topScore}</p>
      </div>

      <div className="mt-6 space-x-4">
        <button
          onClick={handlePlayAgain}
          className="px-6 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700"
        >
          🔁 Play Again
        </button>
        <button
          onClick={handleBackToStart}
          className="px-6 py-2 bg-purple-700 rounded-lg text-white hover:bg-purple-800"
        >
          ⬅️ Back to Start
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;