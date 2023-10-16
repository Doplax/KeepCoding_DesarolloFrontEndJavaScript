
export const buildTweet = (tweet) => {
    return `
        <span ${tweet.handler}</span>
        <span ${tweet.handler}</span>
        <img src=${tweet.image} alt="tweet image">
        <p> ${tweet.message}</p>
        <p> ${tweet.likes}</p>
    `
}


export const emptyTweets = () =>{
    return `<h3>No hay tweets disponibles</h3>`
}