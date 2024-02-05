const AUTH_TOKEN = "authToken";
import { decodeToken } from "./decodeToken.js";

export const sessionController = {

  isUserLoggedIn(token = AUTH_TOKEN) {
    return localStorage.getItem(token);
  },

  setToken(jwt) {
    localStorage.setItem(AUTH_TOKEN, jwt);
  },

  removeToken(token = AUTH_TOKEN) {
    localStorage.removeItem(token);
  },

  getToken(token = AUTH_TOKEN) {
    return localStorage.getItem(token);
  },

  getUserId() {
    const token = this.getToken();
    if (!token) return undefined;

    const decodedToken = decodeToken(token);
    if (!decodedToken) {
      console.error('Error al decodificar el token');
      return undefined;
    }

    return decodedToken.userId; 
  },

  protectRoute() {
    if (!this.isUserLoggedIn()) {
      window.location.href = '/';
    }
  },
};