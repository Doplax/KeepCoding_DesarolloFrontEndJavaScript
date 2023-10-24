export const buildTweet = (tweet) => {
    let tweetTemplate = `
    <span ${tweet.handler}</span>
    <span ${tweet.handler}</span>
    <img src=${tweet.image} alt="tweet image">
    <p> ${tweet.message}</p>
    `;

    if (tweet.likes.lenght > 0) {
        tweetTemplate +=     `<p>Estos usuarios ${tweet.likes} han dado like al tweet</p>`   

    }

    return tweetTemplate
}