import { getTweets } from "./tweetListModel";
//import


export const tweetListController = async (tweetList) => {
    tweetList.innerHTML = ""; // Limpia los tweets
    let tweets = []
    try {
        tweets = await getTweets()
    } catch (err) {
        const event = new CustomEvent("tweetsLoaded",{
            detail: {
                type: 'error',
                message: 'Error cargando tweets'
            },
    
        })
        tweetList.dispatchEvent(event); // Dispara un evento hacia arriba
    }

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
    
    const event = new CustomEvent("tweetsLoaded",{
        detail: {
            type: 'success',
            message: 'tweets loaded successfully'
        },

    })
    tweetList.dispatchEvent(event); // Dispara un evento hacia arriba


    }
}