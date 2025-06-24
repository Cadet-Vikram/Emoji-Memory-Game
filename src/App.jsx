import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';
import StartScreen from './pages/StartScreen';
import GameScreen from './pages/GameScreen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/start" element={<StartScreen />} />
      <Route path="/game" element={<GameScreen />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
