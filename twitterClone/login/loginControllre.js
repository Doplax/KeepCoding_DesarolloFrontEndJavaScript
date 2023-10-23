import { loginUser } from "./loginModel"
import { dispatchEvent } from "../utils/dispatchEvent";
export const loginController = async (loginForm) => {

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();// Para evitar que se recargue la página al darle a submit
        submitLogin(loginForm)
        
    })
    // Gestionar respuesta
}

const submitLogin = async (loginForm) => {

    const { email , password } = getLoadingData(loginForm)

    // Login contra sparrest
    try {
        dispatchEvent('startLogin', null , loginForm)
        const jwt = await loginUser(email, password)
        alert('Login Ok')
        localStorage.setItem('token', jwt); // Guardamos el token en el navegador
        window.location = '../index.html'
    } catch (error) {
        alert(error)
    } finally {
        dispatchEvent('finishLogin', null, loginForm)
    }
}

const getLoadingData = (loginForm) => {
    //Obtener datos del formulario
    const formData = new FormData(loginForm)
    const email = formData.get('email')
    const password = formData.get('password')

    return  {
        email,
        password
    }
}