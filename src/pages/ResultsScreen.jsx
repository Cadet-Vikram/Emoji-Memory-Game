import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetGame } from '../features/game/gameSlice';
import confetti from 'canvas-confetti'; // ✅ Ensure this is installed via: npm install canvas-confetti

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

  useEffect(() => {
    // 🎉 Confetti animation on mount
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  const getMessage = () => {
    if (isWinner) {
      return "Emojis speak louder than words — and you just proved it! 😎 You're unstoppable! Keep it up! 💪✨";
    } else if (currentScore === 0) {
      return "Tough round, huh? Try again! 💥";
    } else {
      return "Nice effort! Can you beat your top score? 🎯";
    }
  };

  const getEmojiFeedback = () => {
    if (isWinner) return '🏆 🤩 🎉';
    if (currentScore === 0) return '😓 💔 🫠';
    if (currentScore < topScore) return '👍 😌';
    return '🔥 🚀 💪';
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#38A2D7] to-[#561139] text-white p-6">
        <img
        src="./assets/coolduck.png"
        alt="Cool Duck"
        className="absolute w-20 sm:w-28 md:w-40 lg:w-52 left-6 top-[15%] -translate-y-1/2"
      />
      <img
        src="./assets/sideimage1.png"
        alt="Side Image 1"
        className="absolute w-20 sm:w-28 md:w-40 lg:w-52 left-0 top-1/2 -translate-y-1/2"
      />
      <img
        src="./assets/smile.png"
        alt="Smile"
        className="absolute w-20 sm:w-28 md:w-40 lg:w-52 left-6 top-[80%] -translate-y-1/2"
      />
      {/* 🎯 Heading */}
      <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
        {isWinner ? '🎉 You Nailed It!' : '🙌 Great Try!'}
      </h1>

      {/* 📊 Stats Section */}
      <div className="bg-white text-black p-6 rounded-2xl shadow-xl w-80 text-center mb-4">
        <p className="text-xl font-semibold">Your Score: <span className="text-blue-600">{currentScore}</span></p>
        <p className="text-lg">Top Score: <span className="text-purple-600">{topScore}</span></p>
      </div>

      {/* 💬 Motivational Message */}
      <p className="mt-2 text-lg italic text-center max-w-md">{getMessage()}</p>

      {/* 😄 Emoji Feedback */}
      <div className="text-3xl mt-3">{getEmojiFeedback()}</div>

      {/* 🔁 CTA Buttons */}
      <div className="mt-6 space-x-4">
        <button
          onClick={handlePlayAgain}
          className="px-6 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-all"
        >
          🔁 Play Again
        </button>
        <button
          onClick={handleBackToStart}
          className="px-6 py-2 bg-purple-700 rounded-lg text-white hover:bg-purple-800 transition-all"
        >
          ⬅️ Back to Start
        </button>
      </div>
      <img
        src="./assets/fires.png"
        alt="Fires"
        className="absolute w-20 sm:w-28 md:w-40 lg:w-52 right-6 top-[15%] -translate-y-1/2"
      />
      <img
        src="./assets/sideimage2.png"
        alt="Side Image 2"
        className="absolute w-20 sm:w-28 md:w-40 lg:w-52 right-0 top-1/2 -translate-y-1/2"
      />
      <img
        src="./assets/superstar.png"
        alt="Superstar"
        className="absolute w-20 sm:w-28 md:w-40 lg:w-52 right-6 top-[80%] -translate-y-1/2"
      />
    </div>
  );
};

export default ResultsScreen;
