import { headerController } from '../../components/header/headerController.js'
import { loginController } from '../../components/login/loginController.js'
import { loaderController } from '../../components/loader/loaderController.js'

document.addEventListener('DOMContentLoaded',() => {
    headerController.init()

    const $signInForm = document.querySelector('#signInForm')
    //const $loader = document.querySelector('#loader')

    //Notifications
    $signInForm.addEventListener('startLoadingProducts',(event) => {
        notificationsController.showNotification($notifications, event.detail.message, event.detail.type)
    })

    $signInForm.addEventListener('productsLoaded',(event) => {
        notificationsController.showNotification($notifications, event.detail.message, event.detail.type)
    })

    //const {showLoader, hideLoader} = loaderController($loader);

    //$signInForm.addEventListener('startLogin', () => {
    //    showLoader()
    //})
    //$signInForm.addEventListener('finishLogin',() => {
    //    hideLoader()
    //})

    loginController.init($signInForm)
})

