import { getTweets } from "./tweetListModel";
//import


export const tweetListController = async (tweetList) => {
    tweetList.innerHTML = ""; // Limpia los tweets
    let tweets = []
    try {
        tweets = await getTweets()
    } catch (err) {
        const event = createCustomEvent('error', 'Error al cargar los tweets');
        tweetList.dispatchEvent(event); // Dispara un evento hacia arriba
    }

    if (tweets.length === 0) {
        tweetContainer.innerHTML = emptyTweets();
    } else {
        renderTweet(tweets, tweetList);
        const event = createCustomEvent('success', 'tweets loaded successfully')
        tweetList.dispatchEvent(event); // Dispara un evento hacia arriba
    }
}

const renderTweet = (tweets, tweetList) => {
    tweets.forEach(tweet => {
        const tweetContainer = document.createElement('div');
        tweetContainer.classList.add('tweetContainer');

        tweetContainer.innerHTML = buildTweet(tweet)
        tweetList.appendChild(tweetContainer)
    });
}

const createCustomEvent = (type, message) => {
    const event = new CustomEvent("tweetsLoaded",{
        detail: {
            type: type,
            message: message,
        },

    })
    return event
}