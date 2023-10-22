import { notificationsController } from './notifications/notificationsController';
import { sessionController } from './sesion/sessionControllre';
import { tweetListController } from './tweetListController'

const notifications = document.getElementById('notifications')

const showNotifications = notificationsController(notifications)
const loader = document.getElementById('loader')
const { showLoader, hideLoader } = loaderController(loader)

document.addEventListener('DOMContentLoaded', () => {
    const tweetList = document.getElementById('tweets')
    tweetListController(tweetList)

    tweetList.addEventListener('tweetsLoaded', (event) => {
        showNotifications(event.detail.message, event.detail.type);
    })

    tweetList.addEventListener('startLoadingTweets', (event) => {
        showLoader()
    })

    tweetList.addEventListener('finishLoadingTweets', (event) => {
        hideLoader()
    })

    const session = document.getElementById('session')
    sessionController(session)
})

window.addEventListener('offline', () => {
    showNotifications('se ha perdido la conexión', 'error');    
})


//const loadTweetsButton = document.querySelector('#loadTweets');
//const removeTweetsButton = document.querySelector('#removeTwe');
//const hideTweetsButton = document.querySelector('#hideTweets');
//loadTweetsButton.addEventListener('click', () => {
//})

//removeTweetsButton.addEventListener('click', () => {
//    tweetList.innerHTML = '';
//})

//hideTweetsButton.addEventListener('click', () => {
//    tweetList.classList.toggle('hidden');
//})
