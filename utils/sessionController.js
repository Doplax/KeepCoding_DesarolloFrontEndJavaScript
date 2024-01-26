import { headerController } from "../components/header/headerController.js";
export const sessionController = {
    
    isUserLoggedIn(){
        return localStorage.getItem('token') 
    },

    renderHeader(){
        if (this.isUserLoggedIn()) {
            const header = document.querySelector('header');
            if (header) {
                header.remove();
            }

            headerController.logedHeader();
            
           ;
        }  else {
            const header = document.querySelector('header');
            if (header) {
                header.remove();
            }

            headerController.init()
        }
    },


}


// quiero que cuando se llame sesion controlelr carge un navar o otro