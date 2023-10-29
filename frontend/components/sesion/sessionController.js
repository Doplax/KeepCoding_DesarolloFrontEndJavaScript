import { sesionView } from "./sesionView.js";

export const sessionController = {

    init($navBar){
        if (this.isUserLoggedIn()) {
            $navBar.innerHTML = sesionView.buildUnauthorizedSession();
            const logoutButton = $navBar.querySelector('button');
            logoutButton.addEventListener('click', () => {
                localStorage.removeItem('token');
                sessionController.init($navBar) // Función recursiva
            });
        } else {
            $navBar.innerHTML = sesionView.buildAuthenticatedSession();  
        }
    },

    isUserLoggedIn(){
        return localStorage.getItem('token') 
    }
}

