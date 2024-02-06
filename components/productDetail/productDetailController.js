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
        this.deleteButton(productId, $productDetail);
      }

      dispatchEvent(
        "productDetail",
        {
          type: "success",
          message: "Product Loaded successfully",
        },
        $productDetail
      );
    } catch (error) {
      dispatchEvent(
        "productDetail",
        {
          type: "error",
          message: "Failed to load product",
        },
        $productDetail
      );
    }
  },

  async isOwner(productUserId) {
    try {
      const userId = sessionController.getUserId();

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

  deleteButton(productId, $productDetail) {
    const deleteButton = document.querySelector("#delete-button");
    deleteButton.addEventListener("click", async () => {
      const token = sessionController.getToken(); // Obtiene el token
      if (!token) {
        console.error("No token available");
        return;
      }

      try {
        await productDetailModel.deleteProduct(productId, token);
        dispatchEvent(
          "productDetail",
          {
            type: "success",
            message: "Deleted correctly",
          },
          $productDetail
        );

        setTimeout(() => {
          window.location = "/";
        }, 2000);
      } catch (error) {
        dispatchEvent(
          "productDetail",
          {
            type: "error",
            message: error,
          },
          $productDetail
        );
      }
    });
  },
};
