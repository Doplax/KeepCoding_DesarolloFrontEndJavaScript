import { productDetailModel } from "./productDetailModel.js";
import { productDetailView } from "./productDetailView.js";
import { sessionController } from "../../utils/sessionController.js";
import { dispatchEvent } from "../../utils/dispatchEvent.js";


export const productDetailController = {
  async init($productDetail, productId) {
    try {
      const product = await productDetailModel.getProductDetail(productId);

      const isOwnerProduct = await this.isOwner(product.userId);
      $productDetail.innerHTML = productDetailView.render(
        product,
        isOwnerProduct
      );
      if (isOwnerProduct) {
        this.deleteButton($productDetail, productId);
      }
    } catch (error) {}
  },

  async isOwner(productUserId) {
    try {
      const response = await fetch(`http://localhost:8000/api/users/`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const users = await response.json();
      const userId = await this.findCurrentUserId(users);

      if (productUserId === userId) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  },

  async findCurrentUserId(users) {
    const currentUser = sessionController.getUser(); // Obtiene el usuario actual
    if (!currentUser) {
      console.error("No current user data available");
      return null;
    }
    const currentUserData = users.find((user) => user.username === currentUser);
    return currentUserData ? currentUserData.id : null; // Devuelve el ID del usuario actual o null si no se encuentra
  },

  deleteButton($productDetail,productId) {

    const deleteButton = document.querySelector("#delete-button"); // Asegúrate de que el botón tenga este ID
    deleteButton.addEventListener("click", async () => {
      const token = sessionController.getToken(); // Obtiene el token
      if (!token) {
        console.error("No token available");
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:8000/api/products/${productId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`);
        }
        
        dispatchEvent(
          "productDeleted",
          { message: "Product deleted successfully", type: "success" },
          $productDetail
        );  
              
        await new Promise((resolve) => setTimeout(resolve, 1000));
        window.location = "/";
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    });
  },
};
