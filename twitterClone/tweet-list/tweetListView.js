
export const buildTweet = (tweet) => {
    return `
        <span ${tweet.handler}</span>
        <span ${tweet.handler}</span>
        <p> ${tweet.message}</p>
        <p> ${tweet.likes}</p>
    `
}


export const emptyTweets = () =>{
    return `<h3>No hay tweets disponibles</h3>`
}