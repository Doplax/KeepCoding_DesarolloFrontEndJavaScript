import { buildUnauthorizedSession, buildAuthenticatedSession } from "./sesionView.js";

export const sessionController = (nav) => {

    if (isUserLoggedIn()) {
        nav.innerHTML = buildSessbuildAuthenticatedSessionion();
        const logoutButton = nav.querySelector('button');
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('token');
            sessionController(nav) // Función recursiva
        });
    } else {
        nav.innerHTML = buildUnauthorizedSession();        
    }
}

const isUserLoggedIn = () => {
    return localStorage.getItem('token') 
}