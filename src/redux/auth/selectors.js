export const selectUser = ({ auth }) => auth.user;
export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;
export const selectAuth = ({ auth }) => {
  const { isLoggedIn, accessToken, refreshToken } = auth;
  return { isLoggedIn, accessToken, refreshToken };
};
export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;