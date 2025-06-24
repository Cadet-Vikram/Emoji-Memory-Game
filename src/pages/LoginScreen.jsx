import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../features/users/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === '') return;
    dispatch(setCurrentUser(username.trim()));
    navigate('/start');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#38A2D7] to-[#561139] flex flex-col items-center justify-center px-2 py-6 font-nunito">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl">
        {/* Image */}
        <div className="flex justify-center md:justify-end w-full md:w-1/3 mb-6 md:mb-0">
          <img
            src="./assets/coolemoji.png"
            alt="Cool Emoji"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 object-contain"
          />
        </div>

        {/* Login */}
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl w-full md:w-1/3 max-w-md text-center flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#3f51b5] mb-6">EMOJI GAME</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#3f51b5]"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base rounded-lg transition duration-300"
          >
            Start Playing
          </button>
        </div>

        {/* Instructions */}
        <div className="w-full md:w-1/3 flex justify-center mt-8 md:mt-0">
          <div className="max-w-md w-full bg-white bg-opacity-90 rounded-2xl shadow-2xl text-gray-800 font-nunito p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-4">
              🎮 Welcome to the Emoji Memory Challenge!
            </h1>
            <p className="text-base sm:text-lg text-center mb-6">
              Test your memory and beat the board! This fun and challenging game is all
              about focus and strategy. Click smart — and don’t repeat!
            </p>
            <div className="space-y-4">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">🕹️ How to Play:</h2>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                  <li>🔍 Look carefully at the 12 emojis shown.</li>
                  <li>🖱️ Click any emoji you haven’t clicked before.</li>
                  <li>🔀 Emojis will shuffle after every click!</li>
                  <li>😰 Don’t click the same emoji twice — or you lose.</li>
                  <li>✅ Click all 12 unique emojis once to win the game!</li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-green-600 mb-2">🏆 Scoring System:</h2>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                  <li>🎯 <strong>Current Score:</strong> Increases with each correct click.</li>
                  <li>🥇 <strong>Top Score:</strong> Your personal best — can you beat it?</li>
                  <li>❌ <strong>Game Over:</strong> Happens if you click a repeated emoji.</li>
                  <li>🏆 <strong>You Win:</strong> If you click all 12 different emojis!</li>
                </ul>
              </div>
              <div className="text-center mt-6 text-indigo-600 italic text-base">
                🎉 Tip: Stay sharp — every emoji is out to trick you!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
