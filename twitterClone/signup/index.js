import {signupController} from './signupController.js ';
import { notificationsController } from '../notifications/notificationsController.js';


const signupForm = document.querySelector('#signup');
const notificationsSection = document.querySelector('#notifications');

const showNotification = notificationsController(notificationsSection)
signupController(signupForm);

signupForm.addEventListener('userCreated',(event) => {
    showNotification(event.detail.message, event.detail.type) // Vienen los datos de CustomEvent en dispatchEvent
})

// Signup controller debe emitir event cuando se crea el usuario


// Ejecutamos el método X de notificationsController


