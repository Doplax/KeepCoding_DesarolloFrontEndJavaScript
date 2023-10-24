import { getTweet } from './tweetDetailModel.js'
import { dispatchEvent } from './dispatchEvent.js'

export const tweetDetailController = async (tweetDetail, tweetId) => {
    
    try {
        const tweet = await getTweet(tweetId);
        tweetDetail.innerHTML = buildTweet(tweet)
    } catch (error) {
        dispatchEvent('tweetLoaded', {type: "error", message: "El tweet no existe", tweetDetail})
        setTimeout(() => {
            window.location = '/'
        },3000)
    } finally {

    }

}