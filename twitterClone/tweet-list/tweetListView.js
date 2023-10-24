export const buildTweet = (tweet) => {
    return `
    <a href="../tweetDetail.html?id=${tweet.id}> 
        <span ${tweet.handler}</span>
        <span ${tweet.handler}</span>
        <p> ${tweet.message}</p>
    </a>
    `
}


export const emptyTweets = () =>{
    return `<h3>No hay tweets disponibles</h3>`
}