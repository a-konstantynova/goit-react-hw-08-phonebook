import { createSlice } from '@reduxjs/toolkit';
import { registration, login, logout, refreshUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registration.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },

    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    [logout.pending]: (state, _) => {
      state.isLoading = true;
    },
    [logout.fulfilled]: (state, _) => {
      state.isLoading = false;
      state.token = null;
      state.user = { name: '', email: '' };
      state.isLoggedIn = false;
    },
    // [refreshUser.pending]: (state, _) => {
    //   state.isLoading = false;
    // },
    [refreshUser.fulfilled]: (_, action) => action.payload,
    // [refreshUser.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state = { ...action.payload, isLoading: false };
    // },
  },
});

export default authSlice.reducer;
