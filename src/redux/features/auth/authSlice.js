import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  operatorId: null,
  userId: null,
  username: null,
  playerTokenAtLaunch: null,
  token: null,
  balance: null,
  exposure: null,
  currency: null,
  language: null,
  timestamp: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      const {
        operatorId,
        userId,
        username,
        playerTokenAtLaunch,
        token,
        balance,
        exposure,
        currency,
        language,
        timestamp,
      } = payload;
      state.operatorId = operatorId;
      state.userId = userId;
      state.username = username;
      state.playerTokenAtLaunch = playerTokenAtLaunch;
      state.token = token;
      state.balance = balance;
      state.exposure = exposure;
      state.currency = currency;
      state.language = language;
      state.timestamp = timestamp;
    },
    logout: (state) => {
      localStorage.clear();
      state.operatorId = null;
      state.userId = null;
      state.username = null;
      state.playerTokenAtLaunch = null;
      state.token = null;
      state.balance = null;
      state.exposure = null;
      state.currency = null;
      state.language = null;
      state.timestamp = null;
    },
    setBalance: (state, { payload }) => {
      state.balance = payload;
    },
  },
});

export const { logout, setUser, setBalance } = authSlice.actions;
export default authSlice.reducer;
export const userToken = (state) => state.auth.token;
export const currentUser = (state) => state.auth.user;
