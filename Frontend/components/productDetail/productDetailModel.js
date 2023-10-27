// models/productDetailModel.js
class ProductDetail extends ProductCard {  // Heredamos de ProductCard para reutilizar atributos
    constructor(id, name, description, price, imageUrl, stock, category) {
      super(id, name, description, price, imageUrl);  // Inicializamos los atributos heredados
      this.stock = stock;
      this.category = category;
    }
  }
  
  export { ProductDetail };
  