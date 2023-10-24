export const buildTweet = (tweet) => {
    let tweetTemplate = `
    <span ${tweet.handler}</span>
    <p> ${tweet.message}</p>
    `;

    if (tweet.likes.lenght > 0) {
        tweetTemplate +=     `<p>Estos usuarios ${tweet.likes} han dado like al tweet</p>`   

    }

    return tweetTemplate
}