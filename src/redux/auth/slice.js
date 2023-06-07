import { createSlice, isAllOf, isAnyOf } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';

const extraOperations = [login, logout, refreshUser, register];

const getOperations = type =>
  isAllOf(...extraOperations.map(operation => operation[type]));

const initialState = {
  user: {},
  refreshToken: '',
  accessToken: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens(state, { payload }) {
      state.refreshToken = payload.refreshToken;
      state.accessToken = payload.accessToken;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logout.fulfilled, state => {
        state.user = {};
        state.refreshToken = '';
        state.accessToken = '';
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.refreshToken = '';
        state.accessToken = '';
      })
      .addMatcher(getOperations('pending'), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled, refreshUser.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.refreshToken = payload.refreshToken;
          state.accessToken = payload.accessToken;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addMatcher(getOperations('rejected'), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { setTokens } = authSlice.actions