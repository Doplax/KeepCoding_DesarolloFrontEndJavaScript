import { headerController } from '../../components/header/headerController.js'
import { productDetailController } from '../../components/productDetail/productDetailController.js'
import { signUpController } from '../../components/register/signUpController.js'


document.addEventListener('DOMContentLoaded',() => {
    headerController.init()
    
    const params = new URLSearchParams(window.location.search)
    const productId = params.get('id');

    const $productDetail = document.querySelector('#productDetail');
    productDetailController.init($productDetail, productId)

    signUpController.renderHeader()

})

