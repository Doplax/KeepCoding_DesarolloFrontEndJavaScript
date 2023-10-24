import { tweetDetailController } from './tweetDetailController.js'
import { notificationsController } from './notificationsController.js'

document.addEventListener('DOMContentLoaded',() => {

    // Sacar id del tweet de la URL
    const params = new URLSearchParams(window.location.search)
    const tweetId = params.get('id');

    const notifications  =document.querySelector('#notifications');
    const showNotification = notificationsController(notifications)

    const tweetDetail = document.querySelector('#tweetDetail');

    tweetDetailController.addEventListener('tweetLoaded', (event) => {
        showNotification(event.detail.message,'  ');
    })
    

    tweetDetailController(tweetDetail, tweetId);

});