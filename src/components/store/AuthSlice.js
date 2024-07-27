import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    email: null,
    password: null,
    token: null,
    isLoggedIn: false,
  },
  reducers: {
    login(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password || null;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.email = null;
      state.password = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice.reducer;
