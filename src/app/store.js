import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import gameReducer from '../features/game/gameSlice';

 const store = configureStore({
  reducer: {
    users: userReducer,
    game: gameReducer,
  },
});

export default store;
