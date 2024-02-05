import { sessionController } from "../../utils/sessionController.js";

export const createProductModel = {
  async createProduct(productData) {
    const url = "http://localhost:8000/api/products"; 
    const { name, description, price, productCategory, imageUrl } = productData;

    const body = {
      name,
      description,
      price,
      productCategory,
      imageUrl,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${sessionController.getToken()}`, // suponiendo que el token está almacenado en el localStorage
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      return data;
    } catch (error) {
      if (error.message) {
        throw error.message;
      } else {
        throw error;
      }
    }
  },
};
