import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// define the type for a user
type User = {
    id: string;
    name: string;
    wins: number;
};

// intial state for the users slice
const initialSlice: User[] = [];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      // Action to add a user
      addUser: (state, action: PayloadAction<{id: string; name: string}>) => {
        state.push({ id: action.payload.id, name: action.payload.name, wins: 0 });
      },
      // Action to increment the wins for a user
      incrementWins: (state, action: PayloadAction<string>) => {
        const user = state.find(u => u.id === action.payload);
        if (user) {
          user.wins += 1;
        }
      }
    }
  });
  
  export const { addUser, incrementWins } = usersSlice.actions;
  export default usersSlice.reducer;