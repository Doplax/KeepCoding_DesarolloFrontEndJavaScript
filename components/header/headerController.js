import { HeaderModel } from "./headerModel.js";
import { headerView } from "./headerView.js";

export const headerController = {
  init() {
    const headerLinks = HeaderModel.getLinks();
    const headerHTML = headerView.render(headerLinks);

    // Insert HTML
    document.querySelector('body').insertAdjacentHTML('afterbegin', headerHTML);
    
    headerController.toggleMenubutton()
  },

  logedHeader() {
    const headerLinks = HeaderModel.getLogedLinks();
    const headerHTML = headerView.render(headerLinks);

    // Insert HTML
    document.querySelector('body').insertAdjacentHTML('beforebegin', headerHTML);
    

    headerController.toggleMenubutton()

  },


  toggleMenubutton(){
    const menubutton = document.querySelector("#menu-button");
    const menu = document.querySelector("#menu");

    menubutton.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    })
  }


};
