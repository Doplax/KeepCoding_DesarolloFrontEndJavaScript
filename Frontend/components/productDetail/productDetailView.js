// views/productDetailView.js
const productDetailView = {
    render(productDetailModel) {
      return `
        <div class="product-detail" data-id="${productDetailModel.id}">
          <img src="${productDetailModel.imageUrl}" alt="${productDetailModel.name}" class="product-image">
          <h2 class="product-name">${productDetailModel.name}</h2>
          <p class="product-description">${productDetailModel.description}</p>
          <p class="product-price">$${productDetailModel.price}</p>
          <p class="product-stock">Stock: ${productDetailModel.stock}</p>
          <p class="product-category">Category: ${productDetailModel.category}</p>
          <button class="add-to-cart">Add to Cart</button>
        </div>
      `;
    }
  };
  
  export { productDetailView };
  