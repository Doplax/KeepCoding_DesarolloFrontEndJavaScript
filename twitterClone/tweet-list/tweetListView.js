export const buildTweet = (tweet) => {
    return `
    <a href="../tweetDetail.html?id=${tweet.id}> 
        <span ${tweet.handler}</span>
        <span ${tweet.handler}</span>
        <img src=${tweet.image} alt="tweet image">
        <p> ${tweet.message}</p>
        <p> ${tweet.likes}</p>   
    </a>
    `
}


export const emptyTweets = () =>{
    return `<h3>No hay tweets disponibles</h3>`
}