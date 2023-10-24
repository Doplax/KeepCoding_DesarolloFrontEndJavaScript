import { tweetDetailController } from './tweetDetailController.js'

document.addEventListener('DOMContentLoaded',() => {

    // Sacar id del tweet de la URL
    const params = new URLSearchParams(window.location.search)
    const tweetId = params.get('id');

    

    const tweetDetail = document.querySelector('#tweetDetail');
    tweetDetailController(tweetDetail, tweetId);



    // Pieza que reciba el id del tweet y devuelva los datos - Modelo
    // Pieza a la que le mandamos los datos del tweet y nos devuelve el HTML necesario - Vista
    // Pieza que renderice ese HTML en la pantalla - Controlador 
    
});