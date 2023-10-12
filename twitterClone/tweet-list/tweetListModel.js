

const transformTweets = (tweets) => {
    return tweets.map(tweet => ({
        handler: tweet.author,
        date: new Date().toISOString(),
        message:tweet.message,
        likes: tweet.likes.lenght,
    }))
}

export const getTweets = async () => {
    const url = "https://feke-tweets-api-kccerce.app/posts"

    // Promesas
    //return new Promise((resolve, reject) => {
    //    fetch(url)
    //        .then((response) => response.json())
    //        .then((tweets) =>{
    //            const parsedTweets = transformTweets(tweets);
    //            resolve(parsedTweets);
    //        })
    //});

    // Async Await
    const response = await fetch(url)
    const tweets = await response.json()
    const parsedTweets = transformTweets(tweets)
    return parsedTweets
}