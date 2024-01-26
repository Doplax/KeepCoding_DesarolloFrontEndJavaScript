export const sessionController = {
    
    isUserLoggedIn(){
        return localStorage.getItem('token') 
    },

    setToken(jwt){
      localStorage.setItem("token", jwt);
    },

    removeToken(token){
      localStorage.removeItem(token);
    },

    getItem(token){
      localStorage.getItem(token)
    }


}


// quiero que cuando se llame sesion controlelr carge un navar o otro