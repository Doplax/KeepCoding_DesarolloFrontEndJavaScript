import { headerController } from './components/header/headerController.js'
import { productCardController } from './components/productCard/productCardController.js'

document.addEventListener('DOMContentLoaded',() => {
    headerController.init()
    productCardController.init()
    
})

