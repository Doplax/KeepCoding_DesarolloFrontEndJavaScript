export const signupController = (sigupForm) => {
    // Añadir escuchador al formulario para saber cúando se rellena
    sigupForm.addEventListener('submit',() => {

        // Extraer datos del formulario
        const email = sigupForm.querySelector('#email');
        const password = sigupForm.querySelector('#password');
        const passwordConfirmation = sigupForm.querySelector('#password-confirmation');
        
        // Validar Email
        const emailReRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if (emailReRegExp.test(email)) {
            alert('El email no es correcto');
        }

        // Validar contraseña
        if (password.value !== passwordConfirmation.value) {
            alert('las contraseñas no son iguales');
        }
    })

    // Feedback al usuario

    // Crear usuario contra Sparrest

    // Ejecutar lógica cuando se rellene el formulario
}