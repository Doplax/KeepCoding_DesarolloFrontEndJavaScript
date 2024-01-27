const USER_DATA = "userData"

export const sessionController = {

  isUserLoggedIn() {  
    return localStorage.getItem(USER_DATA);
  },

  setToken(tokenData) {
    localStorage.setItem(USER_DATA, JSON.stringify(tokenData)); 
  },

  removeToken() {
    localStorage.removeItem(USER_DATA);
  },

  getToken() {
    try {
      const tokenData = localStorage.getItem(USER_DATA);
      const { jwt } = JSON.parse(tokenData);
      return jwt;
    } catch (error) {
      console.error('Error al obtener el token:', error);
      return null;
    }
  },

  getUser() {
    try {
      const tokenData = localStorage.getItem(USER_DATA);
      const { username } = JSON.parse(tokenData);
      return username;
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      return undefined;
    }
  },

  protectRoute() {
    if (!this.isUserLoggedIn()) {
      window.location.href = '/';
    }
  }
};
