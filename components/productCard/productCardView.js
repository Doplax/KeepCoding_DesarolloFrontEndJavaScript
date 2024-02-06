const productCardView = {
  render(productCardModel) {
    return `
    <div class="m-3 w-72 cursor-pointer" onclick="location.href='/pages/product-detail/?id=${productCardModel.id}'" data-id="${productCardModel.id}">
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img class="w-full h-48 object-cover" src="${productCardModel.imageUrl}" alt="${productCardModel.name}">
      <div class="p-4">
        <div class="flex justify-between items-center">
          <span class="${productCardModel.isOnSale ? 'text-green-900' : 'text-red-900'} text-sm font-bold">${productCardModel.isOnSale ? "For Sale" : "Not For Sale"}</span>
          <span class="bg-greenColor font-bold text-white rounded-md text-xs py-1 px-2">${productCardModel.productCategory}</span>
        </div>
        <div class="mt-3 flex items-center justify-between">
        </div>
        <div class="flex w-full flex-row justify-between"> 
          <p class="font-bold text-lg truncate">${productCardModel.name}</p>
          <span class="text-gray-900 font-bold text-xl">$${productCardModel.price}</span>
        </div>
      
        <p class="text-gray-700 text-base truncate">${productCardModel.description}</p>
      </div>
    </div>
  </div>
  
    `;
  },
};

export { productCardView };
