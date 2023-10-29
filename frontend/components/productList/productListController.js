import { productCardController } from '../productCard/productCardController.js';
import { productListView } from './productListView.js' 
import { productListModel } from './productListModel.js' 

export const productListController = {
    async init($productList){
        $productList.innerHTML = '';
        let productsHTML = '';
        let productListHTML = '';	
        let products = [];
        try {
            products = await productListModel.getProducts();
            console.log(products);


        } catch (error) {
            
        }

        if (products.length === 0) {
            // Load empty products

        } else {
            
            products.forEach((product) => {
                productsHTML += productCardController.init(product)
                
            })
            productListHTML = productListView.render(productsHTML)
        }


        $productList.innerHTML = productListHTML
    }

};