import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../features/users/userSlice';

const StartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.users.currentUser);
  const users = useSelector((state) => state.users.list);

  const handleStartGame = () => {
    navigate('/game');
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  const sortedUsers = [...users].sort((a, b) => b.topScore - a.topScore);
  const currentUserData = users.find((user) => user.name === currentUser);
  const currentUserRank = sortedUsers.findIndex((user) => user.name === currentUser) + 1;

  useEffect(() => {
    document.body.style.background = 'linear-gradient(to bottom right, #38A2D7, #561139)';
    return () => {
      document.body.style.background = '';
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 font-nunito text-white" style={{ background: 'linear-gradient(to bottom right, #38A2D7, #561139)' }}>
      
      {/* Left Images */}
      
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

      {/* Main Container */}
      <div className="bg-white/10  rounded-xl w-full max-w-2xl text-center px-6 py-8 z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Welcome, {currentUser}</h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <button
            onClick={handleStartGame}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg text-lg"
          >
            Start Game
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg text-lg"
          >
            Logout
          </button>
        </div>

        {/* Score Info */}
        <div className="text-base sm:text-lg md:text-xl mb-6">
          <h2 className="font-semibold">Your Top Score: {currentUserData?.topScore ?? 0}</h2>
          <p>
            You are ranked <strong>#{currentUserRank}</strong> on the leaderboard!
          </p>
        </div>

        {/* Leaderboard */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 mt-6">Top Scores</h2>
        <ul className="space-y-2 max-w-md mx-auto text-black text-left text-base sm:text-lg">
          {sortedUsers.map((user, index) => (
            <li
              key={index}
              className={`px-4 py-2 rounded-md ${
                user.name === currentUser
                  ? 'bg-green-100 font-bold border-2 border-green-500'
                  : 'bg-gray-100'
              }`}
            >
              #{index + 1}. <strong>{user.name}</strong>: {user.topScore}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Images */}
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

export default StartScreen;
