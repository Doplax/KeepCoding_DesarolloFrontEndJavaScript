import { productDetailController } from '../../components/productDetail/productDetailController.js'
import { sessionController } from '../../utils/sessionController.js'


document.addEventListener('DOMContentLoaded',() => {
    
    const params = new URLSearchParams(window.location.search)
    const productId = params.get('id');

    const $productDetail = document.querySelector('#productDetail');
    productDetailController.init($productDetail, productId)

    sessionController.renderHeader()

})

