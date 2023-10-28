import { dispatchEvent } from '../../utils/dispatchEvent.js'
import { signUpModel } from "./signUpModel.js";

export const signUpController = {
    init($signUpForm) {
        $signUpForm.addEventListener('submit', (event) => signUpController.validateForm(event, $signUpForm));
    },

    async validateForm(event, $signUpForm) {
        event.preventDefault();
        
        // Extraer datos del formulario
        const email = $signUpForm.querySelector('#email');
        const password = $signUpForm.querySelector('#password');
        const passwordConfirmation = $signUpForm.querySelector('#passwordConfirmation');

        try {
            if (signUpController.isFormValid(email, password, passwordConfirmation)) {
                await signUpModel.createUser(email.value, password.value);

                dispatchEvent('userCreated', {
                    type: 'success',
                    message: 'Usuario creado correctamente'
                }, $signUpForm);

                window.location = '/pages/sign-in';
            }
        } catch (error) {
            dispatchEvent('userCreated', {
                type: 'error',
                message: error
            }, $signUpForm);
        }
    },

    isFormValid(email, password, passwordConfirmation) {
        const emailValid = signUpController.isEmailValid(email);
        const passwordValid = signUpController.isPasswordValid(password, passwordConfirmation);

        return (emailValid && passwordValid);
    },

    isEmailValid(email) {
        const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if (!emailRegExp.test(email.value)) {
            throw 'El email no es correcto';
        }
        return true;
    },

    isPasswordValid(password, passwordConfirmation) {
        if (password.value !== passwordConfirmation.value) {
            throw 'Las contraseñas no son iguales';
        }
        return true;
    },

  
};
