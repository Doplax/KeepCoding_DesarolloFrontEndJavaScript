import { ProductCardModel } from "../productCard/productCardModel.js";

export const productDetailModel = {
  // Heredamos de ProductCard para reutilizar atributos
  async getProductDetail(productId) {
    const url = `http://localhost:8000/api/products?id=${productId}`;
    let parsedProduct;

    try {
      const response = await fetch(url);
      
      if (response.ok) {
        let product = await response.json();
        parsedProduct = new ProductCardModel(product[0])
      } else {
        throw new Error("Prodcut does not exist");
      }
      
    } catch (error) {
      throw error.message;
    }
    
    return parsedProduct;
  },


  //async deleteProduct(productId) {

  //}
};
