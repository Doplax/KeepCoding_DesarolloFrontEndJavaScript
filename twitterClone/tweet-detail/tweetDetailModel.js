const parseTweet = (tweet) => {
    return {
        handler: tweet.author.toUpperCase(),
        photo: tweet.image,
        likes: tweet.likes,
        message: tweet.message
    }
}


export const getTweet = async (tweetId) => {
    const url = `https://localhost:8000/api/tweets/${tweetId}`
    let tweet;
    try {
        const response = await fetch(url)
        if (response.ok) {
            const tweet = response.json();
        } else {
            throw new Error('El Tweet no existe ')
        }
    } catch (error) {
        throw error.message;
    }
    return parseTweet(tweet)
}