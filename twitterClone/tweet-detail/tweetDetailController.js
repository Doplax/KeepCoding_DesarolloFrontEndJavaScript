import { getTweet ,deleteTweet } from './tweetDetailModel.js'
import { buildTweet } from './tweetDetailView.js';
import { dispatchEvent } from './dispatchEvent.js'
import { decodeToken } from '../utils/decodeToken.js';

export const tweetDetailController = async (tweetDetail, tweetId) => {
    
    try {
        const tweet = await getTweet(tweetId);
        tweetDetail.innerHTML = buildTweet(tweet)
        handleDeleteTweet(tweet, tweetDetail);
    } catch (error) {
        dispatchEvent('tweetLoaded', {type: "error", message: "El tweet no existe", tweetDetail})
        setTimeout(() => {
            window.location = '/'
        },3000)
    } finally {

    }

}

const handleDeleteTweet = (tweet, tweetDetail) => {
    
    const token = window.localStorage.getItem('token');

    if (token) {
        const { userId } = decodeToken(token);
        if (userId === tweet.userId) {
            addDeteleTweetButton(tweet, tweetDetail) 
        }
    }
}

const addDeteleTweetButton = (tweet, tweetDetail) => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar tweet';
    deleteButton.addEventListener('click',async () =>{
        if (confirm('Seguro que quieres borrar este tweet?'))
        await deleteTweet(tweet.id)

        window.location = 'index.html'
    })

    tweetDetail.appendChild(deleteButton);
}