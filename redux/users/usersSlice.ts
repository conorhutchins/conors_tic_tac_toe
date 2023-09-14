import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define an initial state
const initialState: {wins: number}[] = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    incrementWins: (state, action: PayloadAction<number>) => {
      state[action.payload].wins += 1;
    },
  },
});

export const {incrementWins} = usersSlice.actions;
export default usersSlice.reducer;
