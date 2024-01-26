import { sessionController } from "../utils/sessionController";

export const sparrestApi = {
  baseUrl: "http://localhost:8000/",

  get: async function (endpoint) {
    const url = this.baseUrl + endpoint;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const message = data.message || "Ha ocurrido un error";
        throw new Error(message);
      }
    } catch (error) {
      throw error.message;
    }
  },

  delete: async function (endpoint) {
    const url = this.baseUrl + endpoint;
    const token = sessionController.getItem("token");
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const data = await response.json();
        const message = data.message || "No ha sido posible borrar el elemento";
        throw new Error(message);
      }
    } catch (error) {
      if (error.message) {
        throw error.message;
      } else {
        throw error;
      }
    }
  },
};
