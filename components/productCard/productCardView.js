const productCardView = {
  render(productCardModel) {
    return `
      <div class="m-3" data-id="${productCardModel.id}">
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
          <img class="w-full" src="https://github.com/Doplax/doplax/blob/main/assets/img/product/defaultImage.png?raw=true" alt="${productCardModel.name}">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">${productCardModel.name}</div>
            <p class="text-gray-700 text-base">
              ${productCardModel.description}
            </p>
          </div>
          <div class="px-6 py-4 flex items-center">
            <span class="text-gray-700 font-bold text-xl">$${productCardModel.price}</span>
            
            <a href="/pages/product-detail/?id=${productCardModel.id}" class="ml-auto bg-greenColor text-white font-bold py-2 px-4 rounded">
              View Details
            </a>

          </div>
        </div>
      </div>
    `;
  }
};

export { productCardView };


{/*
Categorias
<div class="px-6 py-4">
  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#categoria1</span>
  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#categoria2</span>
</div>*/}