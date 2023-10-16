import { notificationsController } from './notifications/notificationsController';
import { tweetListController } from './tweetListController'

const loadTweetsButton = document.querySelector('#loadTweets');
const removeTweetsButton = document.querySelector('#removeTwe');
const hideTweetsButton = document.querySelector('#hideTweets');

const tweetList = document.querySelectorById('tweets')
const notifications = document.getElementById('notifications')

notificationsController(notifications)

loadTweetsButton.addEventListener('click', () => {
    tweetListController(tweetList)
})

removeTweetsButton.addEventListener('click', () => {
    tweetList.innerHTML = '';
})

hideTweetsButton.addEventListener('click', () => {
    tweetList.classList.toggle('hidden');
})

tweetList.addEventListener('tweetsLoaded', (event) => { 
    const message = event.detail.message
    const type = event.detail.type;
    
    showNotifications(message, type);
})

window.addEventListener('offline', () => {
    showNotifications('se ha perdido la conexión', 'error');    
})
