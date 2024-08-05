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
      // Handle the sign-up logic here
      console.log("signup",state)
      state.user = action.payload;
    },
    // other reducers
  },
});

export const { signUpUser } = userSlice.actions;
export default userSlice.reducer;
