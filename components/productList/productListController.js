import { productCardController } from '../productCard/productCardController.js';
import { productListView } from './productListView.js' 
import { productListModel } from './productListModel.js' 

import { dispatchEvent } from '../../utils/dispatchEvent.js'

export const productListController = {
    async init($productList){
        $productList.innerHTML = '';
        let productsHTML = '';
        let productListHTML = '';	
        let products = [];


        try {
            dispatchEvent('startLoadingProducts', {message: 'Loading products', type: 'loading'} , $productList)
            products = await productListModel.getProducts();
            //Await 2 seconds to see the loader
            await new Promise(resolve => setTimeout(resolve, 3000));

        } catch (error) {
            dispatchEvent('Error cargando tweets', 'error' , $productList)
        } finally {
            dispatchEvent('finishLoadingProducts', null , $productList)

        }

        if (products.length === 0) {
            // Load empty products

        } else {
            
            products.forEach((product) => {
                productsHTML += productCardController.init(product)
                
            })
            productListHTML = productListView.render(productsHTML)
            
            dispatchEvent('productsLoaded', {message: 'Products loaded correctly', type: 'success'}, $productList)
            
        }


        $productList.innerHTML = productListHTML
    }

};