import { getTweets } from "./tweetListModel";
//import


export const tweetListController = async (tweetList) => {
    tweetList.innerHTML = ""; // Limpia los tweets
    const tweets = await getTweets()

    if (tweets.length === 0) {
        //window.alert("No hay tweets disponibles")
        tweetContainer.innerHTML = emptyTweets();
    } else {
        tweets.forEach(tweet => {
            const tweetContainer = document.createElement('div');
            tweetContainer.classList.add('tweetContainer');
    
            tweetContainer.innerHTML = buildTweet(tweet)
            tweetList.appendChild(tweetContainer)
        });
    
    const event = new CustomEvent("tweetsLoaded")
    tweetList.dispatchEvent(event); // Dispara un evento hacia arriba

    
    }
}