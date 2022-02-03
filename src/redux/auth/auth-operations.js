import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registration = createAsyncThunk(
  'auth/registration',
  async credentials => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { getState }) => {
    const state = getState();
    if (!state.auth.token) {
      return;
    }
    try {
      token.set(state.auth.token);
      const response = await axios.get('/users/current');
      const initialState = {
        user: response.data,
        token: state.auth.token,
        isLoggedIn: true,
        isLoading: false,
      };
      return initialState;
    } catch (error) {
      console.log(error);
    }
  },
);
