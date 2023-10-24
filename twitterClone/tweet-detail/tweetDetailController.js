import { getTweet } from './tweetDetailModel.js'

export const tweetDetailController = async (tweetDetail, tweetId) => {
    
    try {
        const tweet = await getTweet(tweetId);
        tweetDetail.innerHTML = buildTweet(tweet)
    } catch (error) {
        alert(error)
        window.location = '/'
    } finally {

    }

}