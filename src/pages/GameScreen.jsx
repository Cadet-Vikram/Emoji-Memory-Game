import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { emojiClicked, resetGame } from '../features/game/gameSlice';
import { updateTopScore } from '../features/users/userSlice';
import { useNavigate } from 'react-router-dom';
import emojisList from '../utils/emojis';

const GameScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [shuffledEmojis, setShuffledEmojis] = useState([]);

  const { clickedEmojis, currentScore, isGameOver, isWinner } = useSelector(state => state.game);
  const currentUser = useSelector(state => state.users.currentUser);
  const users = useSelector(state => state.users.list);

  const topScore = Math.max(...users.map(user => user.topScore));
  const currentUserData = users.find(user => user.name === currentUser);

  useEffect(() => {
    shuffleEmojis();
    dispatch(resetGame());
  }, [dispatch]);

  useEffect(() => {
    if ((isGameOver || isWinner) && currentUser) {
      dispatch(updateTopScore({ name: currentUser, score: currentScore }));
    }
  }, [isGameOver, isWinner, currentScore, currentUser, dispatch]);

  const shuffleEmojis = () => {
    const shuffled = [...emojisList].sort(() => 0.5 - Math.random());
    setShuffledEmojis(shuffled);
  };

  const handleEmojiClick = (emojiName) => {
    if (isGameOver || isWinner) return;
    dispatch(emojiClicked(emojiName));
    shuffleEmojis();
  };

  const handleRestart = () => {
    dispatch(resetGame());
    shuffleEmojis();
  };

  const handleGoBack = () => {
    navigate('/start');
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#38A2D7] to-[#561139] px-4 py-8 font-nunito text-center">
      
      {/* Left Floating Images */}
      <img src="./assets/emoticion.png" alt="emoji1" className="absolute left-0 top-[15%] w-[80px] sm:w-[120px] z-0" />
      <img src="./assets/sunglasses.png" alt="emoji2" className="absolute left-0 top-[50%] w-[120px] sm:w-[170px] z-0" />
      <img src="./assets/smile.png" alt="emoji3" className="absolute left-[40px] top-[80%] w-[170px] z-0" />

      <h1 className="text-white text-3xl sm:text-4xl font-bold mb-6">Emoji Memory Game</h1>

      {/* Scoreboard */}
      <div className="flex flex-wrap justify-center gap-4 text-base sm:text-lg text-gray-800 mb-6 z-10">
        <div className="bg-white px-4 py-2 rounded-xl shadow-md">👤 You: <strong>{currentUserData?.topScore ?? 0}</strong></div>
        <div className="bg-white px-4 py-2 rounded-xl shadow-md">🏆 Top Score: <strong>{topScore}</strong></div>
        <div className="bg-white px-4 py-2 rounded-xl shadow-md">🔢 Current: <strong>{currentScore}</strong></div>
        <div className="bg-white px-4 py-2 rounded-xl shadow-md">✅ Clicked: <strong>{clickedEmojis.length} / 12</strong></div>
      </div>

      {/* Emoji Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-[600px] w-full mx-auto">
        {shuffledEmojis.map((emoji) => (
          <button
            key={emoji.id}
            onClick={() => handleEmojiClick(emoji.emojiName)}
            className="bg-white rounded-lg shadow-lg p-3 hover:scale-105 transition-transform w-full h-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <img src={emoji.emojiUrl} alt={emoji.emojiName} className="w-14 h-14 object-contain" />
          </button>
        ))}
      </div>

      {/* Result Section */}
      {(isGameOver || isWinner) && (
        <div className="bg-white mt-8 px-6 py-6 rounded-2xl shadow-xl inline-block z-10">
          <h2 className="text-2xl font-semibold mb-4">{isWinner ? "🎉 You Won!" : "❌ Game Over!"}</h2>
          <div className="space-x-4">
            <button
              onClick={handleRestart}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              🔁 Restart
            </button>
            <button
              onClick={handleGoBack}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              ⬅️ Back
            </button>
          </div>
        </div>
      )}

      {/* Right Floating Images */}
      <img src="./assets/hat.png" alt="emoji4" className="absolute right-0 top-[15%] w-[80px] sm:w-[120px]" />
      <img src="./assets/smile2.png" alt="emoji5" className="absolute right-0 top-[50%] w-[120px] sm:w-[175px]" />
      <img src="./assets/happy-face.png" alt="emoji6" className="absolute right-[50px] top-[80%] w-[175px]" />
    </div>
  );
};

export default GameScreen;
