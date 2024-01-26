export const sessionController = {
  isUserLoggedIn() {
    return localStorage.getItem("token");
  },

  setToken(jwt) {
    localStorage.setItem("token", jwt);
  },

  removeToken(token) {
    localStorage.removeItem(token);
  },

  getToken(token) {
    return localStorage.getItem(token);
  },

  protectRoute() {
    if (!this.isUserLoggedIn()) {
      window.location.href = '/';
    }
  }
};
