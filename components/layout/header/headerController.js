import { HeaderModel } from "./headerModel.js";
import { headerView } from "./headerView.js";
import { sessionController } from "../../../utils/sessionController.js";

export const headerController = {
  render() {
    this.removeExistingHeader();
    const headerLinks = this.getHeaderLinksBasedOnLoginStatus();
    const headerHTML = headerView.render(headerLinks);
    
    document.querySelector("body").insertAdjacentHTML("afterbegin", headerHTML);
    
    this.toggleMenuVisibility();
    this.initializeLogoutButtonEventHandler();
  },

  toggleMenuVisibility() {
    const menuButton = document.querySelector("#menu-button");
    const menu = document.querySelector("#menu");

    menuButton.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  },

  getHeaderLinksBasedOnLoginStatus() {
    return sessionController.isUserLoggedIn()
      ? HeaderModel.getLogedLinks() // Enlaces para usuarios logueados
      : HeaderModel.getLinks();      // Enlaces para usuarios no logueados
  },

  removeExistingHeader() {
    const existingHeader = document.querySelector("header");
    if (existingHeader) {
      existingHeader.remove();
    }
  },

  initializeLogoutButtonEventHandler() {
    const logoutButton = document.querySelector('#navButton-logout');
    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        sessionController.removeToken('token')
        this.render(); // Reinicia el header tras el cierre de sesión
      });
    }
  },
};
