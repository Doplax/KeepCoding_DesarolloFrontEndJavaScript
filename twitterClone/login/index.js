import { loginController } from "./loginControllre"
import { loaderController } from '../loader/loaderController.js'  

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login')
    
    const $loader = document.querySelector('#loader')
    const {showLoader, hideLoader} = loaderController($loader);

    loginForm.addEventListener('startLogin', () => {
        showLoader()
    })
    loginForm.addEventListener('finishLogin',() => {
        hideLoader()
    })

    loginController(loginForm) // Ponemos esto debaj ya que primero tenemos que cargar los escuchadores

})

