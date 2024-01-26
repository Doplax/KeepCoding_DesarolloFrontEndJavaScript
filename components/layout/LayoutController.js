import {headerController}  from "./header/headerController.js";
import {footerController}  from "./footer/footerController.js";


export const LayoutController = {
  render() {
    headerController.render();
    footerController.render();
  },
};
