import { headerController } from './components/header/headerController.js'
import { productListController } from './components/productList/productListController.js'

document.addEventListener('DOMContentLoaded',() => {
    headerController.init()

    const $productList = document.querySelector('#product-list') 
    
    
    
    productListController.init($productList)
})

