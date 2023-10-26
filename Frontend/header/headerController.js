import {Header} from "./headerModel.js";
import {headerView} from "./headerView.js";

const headerController = {
    init() {
        // Datos para el modelo (podrían venir de una API, base de datos, etc.)
        const headerLinks = [
            { name: "Home", url: "#" },
            { name: "Products", url: "#products" },
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

export { headerController };
