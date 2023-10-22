import {signupController} from './signupController.js ';
import { notificationsController } from '../notifications/notificationsController.js';


const signupForm = document.querySelector('#signup');
const notificationsSection = document.querySelector('#notifications');

const showNotification = notificationsController(notificationsSection)
signupController(signupForm);

// Signup controller debe emitir event cuando se crea el usuario


// Ejecutamos el método X de notificationsController


