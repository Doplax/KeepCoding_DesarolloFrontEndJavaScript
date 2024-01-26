export const productListView = {
  render(productsHTML) {
    return `
            <div class="flex flex-wrap justify-center">
                ${productsHTML}
            </div>
            
        `;
  },
};
