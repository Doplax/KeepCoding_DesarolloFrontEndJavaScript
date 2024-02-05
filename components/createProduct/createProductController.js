import { dispatchEvent } from "../../utils/dispatchEvent.js";
import { createProductModel } from "./createProductModel.js";

export const createProductController = {
  init($createForm) {
    $createForm.addEventListener("submit", (event) => {
      event.preventDefault();

      createProductController.submitCreateProduct($createForm);
    });
  },

  getCreateProductData($createForm) {
    const formData = new FormData($createForm);
    const name = formData.get("name");
    const description = formData.get("description");

    const priceText = formData.get("price");
    const price = parseFloat(priceText);

    const productCategory = formData.get("productCategory");
    const imageUrl = "/assets/images/default.png";

    return {
      name,
      description,
      price,
      productCategory,
      imageUrl,
    };
  },

  async submitCreateProduct($createForm) {
    try {
      const productData = createProductController.getCreateProductData($createForm);
      await createProductModel.createProduct(productData);
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
