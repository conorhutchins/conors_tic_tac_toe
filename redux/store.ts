import { configureStore } from '@reduxjs/toolkit';
import leaderboardReducer from './leaderboardSlice';
import usersReducer from './users/usersSlice';

const store = configureStore({
  reducer: {
    leaderboard: leaderboardReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;