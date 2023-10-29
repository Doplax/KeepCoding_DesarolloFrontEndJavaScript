import { headerController } from '../../components/header/headerController.js'
import { signUpController } from '../../components/singUp/signUpController.js'

document.addEventListener('DOMContentLoaded',() => {
    headerController.init()

    const $signUpForm = document.querySelector('#signUpForm') 
    
    
    
    signUpController.init($signUpForm)
})

