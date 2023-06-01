export const selectUser = ({ auth }) => auth.user;
export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;
export const selectAuth = ({ auth }) => {
  const { isLoggedIn, accessToken } = auth;
  return { isLoggedIn, accessToken };
};
export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;