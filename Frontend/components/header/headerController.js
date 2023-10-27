import {Header} from "./headerModel.js";
import {headerView} from "./headerView.js";

export const headerController = {
    init() {
        // Datos para el modelo (podrían venir de una API, base de datos, etc.)
        const headerLinks = [
            { name: "Home", url: "../../index.html" },
            { name: "Login", url: "#products" },
            { name: "Contact", url: "#contact" },
        ];

        // Crear una nueva instancia del modelo
        const header = new Header("Wallapop Clone", headerLinks);

        // Renderizar la vista
        const headerHTML = headerView.render(header);

        // Insertar el HTML en el DOM
        document.querySelector("#header").innerHTML = headerHTML
    },
};

