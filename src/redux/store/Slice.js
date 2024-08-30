// store/slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  // other initial state values
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUpUser: (state, action) => { 
      state.user = action.payload;
      console.log("signup after update", state.user);
    },
  },
});

export const { signUpUser } = userSlice.actions;
export default userSlice.reducer;
