import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: '',
  list: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      const username = action.payload;
      const userExists = state.list.find((user) => user.name === username);

      if (!userExists) {
        state.list.push({ name: username, topScore: 0 });
      }

      state.currentUser = username;
    },
    updateTopScore: (state, action) => {
      const { name, score } = action.payload;
      const user = state.list.find((u) => u.name === name);
      if (user && score > user.topScore) {
        user.topScore = score;
      }
    },
    logoutUser: (state) => {
  state.currentUser = null;
}

  },
});

export const { setCurrentUser, updateTopScore, logoutUser } = userSlice.actions;
export default userSlice.reducer;
