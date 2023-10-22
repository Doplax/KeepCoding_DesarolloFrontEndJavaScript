import { createUser } from "./signupModel"

export const signupController = (sigupForm) => {
    signupForm.addeventListener('submit',(event)=> validateForm(event, sigupForm)) //
}

const validateForm = async (event, signupForm) => {
    event.preventDefault();

    // Extraer datos del formulario
    const email = sigupForm.querySelector('#email');
    const password = sigupForm.querySelector('#password');
    const passwordConfirmation = sigupForm.querySelector('#password-confirmation');
    
        try {
            if (isFormValid(email, password, passwordConfirmation)) {

                await createUser(email.value, password.value)

                dispatchEvent('userCreated', {
                    type: 'success',
                    message: 'Usuario creado correctamente'
                }, signupForm)
            
            }
        } catch (error) {
            dispatchEvent('userCreated', {
                type: 'error',
                message: error,
            }, signupForm)

        }
    }


const isFormValid = (email, password, passwordConfirmation) => {
    const emailValidation =  isEmailValid(email);
    const passwordValidation = isPasswordValid(password, passwordConfirmation)

    return emailValidation && passwordValidation;
}

const isEmailValid = (email) => {
    // Validar Email
    const emailReRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    let result = true

    if (emailReRegExp.test(email)) {
        throw 'El email no es correcto';
        result = false;
    }
    return result
}

const isPasswordValid = (password, passwordConfirmation) => {
    let result = true;

    if (password.value !== passwordConfirmation.value) {
        throw 'las contraseñas no son iguales';
        result = false;
    }   
    return result;
}

const dispatchEvent = (eventName, data, signupForm) => {
    const event = new CustomEvent(eventName, {
        detail: data
    })
    signupForm.dispatchEvent(event)

}