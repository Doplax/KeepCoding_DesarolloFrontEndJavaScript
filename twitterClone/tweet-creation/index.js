import { tweetCreationController } from "./tweetCreationController.js"
import { notificationsController } from "../notifications/notificationsController.js"

//Con esto protegemos la ruta
const token = localStorage.getItem('token')
if (!token) {
    window.location = '/'
}

document.addEventListener(() =>{
    const $tweetCreation  = document.querySelector('#tweetCreation');

    const $notification = document.querySelector('#notifications');
    const showNotification = notificationsController($notification);


    $tweetCreation.addEventListener('tweetCreated', (event) => {
        showNotification(event.detail.message, event.detail.type);
    })  

    tweetCreationController($tweetCreation);    
})