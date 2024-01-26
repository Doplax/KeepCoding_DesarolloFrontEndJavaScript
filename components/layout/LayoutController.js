import {headerController}  from "./header/headerController.js";

export const LayoutController = {
  render() {
    headerController.render();
    console.log('a');

  },
};
