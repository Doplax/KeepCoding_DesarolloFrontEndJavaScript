import { headerController } from '../../components/header/headerController.js'
import { signUpController } from '../../components/register/signUpController.js'
import { notificationsController } from '../../components/notifications/notificationsController.js'

document.addEventListener('DOMContentLoaded',() => {
    headerController.init()
    const $notifications = document.querySelector('#notifications');
    const $signUpForm = document.querySelector('#signUpForm') 
    
     //Notifications
     $signUpForm.addEventListener('userCreated',(event) => {
        notificationsController.showNotification($notifications, event.detail.message, event.detail.type)
    })

    $signUpForm.addEventListener('userCreated',(event) => {
        notificationsController.showNotification($notifications, event.detail.message, event.detail.type)
    })
    
    signUpController.init($signUpForm)
})

