export class ProductCardModel {
  constructor(product) {
    this.id = product.id;
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.imageUrl = product.imageUrl;
    this.userId = product.userId
    this.isOnSale = product.isOnSale;
    this.productCategory = product.productCategory
  }
}
