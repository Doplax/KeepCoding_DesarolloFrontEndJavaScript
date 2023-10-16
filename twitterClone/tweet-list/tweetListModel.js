

const transformTweets = (tweets) => {
    return tweets.map(tweet => ({
        handler: tweet.author,
        date: new Date().toISOString(),
        message:tweet.message,
        likes: tweet.likes.lenght,
        image: tweet.image,
    }))
}

export const getTweets = async () => {
    const url = "https://localhost:8000/api "
    let parsedTweets = [];
    // Async Await

    try {
        const response = await fetch(url)
        const tweets = await response.json()
        parsedTweets = transformTweets(tweets)

    } catch (error) {
        throw error
    }

    return parsedTweets

    //Promesas
    //return new Promise((resolve, reject) => {
    //    fetch(url)
    //        .then((response) => response.json())
    //        .then((tweets) =>{
    //            const parsedTweets = transformTweets(tweets);
    //            resolve(parsedTweets);
    //        })
    //});
}