import { ProductCardModel } from "./productCardModel.js";
import { productCardView } from "./productCardView.js";

export const productCardController = {
  init(product) {
    const parseProduct = new ProductCardModel(product);
    
    const productCardHTML = productCardView.render(parseProduct);

    return productCardHTML;
  },
};
