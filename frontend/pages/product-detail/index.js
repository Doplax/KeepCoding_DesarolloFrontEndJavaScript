import { headerController } from '../../components/header/headerController.js'

document.addEventListener('DOMContentLoaded',() => {
    headerController.init()
    
    const params = new URLSearchParams(window.location.search)
    const productId = params.get('id');
    console.log(productId);

})

