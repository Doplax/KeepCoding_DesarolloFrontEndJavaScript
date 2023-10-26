const parseTweet = (tweet) => {
    return {
        handler: tweet.author.toUpperCase(),
        message: tweet.message,
        likes: [],
        userId: tweet.user.id,
        id: user.id
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

export const deleteTweet = async (tweetId) => {
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