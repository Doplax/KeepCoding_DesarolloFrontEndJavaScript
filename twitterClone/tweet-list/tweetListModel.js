

const transformTweets = (tweets) => {
    return tweets.map(tweet => ({
        handler: tweet.author,
        date: new Date().toISOString(),
        message:tweet.message,
        likes: tweet.likes.lenght,
    }))
}

export const getTweets = () => {
    const url = "https://feke-tweets-api-kccerce.app/posts"

    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((tweets) =>{
                const parsedTweets = transformTweets(tweets);
                resolve(parsedTweets);
            })
    });
}