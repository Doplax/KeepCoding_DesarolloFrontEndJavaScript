export const getTweets = () => {
    const url = "https://feke-tweets-api-kccerce.app/posts"

    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((tweets) => resolve(tweets))
    });
}