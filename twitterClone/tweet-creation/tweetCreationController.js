import { createTweet } from "./tweetCreationModel";

export const tweetCreationController = ($tweetCreation) => {
    $tweetCreation.addeventlistener('submit', async (event) => {
        event.preventDefault();
        
        const formData = new FormData($tweetCreation);
        const message = formData.get('message');

        await createTweet(formData, message)
    })
}