// controllers/productDetailController.js
import { ProductDetail } from '../models/productDetailModel.js';
import { productDetailView } from '../views/productDetailView.js';

const productDetailController = {
  init() {
    // Datos de ejemplo para el modelo
    const exampleProductDetail = new ProductDetail(
      1,
      'Example Product',
      'This is an example product',
      99.99,
      'https://example.com/image.jpg',
      20,
      'Electronics'
    );

    // Renderizar la vista
    const productDetailHTML = productDetailView.render(exampleProductDetail);

    // Insertar el HTML en el DOM
    document.querySelector("body").insertAdjacentHTML("beforeend", productDetailHTML);
  }
};

export { productDetailController };
