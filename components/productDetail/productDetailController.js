// controllers/.js
import { productDetailModel } from "./productDetailModel.js";
import { productDetailView } from "./productDetailView.js";

export const productDetailController = {
  async init($productDetail, productId) {
    try {
      const product = await productDetailModel.getProductDetail(productId);
      $productDetail.innerHTML = productDetailView.render(product);
    } catch (error) {}
  },
};
