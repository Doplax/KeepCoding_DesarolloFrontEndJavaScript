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

tweetList.addEventListener('tweetsLoaded', () => {
    console.log('Los tweets han sido cargados!!');
})