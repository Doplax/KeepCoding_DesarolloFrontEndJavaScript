import { dispatchEvent } from "../../utils/dispatchEvent.js";
import { createProductModel } from "./createProductModel.js";
import { ProductCardModel } from "../productCard/productCardModel.js"

export const createProductController = {
  init($createForm) {
    $createForm.addEventListener("submit", (event) => {
      event.preventDefault();

      createProductController.submitCreateProduct($createForm);
    });
  },

  getFormData($createForm) {
    const formData = new FormData($createForm);
    const name = formData.get("name");
    const description = formData.get("description");

    const priceText = formData.get("price");
    const price = parseFloat(priceText);

    const productCategory = formData.get("productCategory");
    const imageUrl = "/assets/images/default.png";

    const isOnSale = formData.get("sale") ? true : false;

    
    return {
      name,
      description,
      price,
      productCategory,
      imageUrl,
      isOnSale
    };
  },

  async submitCreateProduct($createForm) {
    try {
      const productData = createProductController.getFormData($createForm);
      const parsedProduct = new ProductCardModel(productData)
      await createProductModel.createProduct(parsedProduct);
      dispatchEvent(
        "productCreated",
        { message: "Product created successfully", type: "success" },
        $createForm
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
      window.location = "/";
    } catch (error) {
      dispatchEvent(
        "productCreated",
        { message: "Failed to create product", type: "error" },
        $createForm
      );
    }
  },
};
