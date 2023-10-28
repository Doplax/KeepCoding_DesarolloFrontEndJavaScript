import { ProductCardModel } from './productCardModel.js';
import { productCardView } from './productCardView.js';

export const productCardController = {
  init(product) {
    console.log(product);
    const parseProduct = new ProductCardModel(product);
    
    const productCardHTML = productCardView.render(parseProduct);

    return productCardHTML
  } 
};


