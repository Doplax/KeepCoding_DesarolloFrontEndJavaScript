// controllers/adController.js
import { Ad } from '../models/adModel.js';
import { adView } from '../views/adView.js';

const adController = {
  init() {
    // Renderizar el formulario
    const formHTML = adView.render();
    document.querySelector("body").insertAdjacentHTML("beforeend", formHTML);

    // Agregar el evento de envío al formulario
    document.getElementById("ad-form").addEventListener("submit", function(event) {
      event.preventDefault();

      const formData = new FormData(event.target);
      const photo = formData.get("photo");
      const name = formData.get("name");
      const description = formData.get("description");
      const price = formData.get("price");
      const type = formData.get("type");

      const newAd = new Ad(photo, name, description, price, type);

      console.log(newAd);
    });
  }
};

export { adController };
