import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clickedEmojis: [],
  currentScore: 0,
  isGameOver: false,
  isWinner: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    resetGame: (state) => {
      state.clickedEmojis = [];
      state.currentScore = 0;
      state.isGameOver = false;
      state.isWinner = false;
    },
    emojiClicked: (state, action) => {
      const emoji = action.payload;

      if (state.clickedEmojis.includes(emoji)) {
        state.isGameOver = true;
      } else {
        state.clickedEmojis.push(emoji);
        state.currentScore += 1;
        if (state.clickedEmojis.length === 12) {
          state.isWinner = true;
        }
      }
    }
  },
});

export const { resetGame, emojiClicked } = gameSlice.actions;
export default gameSlice.reducer;
