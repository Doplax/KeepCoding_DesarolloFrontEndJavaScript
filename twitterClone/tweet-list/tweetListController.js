import { getTweets } from "./tweetListModel";
//import


export const tweetListController = (tweetList) => {
    getTweets().then(tweets =>{
        tweets.forEach(element => {
            const tweetContainer = document.createElement('div');
            tweetContainer.classList.add('tweetContainer');

            tweetContainer.innerHTML = buildTweet(tweet)
            tweetList.appendChild(tweetContainer)
        });
    } )
}