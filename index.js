import { headerController } from './components/header/headerController.js'
import { productListController } from './components/productList/productListController.js' 

//import { sessionController } from './components/sesion/sessionController.js'
import { loaderController } from './components/loader/loaderController.js'
import { notificationsController } from './components/notifications/notificationsController.js'


const $notifications = document.querySelector('#notifications');
const $loader = document.querySelector('#loader');
const $productList = document.querySelector('#product-list') 



document.addEventListener('DOMContentLoaded',() => {
    //Layout
    headerController.init()

    //Notifications
    $productList.addEventListener('startLoadingProducts',(event) => {
        notificationsController.showNotification($notifications, event.detail.message, event.detail.type)
    })

    $productList.addEventListener('productsLoaded',(event) => {
        notificationsController.showNotification($notifications, event.detail.message, event.detail.type)
    })
    
    //Loaders
    $productList.addEventListener('startLoadingProducts', () => {
        loaderController.showLoader($loader)
    })
    
    $productList.addEventListener('finishLoadingProducts', () => {
        loaderController.hideLoader($loader)
    })
    

    productListController.init($productList)

    //const session = document.getElementById('session');
    //sessionController(session);
})


window.addEventListener('offline', () => {
    notificationsController.showNotification($notifications, 'Connection has been lost', 'error');
})