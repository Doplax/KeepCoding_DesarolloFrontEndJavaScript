import { Header } from "./headerModel.js";
import { headerView } from "./headerView.js";

export const headerController = {
  init() {
    // Datos para el modelo (podrían venir de una API, base de datos, etc.)
    const headerLinks = [
      { name: "Home", url: "/" },
      { name: "Login", url: "/pages/sing-in" },
      { name: "Sign-up", url: "/pages/sing-up" },
    ];

    // Crear una nueva instancia del modelo
    const header = new Header("Wallapop Clone", headerLinks);

    // Renderizar la vista
    const headerHTML = headerView.render(header);

    // Insertar el HTML en el DOM
    document.querySelector("#header").innerHTML = headerHTML;

    const button = document.querySelector("#menu-button");
    const menu = document.querySelector("#menu");

    button.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  },
};
