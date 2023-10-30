import { sessionController } from '../../utils/sessionController.js';
import { notificationsController } from '../../components/notifications/notificationsController.js'
import { signUpController } from '../../components/register/signUpController.js';

document.addEventListener('DOMContentLoaded',() => {
    sessionController.renderHeader()

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

