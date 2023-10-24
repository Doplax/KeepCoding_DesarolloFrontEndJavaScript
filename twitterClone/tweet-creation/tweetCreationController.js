import { createTweet } from "./tweetCreationModel";
import { dispatchEvent } from "../utils/dispatchEvent";

export const tweetCreationController = ($tweetCreation) => {
    $tweetCreation.addeventlistener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData($tweetCreation);
        const message = formData.get('message');
        
        
        try {
            await createTweet(formData, message)
            dispatchEvent('tweetCreated', {type: 'success', message: 'Tweet creado correctamente', $tweetCreation});
        } catch (error) {
            dispatchEvent('tweetCreated', {type: 'error', message: 'Error creando tweet', $tweetCreation});
            
        }
    })
}