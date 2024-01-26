import { buildLoader } from "./loaderView.js";
export const loaderController = {
  showLoader($loader) {
    $loader.classList.add("active");
    $loader.innerHTML = buildLoader();
  },

  hideLoader($loader) {
    $loader.classList.remove("active");
    $loader.innerHTML = "";
  },
};
