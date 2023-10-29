import { headerController } from '../../components/header/headerController.js'
import { loginController } from '../../components/login/loginController.js'
import { notificationsController } from '../../components/notifications/notificationsController.js'

document.addEventListener('DOMContentLoaded',() => {
    headerController.init()

    const $notifications = document.querySelector('#notifications');
    const $signInForm = document.querySelector('#signInForm')

    //Notifications
    $signInForm.addEventListener('LoginUser',(event) => {
        notificationsController.showNotification($notifications, event.detail.message, event.detail.type)
    })

    $signInForm.addEventListener('LoginUser',(event) => {
        notificationsController.showNotification($notifications, event.detail.message, event.detail.type)
    })

    loginController.init($signInForm)
})

