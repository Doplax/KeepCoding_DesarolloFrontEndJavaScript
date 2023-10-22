import { loginUser } from "./loginModel"

export const loginController = async (loginForm) => {

    loginForm.addEventListener('submit', () => submitLogin(loginForm))
    

    // Gestionar respuesta
}

const submitLogin = async (loginForm) => {

    const { email , password } = getLoadingData(loginForm)

        // Login contra sparrest
        try {
            await loginUser(email, password)
            alert('Login Ok')
        } catch (error) {
            alert(error)
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