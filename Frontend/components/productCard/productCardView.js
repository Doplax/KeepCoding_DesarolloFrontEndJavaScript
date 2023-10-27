// views/productCardView.js
const productCardView = {
    render(productCardModel) {
      return `
        <div class="product-card" data-id="${productCardModel.id}">
          <img src="${productCardModel.imageUrl}" alt="${productCardModel.name}" class="product-image">
          <h2 class="product-name">${productCardModel.name}</h2>
          <p class="product-description">${productCardModel.description}</p>
          <p class="product-price">$${productCardModel.price}</p>
        </div>
      `;
    }
  };
  
  export { productCardView };
  