import { getTweets } from "./tweetListModel";
//import


export const tweetListController = async (tweetList) => {
    const tweets = await getTweets()

    if (tweets.length === 0) {
        window.alert("No hay tweets disponibles")
    } else {
        tweets.forEach(tweet => {
            const tweetContainer = document.createElement('div');
            tweetContainer.classList.add('tweetContainer');
    
            tweetContainer.innerHTML = buildTweet(tweet)
            tweetList.appendChild(tweetContainer)
        });
    }

 
    
}