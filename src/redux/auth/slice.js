const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: { id: null, name: null, email: null, avatarURL: null },
  refreshToken: null,
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder,
});
