import { productDetailModel } from "./productDetailModel.js";
import { productDetailView } from "./productDetailView.js";
import { sessionController } from "../../utils/sessionController.js";

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
        this.deleteButton(productId);
      }
    } catch (error) {}
  },

  async isOwner(productUserId) {
    try {
      const userId = sessionController.getUserId()

      if (productUserId === userId) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
  },

  deleteButton(productId) {
    const deleteButton = document.querySelector("#delete-button");
    deleteButton.addEventListener("click", async () => {
      const token = sessionController.getToken(); // Obtiene el token
      if (!token) {
        console.error("No token available");
        return;
      }

      try {
        await productDetailModel.deleteProduct(productId, token);
        console.log("Product successfully deleted");
        window.location = "/"
      } catch (error) {
        debugger
        console.error("Error deleting product:", error);
      }
    })
  }
};
