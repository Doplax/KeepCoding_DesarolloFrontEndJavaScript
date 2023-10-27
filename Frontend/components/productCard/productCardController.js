// controllers/productCardController.js
import { ProductCard } from '../models/productCardModel.js';
import { productCardView } from '../views/productCardView.js';

const productCardController = {
  init() {
    // Datos de ejemplo para el modelo (en una aplicación real, estos podrían venir de una API)
    const exampleProduct = new ProductCard(1, 'Example Product', 'This is an example product', 99.99, 'https://example.com/image.jpg');

    // Renderizar la vista
    const productCardHTML = productCardView.render(exampleProduct);

    // Insertar el HTML en el DOM
    document.querySelector("body").insertAdjacentHTML("beforeend", productCardHTML);
  }
};

export { productCardController };
